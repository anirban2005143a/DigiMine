
"use client"

import { useState } from "react";
import HomePage from "../Components/Homepage/HomePage.jsx";
import Sidebar from "../Components/SideBar/Sidebar.jsx";
import { TooltipProvider } from "../Components/ui/tooltip.jsx";
import { Navbar } from "@/Components/Navbar/Navbar.jsx";

export default function Home() {

  const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

  const toggleSideNavbar = (e) => {
    e.preventDefault()
    setisSideMenuOpen(!isSideMenuOpen)
  }

  return (
    <>
      <div className=' h-screen flex overflow-hidden mx-auto max-w-[1500px]  '>
        <TooltipProvider>
          <Sidebar isSideMenuOpen={isSideMenuOpen} />
        </TooltipProvider>
        <div className='w-full h-screen overflow-hidden flex flex-col'>
          <Navbar
            isSideMenuOpen={isSideMenuOpen}
            toggleSideNavbar={toggleSideNavbar} />
          <HomePage />
        </div>
      </div>
    </>
  );
}
