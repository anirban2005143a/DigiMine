"use client";

import { Bell, HelpCircle, Search } from "lucide-react";
import { Button } from "../../Components/ui/Button";
import { Input } from "../../Components/ui/Input";
import { SidebarTrigger } from "../../Components/ui/Sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../Components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../../Components/ui/avatar";

export const Navbar = () => {
  return (
    <header className="border-b bg-white">
      <div className="flex h-16 items-center px-4">
        <SidebarTrigger className="mr-2" />
        <div className="flex items-center">
          <h2 className="text-xl font-bold tracking-tight">AIMSURE</h2>
        </div>

      </div>
    </header>
  );
}
