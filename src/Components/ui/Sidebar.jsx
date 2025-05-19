
import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils";
import { useSidebar } from "../../hooks/useSidebar";

export const Sidebar = React.forwardRef(
    (
        {
            side = "left",
            variant = "sidebar",
            collapsible = "offcanvas",
            className,
            children,
            ...props
        },
        ref
    ) => {
        const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

        if (collapsible === "none") {
            return (
                <div
                    className={`flex w-full flex-col  text-gray-600 ${className}`}
                    ref={ref}
                    {...props}
                >
                    {children}
                </div>
            );
        }

        if (isMobile) {
            return (
                <div open={openMobile} onOpenChange={setOpenMobile} {...props}>
                    <div
                        data-sidebar="sidebar"
                        data-mobile="true"
                        className="w-full  p-0 text-gray-600"
                        style={{
                            "--sidebar-width": "250px",
                        }}
                        side={side}
                    >
                        <div className="flex h-full w-full flex-col">{children}</div>
                    </div>
                </div>
            );
        }

        return (
            <div
                ref={ref}
                className="group peer hidden md:block text-gray-600 w-full h-full"
                data-state={state}
                data-collapsible={state === "collapsed" ? collapsible : ""}
                data-variant={variant}
                data-side={side}
            >
                
                <div
                    className={`duration-200 inset-y-0 z-10 hidden h-full w-full transition-[left,right,width] ease-linear md:flex ${side === "left"
                        ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                        : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]"
                        } ${variant === "floating" || variant === "inset"
                            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
                            : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]   "
                        } ${className}`}
                    {...props}
                >
                    <div
                        data-sidebar="sidebar"
                        className="flex h-full w-full flex-col   shadow-md"
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
    }
);

Sidebar.displayName = "Sidebar";


export const SidebarContent = React.forwardRef(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                data-sidebar="content"
                className={`flex min-h-0 flex-1 flex-col gap-2 overflow-auto ${className}`}
                {...props}
            />
        );
    }
);

SidebarContent.displayName = "SidebarContent";

export const SidebarFooter = React.forwardRef(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                data-sidebar="footer"
                className={`flex flex-col gap-2 p-2 ${className}`}
                {...props}
            />
        );
    }
);

SidebarFooter.displayName = "SidebarFooter";

export const SidebarHeader = React.forwardRef(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                data-sidebar="header"
                className={`flex flex-col gap-2 p-2 ${className}`}
                {...props}
            />
        );
    }
);

SidebarHeader.displayName = "SidebarHeader";

export const SidebarMenu = React.forwardRef(
    ({ className, ...props }, ref) => (
        <ul
            ref={ref}
            data-sidebar="menu"
            className={`flex w-full min-w-0 flex-col gap-1 ${className}`}
            {...props}
        />
    )
);

SidebarMenu.displayName = "SidebarMenu";


export const SidebarMenuButton = React.forwardRef(
    (
        {
            asChild = false,
            isActive = false,
            variant = "default",
            size = "default",
            tooltip,
            className,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : "button";
        const { isMobile, state } = useSidebar();

        const button = (
            <Comp
                ref={ref}
                data-sidebar="menu-button"
                data-size={size}
                data-active={isActive}
                className={cn(
                    "inline-flex w-full items-center  text-sm font-medium transition-all duration-200",
                    variant === "default" && "bg-transparent hover:bg-gray-200",
                    variant === "primary" && "bg-blue-500 text-gray-600 hover:bg-blue-600",
                    variant === "secondary" && "bg-gray-300 text-gray-800 hover:bg-gray-400",
                    size === "small" && "px-3 py-2 text-sm",
                    size === "large" && "px-5 py-3 text-lg",
                    className
                )}
                {...props}
            />
        );

        if (!tooltip) {
            return button;
        }

        if (typeof tooltip === "string") {
            tooltip = {
                children: tooltip,
            };
        }

        return (
            <Tooltip>
                <TooltipTrigger asChild>{button}</TooltipTrigger>
                <TooltipContent
                    side="right"
                    align="center"
                    hidden={state !== "collapsed" || isMobile}
                    {...tooltip}
                />
            </Tooltip>
        );
    }
);

SidebarMenuButton.displayName = "SidebarMenuButton";

export const SidebarMenuItem = React.forwardRef(
    ({ className, ...props }, ref) => (
        <li
            ref={ref}
            data-sidebar="menu-item"
            className={`group relative ${className}`}
            {...props}
        />
    )
);

SidebarMenuItem.displayName = "SidebarMenuItem";