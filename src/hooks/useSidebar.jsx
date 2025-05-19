"use client"

import { useState, useEffect } from "react";

// Custom hook to manage sidebar state
export const useSidebar = () => {
  const [isMobile, setIsMobile] = useState(false); // Determines if the user is on mobile
  const [state, setState] = useState("expanded"); // Sidebar state: 'expanded' or 'collapsed'
  const [openMobile, setOpenMobile] = useState(false); // Whether the sidebar is open on mobile

  // Detect screen size on mount and update `isMobile` state accordingly
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust this breakpoint for mobile size
    };

    checkMobile(); // Check on initial load
    window.addEventListener("resize", checkMobile); // Recheck when window is resized

    return () => window.removeEventListener("resize", checkMobile); // Clean up the event listener
  }, []);

  // Toggle sidebar state between 'expanded' and 'collapsed'
  const toggleSidebar = () => {
    setState((prevState) => (prevState === "expanded" ? "collapsed" : "expanded"));
  };

  return {
    isMobile,
    state,
    setState,
    openMobile,
    setOpenMobile,
    toggleSidebar
  };
};
