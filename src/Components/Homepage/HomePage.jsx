
"use client"
import { Button } from "../ui/Button"
import { Card, CardContent } from "../ui/Card"
import Link from "next/link"
import { ArrowRight, BarChart3, ClipboardCheck, HardHat, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className=" w-full overflow-y-auto">
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 w-[75%] mx-auto">
            AI-enabled Inspection for Mine Safety and Unified Accident Risk Evaluation
          </h1>
          <p className="text-lg md:text-2xl text-gray-500 mb-8">
            Enhancing mining safety through advanced AI technology, collaborative tools, and comprehensive data
            analysis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/whiteboard">
                Start Inspection <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<HardHat className="h-10 w-10" />}
            title="Safety Inspections"
            description="Conduct detailed safety inspections with our interactive whiteboard tools."
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10" />}
            title="Risk Assessment"
            description="AI-powered risk evaluation to identify potential hazards before they become incidents."
          />
          <FeatureCard
            icon={<BarChart3 className="h-10 w-10" />}
            title="Data Analytics"
            description="Comprehensive analytics dashboard to track safety metrics and trends."
          />
          <FeatureCard
            icon={<ClipboardCheck className="h-10 w-10" />}
            title="Accident Prevention"
            description="Learn from historical data to implement preventative safety measures."
          />
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-4 text-blue-500">{icon}</div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}
