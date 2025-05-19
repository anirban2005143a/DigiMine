
"use client"

import HomePage from "../Components/Homepage/HomePage.jsx";
import Sidebar from "../Components/SideBar/Sidebar.jsx";
import { TooltipProvider } from "../Components/ui/tooltip.jsx";

export default function Home() {
  return (
    <>
      <div className=" flex md:flex-row flex-col h-screen overflow-hidden">
        <TooltipProvider>
          <Sidebar />
        </TooltipProvider>
        <HomePage />
      </div>
    </>
  );
}
