"use client";

import { useState } from "react";
import {
    Eye,
    Edit,
    Share,
    Download,
    Trash,
    Filter,
    MoreHorizontal,
    Search,
} from "lucide-react";

// Sample data for saved whiteboard inspections
const savedInspections = [
    {
        id: 1,
        title: "Mine Shaft A Safety Inspection",
        description: "Routine safety check of ventilation systems and support structures",
        createdBy: "Sarah Chen",
        userInitials: "SC",
        date: "May 18, 2025",
        tags: ["Ventilation", "Structural"],
        thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 2,
        title: "Equipment Maintenance Check",
        description: "Inspection of drilling equipment and maintenance requirements",
        createdBy: "James Wilson",
        userInitials: "JW",
        date: "May 17, 2025",
        tags: ["Equipment", "Maintenance"],
        thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 3,
        title: "Safety Drill Review",
        description: "Analysis of emergency evacuation procedures and improvements",
        createdBy: "Robert Kim",
        userInitials: "RK",
        date: "May 15, 2025",
        tags: ["Emergency", "Training"],
        thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 4,
        title: "Tunnel B Inspection",
        description: "Structural integrity assessment of Tunnel B after recent excavation",
        createdBy: "Michael Rodriguez",
        userInitials: "MR",
        date: "May 14, 2025",
        tags: ["Structural", "Excavation"],
        thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 5,
        title: "Conveyor System Analysis",
        description: "Safety inspection of the main conveyor system and transfer points",
        createdBy: "Aisha Patel",
        userInitials: "AP",
        date: "May 12, 2025",
        tags: ["Equipment", "Mechanical"],
        thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 6,
        title: "Electrical Systems Check",
        description: "Inspection of electrical installations in processing area",
        createdBy: "Elena Gonzalez",
        userInitials: "EG",
        date: "May 10, 2025",
        tags: ["Electrical", "Processing"],
        thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 7,
        title: "Ventilation Assessment",
        description: "Air quality and ventilation system performance evaluation",
        createdBy: "Sarah Chen",
        userInitials: "SC",
        date: "May 8, 2025",
        tags: ["Ventilation", "Air Quality"],
        thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
        id: 8,
        title: "Slope Stability Analysis",
        description: "Assessment of open pit mine wall stability and safety measures",
        createdBy: "James Wilson",
        userInitials: "JW",
        date: "May 5, 2025",
        tags: ["Structural", "Geotechnical"],
        thumbnail: "/placeholder.svg?height=400&width=600",
    },
]

export const AllServay = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredInspections, setFilteredInspections] = useState(savedInspections);
    const [view, setView] = useState("grid");

    const handleSearch = () => {
        const filtered = savedInspections.filter((item) =>
            [item.title, item.description, item.createdBy, ...item.tags]
                .join(" ")
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        setFilteredInspections(filtered);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                    <h1 className="text-3xl font-bold">Saved Inspections</h1>
                    <p className="text-gray-500">View and manage all saved whiteboard inspections</p>
                </div>
                <a href="/whiteboard" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Create New Inspection
                </a>
            </div>

            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 flex gap-2">
                    <input
                        type="text"
                        placeholder="Search inspections..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 w-full max-w-md"
                    />
                    <button
                        onClick={handleSearch}
                        className="flex items-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                    >
                        <Search className="w-4 h-4 mr-2" />
                        Search
                    </button>
                </div>
                <div className="flex gap-2">
                    <button className="flex items-center border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                    </button>
                    <button className="flex items-center border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
                        Sort By
                        <MoreHorizontal className="w-4 h-4 ml-2" />
                    </button>
                </div>
            </div>

            {/* View Toggle */}
            <div className="mb-6">
                <div className="flex gap-4">
                    <button
                        className={`px-4 py-2 rounded ${view === "grid" ? "bg-gray-800 text-white" : "border border-gray-300"
                            }`}
                        onClick={() => setView("grid")}
                    >
                        Grid View
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${view === "list" ? "bg-gray-800 text-white" : "border border-gray-300"
                            }`}
                        onClick={() => setView("list")}
                    >
                        List View
                    </button>
                </div>
            </div>

            {/* Inspection List */}
            {view === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredInspections.map((inspection) => (
                        <div key={inspection.id} className="bg-white shadow rounded overflow-hidden">
                            <div className="relative aspect-video bg-gray-100">
                                <img
                                    src={inspection.thumbnail}
                                    alt={inspection.title}
                                    className="w-full h-full object-cover transition-transform hover:scale-105"
                                />
                                <div className="absolute top-2 right-2 flex gap-1">
                                    <button className="bg-white bg-opacity-80 rounded-full p-1 shadow">
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold truncate">{inspection.title}</h3>
                                <p className="text-sm text-gray-500 line-clamp-2 mt-1">{inspection.description}</p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {inspection.tags.map((tag) => (
                                        <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                                            {inspection.userInitials}
                                        </div>
                                        <span>{inspection.createdBy}</span>
                                    </div>
                                    <span>{inspection.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredInspections.map((inspection) => (
                        <div key={inspection.id} className="bg-white shadow rounded overflow-hidden p-4 flex flex-col md:flex-row gap-4">
                            <div className="w-full md:w-48 h-24 bg-gray-100 rounded overflow-hidden">
                                <img
                                    src={inspection.thumbnail}
                                    alt={inspection.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <h3 className="font-semibold">{inspection.title}</h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs">
                                            {inspection.userInitials}
                                        </div>
                                        <span>{inspection.createdBy}</span>
                                        <span>•</span>
                                        <span>{inspection.date}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">{inspection.description}</p>
                                <div className="flex justify-between items-center mt-3">
                                    <div className="flex flex-wrap gap-2">
                                        {inspection.tags.map((tag) => (
                                            <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="flex items-center text-sm text-gray-600 hover:underline">
                                            <Eye className="w-4 h-4 mr-1" /> View
                                        </button>
                                        <button className="flex items-center text-sm text-gray-600 hover:underline">
                                            <Edit className="w-4 h-4 mr-1" /> Edit
                                        </button>
                                        <button className="text-gray-600">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
