
"use client"

import { useState } from "react"
import { Card, CardContent } from "../ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Badge } from "../ui/badge"
import { Download, Edit, Eye, Filter, MoreHorizontal, Search, Share, Trash } from "lucide-react"
import Link from "next/link"

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

export const AllSurveys = ()=> {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredInspections, setFilteredInspections] = useState(savedInspections)

  const handleSearch = () => {
    const filtered = savedInspections.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.createdBy.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
    )
    setFilteredInspections(filtered)
  }

  return (
    <div className=" mx-auto p-4 my-5 overflow-y-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Saved Inspections</h1>
          <p className="text-gray-500">View and manage all saved whiteboard inspections</p>
        </div>
        <Button asChild>
          <Link href="/whiteboard">Create New Inspection</Link>
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 flex gap-2">
          <Input
            placeholder="Search inspections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md"
          />
          <Button onClick={handleSearch}>
            <Search className="h-4 w-4 mr-2" /> Search
          </Button>
        </div>
        <div className="flex gap-2">
          <Button className="border border-gray-300 text-gray-800 bg bg-gray-100 hover:bg-gray-400/20">
            <Filter className="h-4 w-4" /> Filter
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="border border-gray-300 text-gray-800 bg-gray-100 hover:bg-gray-400/20">
                Sort By <MoreHorizontal className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-100">
              <DropdownMenuItem>Newest First</DropdownMenuItem>
              <DropdownMenuItem>Oldest First</DropdownMenuItem>
              <DropdownMenuItem>Alphabetical</DropdownMenuItem>
              <DropdownMenuItem>By User</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="grid" className="space-y-6">
        <TabsList>
          <TabsTrigger value="grid" className="cursor-pointer">Grid View</TabsTrigger>
          <TabsTrigger value="list" className="cursor-pointer">List View</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInspections.map((inspection) => (
              <InspectionCard key={inspection.id} inspection={inspection} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list">
          <div className="space-y-4">
            {filteredInspections.map((inspection) => (
              <InspectionListItem key={inspection.id} inspection={inspection} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function InspectionCard({ inspection }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <img
          src={inspection.thumbnail || "/placeholder.svg"}
          alt={inspection.title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Eye className="h-4 w-4 mr-2" /> View
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="h-4 w-4 mr-2" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Share className="h-4 w-4 mr-2" /> Share
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="h-4 w-4 mr-2" /> Download
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">
                <Trash className="h-4 w-4 mr-2" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium truncate">{inspection.title}</h3>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{inspection.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {inspection.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-gray-500/20">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarFallback className="text-xs bg-gray-400/20 text-black">{inspection.userInitials}</AvatarFallback>
            </Avatar>
            <span className="text-gray-500">{inspection.createdBy}</span>
          </div>
          <span className="text-gray-500">{inspection.date}</span>
        </div>
      </CardContent>
    </Card>
  )
}

function InspectionListItem({ inspection }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-48 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
            <img
              src={inspection.thumbnail || "/placeholder.svg"}
              alt={inspection.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
              <h3 className="font-medium">{inspection.title}</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarFallback className="text-xs">{inspection.userInitials}</AvatarFallback>
                </Avatar>
                <span className="text-sm text-gray-500">{inspection.createdBy}</span>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-500">{inspection.date}</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-3">{inspection.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {inspection.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4 mr-2" /> View
                </Button>
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4 mr-2" /> Edit
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Share className="h-4 w-4 mr-2" /> Share
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="h-4 w-4 mr-2" /> Download
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash className="h-4 w-4 mr-2" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
