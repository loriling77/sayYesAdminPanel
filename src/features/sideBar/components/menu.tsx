/**
 * =============================================================================
 * SIDEBAR MENU COMPONENT
 * =============================================================================
 *
 * This component displays the navigation menu on the left side of the screen.
 *
 * HOW IT WORKS:
 * -------------
 * 1. We import menu items from menuItems.tsx (the configuration)
 * 2. We use TanStack Router hooks for navigation:
 *    - useNavigate: Function to change the current page
 *    - useLocation: Tells us which page we're currently on
 * 3. When user clicks a menu item, we call navigate({ to: path })
 * 4. The selectedKeys prop highlights the current page in the menu
 *
 * TANSTACK ROUTER HOOKS EXPLAINED:
 * --------------------------------
 *
 * useNavigate():
 *   Returns a function to change pages programmatically.
 *   Example: navigate({ to: '/dashboard' })
 *
 * useLocation():
 *   Returns info about the current URL.
 *   Example: location.pathname → '/dashboard'
 *
 * =============================================================================
 */

import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { items } from "../stores/menuItems";

const AppMenu: React.FC = () => {
    // Get the navigate function from TanStack Router
    const navigate = useNavigate();

    // Get current location (which page we're on)
    const location = useLocation();

    /**
     * Handle menu item click.
     *
     * When user clicks a menu item:
     * 1. e.key contains the path (like '/dashboard')
     * 2. We call navigate() to go to that page
     */
    const onClick: MenuProps["onClick"] = (e) => {
        navigate({ to: e.key });
    };

    return (
        <div className="text-[28px] font-bold mb-5 flex-column">
            {/* App logo/title */}
            <div className="pl-10 pt-5">SayYes</div>

            {/* The menu itself */}
            <Menu
                onClick={onClick}
                style={{ width: 256 }}
                // Highlight the menu item that matches current URL
                selectedKeys={[location.pathname]}
                // Which submenus are open by default
                defaultOpenKeys={["dashboard", "user", "template", "category", "settings"]}
                // Vertical menu with expandable submenus
                mode="inline"
                // The menu items from our configuration
                items={items}
            />
        </div>
    );
};

export default AppMenu;
