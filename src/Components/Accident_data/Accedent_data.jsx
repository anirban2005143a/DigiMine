"use client"
"use client"
import React, { useState, useEffect } from 'react';
import {
    Search,
    Filter,
    HardHat,
    MapPin,
    Calendar,
    User,
    AlertTriangle,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import { csv } from 'd3-fetch';

const AccidentDataPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortConfig, setSortConfig] = useState({ key: 'Date', direction: 'desc' });
    const [filters, setFilters] = useState({
        mine: '',
        location: '',
        occupation: '',
        fatalities: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const csvData = await csv('/Australian Accident Data.csv');
                setData(csvData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const sortedAndFilteredData = React.useMemo(() => {
        let filtered = [...data];

        if (filters.mine) {
            filtered = filtered.filter(item =>
                item.Mine.toLowerCase().includes(filters.mine.toLowerCase())
            );
        }
        if (filters.location) {
            filtered = filtered.filter(item =>
                item['Accident Location']?.toLowerCase().includes(filters.location.toLowerCase())
            );
        }
        if (filters.occupation) {
            filtered = filtered.filter(item =>
                item.Occupation?.toLowerCase().includes(filters.occupation.toLowerCase())
            );
        }
        if (filters.fatalities) {
            filtered = filtered.filter(item =>
                item['No.of fatalities'] === filters.fatalities
            );
        }

        if (sortConfig.key) {
            filtered.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }

        return filtered;
    }, [data, sortConfig, filters]);

    if (loading) return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                <p className="mt-4 text-lg">Loading accident data...</p>
            </div>
        </div>
    );

    if (error) return (
        <div className="p-8 text-center text-red-500">
            <AlertTriangle className="mx-auto mb-2" size={24} />
            Error loading data: {error}
        </div>
    );

    return (
        <>
            <div className="min-h-screen bg-gray-50 md:p-6 p-3 overflow-y-auto">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                                <AlertTriangle className="mr-2 text-yellow-600" size={28} />
                                Australian Mine Accidents
                            </h1>
                            <p className="text-gray-600 mt-2">Historical data on mining incidents</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="mine"
                                    value={filters.mine}
                                    onChange={handleFilterChange}
                                    placeholder="Search mines..."
                                    className="pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                            </div>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
                        <div className="flex items-center mb-3">
                            <Filter className="mr-2 text-gray-500" size={18} />
                            <h2 className="text-lg font-medium text-gray-700">Filters</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <select
                                    name="location"
                                    value={filters.location}
                                    onChange={handleFilterChange}
                                    className="w-full pl-3 pr-8 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="">All Locations</option>
                                    <option value="Surface">Surface</option>
                                    <option value="Underground">Underground</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
                                <input
                                    type="text"
                                    name="occupation"
                                    value={filters.occupation}
                                    onChange={handleFilterChange}
                                    placeholder="Filter by occupation"
                                    className="w-full pl-3 pr-8 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Fatalities</label>
                                <input
                                    type="number"
                                    name="fatalities"
                                    value={filters.fatalities}
                                    onChange={handleFilterChange}
                                    placeholder="Filter by count"
                                    className="w-full pl-3 pr-8 py-2 border rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="flex items-end">
                                <button
                                    onClick={() => setFilters({
                                        mine: '',
                                        location: '',
                                        occupation: '',
                                        fatalities: ''
                                    })}
                                    className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Clear All Filters
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sort Controls */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-gray-500">
                            Showing {sortedAndFilteredData.length} of {data.length} incidents
                        </div>
                        <div className="flex items-center">
                            <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                            <div className="relative">
                                <select
                                    value={sortConfig.key}
                                    onChange={(e) => handleSort(e.target.value)}
                                    className="appearance-none pl-3 pr-8 py-1 border rounded-lg shadow-sm text-sm focus:ring-blue-500 focus:border-blue-500"
                                >
                                    <option value="Date">Date</option>
                                    <option value="Mine">Mine</option>
                                    <option value="No.of fatalities">Fatalities</option>
                                    <option value="Accident Location">Location</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    {sortConfig.direction === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    {sortedAndFilteredData.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortedAndFilteredData.map((item, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                    <div className="p-5">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900">{item.Mine}</h3>
                                                <p className="text-sm text-gray-500 mt-1">{item.Date}</p>
                                            </div>
                                            <div className={`px-3 py-1 min-w-[80px] text-center rounded-full text-[10px] font-semibold ${item['No.of fatalities'] > 1 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {item['No.of fatalities']} fatality{item['No.of fatalities'] > 1 ? 'ies' : ''}
                                            </div>
                                        </div>

                                        <div className="mt-4 space-y-3">
                                            <div className="flex items-center">
                                                <MapPin className="text-gray-400 mr-2" size={16} />
                                                <span className="text-sm text-gray-600">{item['Accident Location']}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <User className="text-gray-400 mr-2" size={16} />
                                                <span className="text-sm text-gray-600">{item.Occupation || 'Not specified'}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <HardHat className="text-gray-400 mr-2" size={16} />
                                                <span className="text-sm text-gray-600">{item.Gender}</span>
                                            </div>
                                        </div>

                                        <div className="mt-4 pt-4 border-t border-gray-100">
                                            <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Incident Details</h4>
                                            <p className="text-sm text-gray-700 line-clamp-3">{item['Incident Description']}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                            <AlertTriangle className="mx-auto text-gray-400 mb-4" size={32} />
                            <h3 className="text-lg font-medium text-gray-900">No incidents found</h3>
                            <p className="text-gray-500 mt-1">Try adjusting your filters to see more results</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default AccidentDataPage;