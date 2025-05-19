

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

export default function Sidebar() {
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
    <div className=" md:w-[20%] w-full h-screen">
      <SidebarComponent>
        <SidebarHeader className="flex items-center justify-center py-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">AIMSURE</span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu >
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href} className="group/menu-item relative w-full">
                <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                  <Link href={item.href} className="flex items-center space-x-2 p-2 ps-4 hover:bg-gray-200">
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Settings">
                <Link href="/settings" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </SidebarComponent>
    </div>
  );
}
