"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

export const Navbar = ({ isSideMenuOpen , toggleSideNavbar }) => {
  return (
    <header className="border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <button
        onClick={toggleSideNavbar}
        className=" p-2 rounded-full bg-gray-400/20 hover:bg-gray-700/20 cursor-pointer me-5">
          {!isSideMenuOpen ? <ArrowRight className="w-5 h-5"/> : <ArrowLeft className="w-5 h-5"/>}
        </button>
        <div className="">
          <h2 className="text-xl font-bold tracking-tight">AIMSURE</h2>
        </div>

      </div>
    </header>
  );
}
