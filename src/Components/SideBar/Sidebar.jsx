

"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart2, ClipboardList, Home, Layers, Save, Settings, Shield, Users } from "lucide-react";
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/Sidebar";

export default function Sidebar({ isSideMenuOpen }) {
  const pathname = usePathname();

  const menuItems = [
    {
      title: "Home",
      icon: Home,
      href: "/",
    },
    {
      title: "Whiteboard",
      icon: Layers,
      href: "/whiteboard",
    },
    {
      title: "Saved Inspections",
      icon: Save,
      href: "/saved-inspections",
    },
    {
      title: "Dashboard",
      icon: BarChart2,
      href: "/dashboard",
    },
    {
      title: "Accident Data",
      icon: ClipboardList,
      href: "/accident-data",
    },
    {
      title: "Safety Protocols",
      icon: Shield,
      href: "/safety-protocols",
    },
    {
      title: "Team",
      icon: Users,
      href: "/team",
    },
  ];
  

  return (
    <div id="side-navbar" className={`${isSideMenuOpen ? " md:w-[190px] lg:w-[220px] xl:w-[250px] w-full " : "w-[46px] " } transition-[width] duration-150 bg-gradient-to-l from-gray-400/10 to-transparent ease-in-out h-screen overflow-x-hidden`}>
      <SidebarComponent>
        <SidebarHeader className={`flex items-center justify-center py-4 mt-1 delay-75 transition-opacity ${isSideMenuOpen ? "" : "opacity-0"} `}>
          <div className="flex items-center space-x-2">
             <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">AIMSURE</span>
          </div>
        </SidebarHeader>
        <SidebarContent className="md:min-w-[180px] lg:min-w-[210px] xl:min-w-[250px]">
          <SidebarMenu >
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href} className="group/menu-item relative w-full">
                <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                  <Link href={item.href} className="flex text-xs items-center space-x-2 p-2 ps-4 hover:bg-gray-200">
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
       
      </SidebarComponent>
    </div>
  );
}
