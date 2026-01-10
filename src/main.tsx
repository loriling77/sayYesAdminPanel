/**
 * =============================================================================
 * APPLICATION ENTRY POINT
 * =============================================================================
 *
 * This is the first file that runs when the app starts.
 * It sets up the entire application and renders it to the screen.
 *
 * WHAT HAPPENS HERE:
 * ------------------
 * 1. Import global CSS styles
 * 2. Import our providers (AppProvider, RouterProvider)
 * 3. Find the HTML element where we'll render the app (#root)
 * 4. Render the app inside that element
 *
 * THE COMPONENT TREE:
 * -------------------
 *   <StrictMode>           ← Helps catch bugs during development
 *     <AppProvider>        ← Provides React Query to all components
 *       <RouterProvider /> ← Handles navigation and renders pages
 *     </AppProvider>
 *   </StrictMode>
 *
 * STRICT MODE:
 * ------------
 * StrictMode is a development tool that:
 * - Warns about outdated practices
 * - Runs some code twice to catch bugs
 * - Only affects development, not production
 *
 * =============================================================================
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import "./index.css";
import { AppProvider } from "./app/provider";
import { router } from "./app/router";

/**
 * Find the #root element in index.html and render our app inside it.
 *
 * The "!" tells TypeScript "trust me, this element exists".
 * We know it exists because we defined it in index.html.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>,
);
