/**
 * =============================================================================
 * ROUTER CONFIGURATION
 * =============================================================================
 *
 * WHAT IS A ROUTER?
 * -----------------
 * A router decides which page to show based on the URL.
 *
 * Example:
 * - URL is "/users"     → Show the Users page
 * - URL is "/dashboard" → Show the Dashboard page
 *
 * HOW TANSTACK ROUTER WORKS
 * -------------------------
 * TanStack Router is "file-based". This means:
 *
 * - Files in the src/routes/ folder automatically become pages
 * - The file name becomes the URL path
 *
 * Example:
 *   src/routes/dashboard.tsx   → /dashboard
 *   src/routes/user.tsx        → /user
 *   src/routes/template.mv.tsx → /template/mv
 *
 * THE ROUTE TREE
 * --------------
 * The "route tree" is a map of all available pages. TanStack Router
 * automatically generates this (see src/routeTree.gen.ts).
 *
 * DO NOT EDIT routeTree.gen.ts - it's auto-generated!
 *
 * TYPE SAFETY
 * -----------
 * The "declare module" section tells TypeScript about our router.
 * This gives us type-safe navigation - TypeScript will warn us if
 * we try to navigate to a page that doesn't exist.
 *
 * Example:
 *   navigate({ to: '/user' })     // OK
 *   navigate({ to: '/wrong' })    // TypeScript error!
 *
 * =============================================================================
 */

import { createRouter } from "@tanstack/react-router";
import { routeTree } from "../routeTree.gen";

/**
 * Create the router instance.
 *
 * - routeTree: The auto-generated map of all routes
 * - defaultPreload: 'intent' means start loading the next page when
 *   the user hovers over a link (makes navigation feel faster)
 */
export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

/**
 * Tell TypeScript about our router.
 *
 * This is called "module augmentation". It adds our router type to
 * TanStack Router's types, so we get proper autocomplete and error
 * checking when using router hooks.
 */
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
