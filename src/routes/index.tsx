/**
 * =============================================================================
 * HOME PAGE (INDEX ROUTE)
 * =============================================================================
 *
 * This is the "home" page - what users see when they visit the root URL (/).
 *
 * REDIRECT:
 * ---------
 * Instead of showing a separate home page, we redirect users to /dashboard.
 * This is common in admin panels where the dashboard is the main page.
 *
 * The Navigate component automatically sends users to another page.
 * It's like clicking a link, but happens automatically when the page loads.
 *
 * =============================================================================
 */

import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  // Automatically redirect to the dashboard
  return <Navigate to="/dashboard" />;
}
