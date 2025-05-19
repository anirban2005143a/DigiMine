"use client"

import { useState } from "react"
import { Tldraw } from "@tldraw/tldraw"
import "@tldraw/tldraw/tldraw.css"
import { Button } from "../../Components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../Components/ui/Card"
import { Upload, Save, FileImage } from "lucide-react"
import Link from "next/link"

export default function WhiteboardPage() {
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = () => {
    setIsSaving(true)
    // Simulate saving
    setTimeout(() => {
      setIsSaving(false)
      // Show success message or notification
      alert("Inspection saved successfully! View it in the Saved Inspections page.")
    }, 1000)
  }

  return (
    <div className=" mx-auto max-w-[1500px]">
      <div className="mb-6 px-6 py-6">
        <h1 className="text-3xl font-bold mb-2">Safety Inspection Whiteboard</h1>
        <p className="text-gray-500">Import images, add annotations, and collaborate on safety inspections.</p>
      </div>

      <div className=" md:px-4 px-2 flex items-start gap-2 my-5">
        <div className=" w-full">
          <Card className="border shadow-sm">
            <CardContent className="h-[calc(100vh-50px)]">
              <Tldraw />
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6 w-[15%] min-w-[200px] max-w-[400px] ">
          <Card>
            <CardHeader>
              <CardTitle>Tools</CardTitle>
              <CardDescription>Import and manage your inspection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start">
                <Upload className="mr-2 h-4 w-4" /> Import Image
              </Button>
              <Button className="w-full justify-start" variant="outline" onClick={handleSave} disabled={isSaving}>
                <Save className="mr-2 h-4 w-4" /> {isSaving ? "Saving..." : "Save Inspection"}
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <FileImage className="mr-2 h-4 w-4" /> Export as Image
              </Button>
            </CardContent>
          </Card>


        </div>
      </div>

      <div className=" relative mx-5 mb-9">
      <div className="w-[3px] h-full absolute top-0 left-0 bg-blue-500 rounded-l-full"/>
        <Card className="ps-5">
          <CardHeader>
            <CardTitle>Recent Inspections</CardTitle>
            <CardDescription>Previously saved work</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="text-sm p-2 hover:bg-gray-200 rounded cursor-pointer">
                Mine Shaft A Inspection - 05/18/2025
              </li>
              <li className="text-sm p-2 hover:bg-gray-200 rounded cursor-pointer">Equipment Check - 05/17/2025</li>
              <li className="text-sm p-2 hover:bg-gray-200 rounded cursor-pointer">Safety Drill Review - 05/15/2025</li>
            </ul>
            <div className=" py-4  ">
              <Button variant="link" className="p-0 h-auto" asChild>
                <Link href="/saved-inspections">View all saved inspections →</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
