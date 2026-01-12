/**
 * =============================================================================
 * ROOT LAYOUT
 * =============================================================================
 *
 * This is the "root" of all pages. Every page in the app is rendered inside
 * this layout.
 *
 * WHAT IS A LAYOUT?
 * -----------------
 * A layout is a component that wraps other pages. It contains things that
 * should appear on EVERY page, like:
 * - Navigation menus
 * - Headers
 * - Footers
 *
 * HOW IT WORKS:
 * -------------
 * 1. User visits /dashboard
 * 2. TanStack Router renders this root layout
 * 3. Inside the <Outlet />, it renders the Dashboard page
 *
 * Visual representation:
 *
 *   +---------------------------------------------------+
 *   |  RootLayout                                       |
 *   |  +------------+  +-----------------------------+  |
 *   |  |   Menu     |  |       <Outlet />            |  |
 *   |  | (Sidebar)  |  |                             |  |
 *   |  |            |  |   Dashboard page renders    |  |
 *   |  |            |  |   here                      |  |
 *   |  +------------+  +-----------------------------+  |
 *   +---------------------------------------------------+
 *
 * WHAT IS OUTLET?
 * ---------------
 * <Outlet /> is a placeholder. TanStack Router replaces it with the
 * current page's content based on the URL.
 *
 * DEVTOOLS:
 * ---------
 * TanStackRouterDevtools shows a panel at the bottom of the screen
 * (only in development) that helps debug routing issues.
 *
 * =============================================================================
 */

import Menu from "@/features/sideBar/components/menu";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

/**
 * The root layout component.
 * This wraps every page in the application.
 */
const RootLayout = () => (


    <div className="flex">
        {/* Sidebar menu - always visible on the left */}



        {/* Main content area - page content renders here */}
        <div className="flex-1">
            <Outlet />
        </div>

        {/* Developer tools - only visible in development mode */}
        <TanStackRouterDevtools />
    </div>


);

/**
 * Export the root route.
 * createRootRoute() is a special function for the root layout.
 */
export const Route = createRootRoute({ component: RootLayout });
