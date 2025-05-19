"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

export const Navbar = ({ isSideMenuOpen , toggleSideNavbar }) => {
  return (
    <header className=" bg-gray-200/40 py-3">
      <div className="flex items-center px-4">
        <button
        onClick={toggleSideNavbar}
        className=" p-2 rounded-full bg-gray-700/10 hover:bg-gray-700/20 cursor-pointer me-5">
          {!isSideMenuOpen ? <ArrowRight className="w-5 h-5"/> : <ArrowLeft className="w-5 h-5"/>}
        </button>
        <div className="">
          <h2 className="text-lg font-semibold tracking-tight">AIMSURE</h2>
        </div>

      </div>
    </header>
  );
}
