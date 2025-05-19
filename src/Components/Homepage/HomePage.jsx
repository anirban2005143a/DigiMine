// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section */}
//       <section className="py-20 px-4 text-center bg-gradient-to-r from-blue-800 to-blue-600 text-white">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             AI-enabled Inspection for Mine Safety and Unified Accident Risk Evaluation
//           </h1>
//           <p className="text-xl mb-8 opacity-90">
//             Enhancing mining safety through advanced AI technology, collaborative tools, and comprehensive data analysis.
//           </p>
//           <div className="flex justify-center gap-4">
//             <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
//               Start Inspection →
//             </button>
//             <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition">
//               View Dashboard
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 px-4 max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Feature 1 */}
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <div className="text-blue-600 mb-4">
//               <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">Safety Inspections</h3>
//             <p className="text-gray-600">
//               Conduct detailed safety inspections with our interactive whiteboard tools.
//             </p>
//           </div>
          
//           {/* Feature 2 */}
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <div className="text-blue-600 mb-4">
//               <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">Risk Assessment</h3>
//             <p className="text-gray-600">
//               AI-powered risk evaluation to identify potential hazards before they become incidents.
//             </p>
//           </div>
          
//           {/* Feature 3 */}
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <div className="text-blue-600 mb-4">
//               <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">Data Analytics</h3>
//             <p className="text-gray-600">
//               Comprehensive analytics dashboard to track safety metrics and trends.
//             </p>
//           </div>
          
//           {/* Feature 4 */}
//           <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
//             <div className="text-blue-600 mb-4">
//               <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <h3 className="text-xl font-semibold mb-2 text-gray-800">Accident Prevention</h3>
//             <p className="text-gray-600">
//               Learn from historical data to implement preventative safety measures.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;


import { Button } from "../ui/Button"
import { Card, CardContent } from "../ui/Card"
import Link from "next/link"
import { ArrowRight, BarChart3, ClipboardCheck, HardHat, Shield } from "lucide-react"

export default function HomePage() {
  return (
    <div className=" md:w-[75%] mx-auto px-4 py-8">
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            AI-enabled Inspection for Mine Safety and Unified Accident Risk Evaluation
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 mb-8">
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
