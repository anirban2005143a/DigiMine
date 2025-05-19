"use client"
import { Navbar } from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/SideBar/Sidebar'
import { TooltipProvider } from '../../Components/ui/tooltip'
import WhiteboardPage from '../../Components/WhiteBoard/WhiteBoard'
import React, { useState } from 'react'

const page = () => {

  const [isSideMenuOpen, setisSideMenuOpen] = useState(false)

  const toggleSideNavbar = (e) => {
    e.preventDefault()
    setisSideMenuOpen(!isSideMenuOpen)
  }

  return (
    <>
      <div className=' h-screen flex overflow-hidden mx-auto max-w-[1500px]  '>
        <TooltipProvider>
          <Sidebar isSideMenuOpen={isSideMenuOpen}/>
        </TooltipProvider>
        <div className='w-full h-screen overflow-hidden flex flex-col'>
          <Navbar
            isSideMenuOpen={isSideMenuOpen}
            toggleSideNavbar={toggleSideNavbar} />
          <WhiteboardPage />
        </div>
      </div>
    </>
  )
}

export default page