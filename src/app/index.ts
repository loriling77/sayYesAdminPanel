/**
 * =============================================================================
 * APP FOLDER
 * =============================================================================
 *
 * WHAT IS THIS FOLDER?
 * --------------------
 * This folder contains the core setup for the application. It's like the
 * "foundation" of a building - everything else is built on top of it.
 *
 * WHAT'S INSIDE?
 * --------------
 *
 * 1. provider.tsx - The AppProvider
 *    This wraps the entire app with "context providers". Providers are like
 *    invisible wrappers that give special abilities to all components inside.
 *
 *    We use:
 *    - QueryClientProvider: Gives all components access to TanStack Query
 *      (the ability to fetch and cache data from the server)
 *
 * 2. router.tsx - Router Configuration
 *    This sets up TanStack Router, which handles navigation between pages.
 *    When you click a link, the router decides which page to show.
 *
 * HOW DOES IT ALL CONNECT?
 * ------------------------
 * In main.tsx (the entry point), we wrap the app like this:
 *
 *   <AppProvider>              ← Gives Query capabilities
 *     <RouterProvider />       ← Handles page navigation
 *   </AppProvider>
 *
 * Every component inside can now:
 * - Use useQuery() and useMutation() to fetch data
 * - Use useNavigate() to change pages
 * - Use useLocation() to know which page we're on
 *
 * =============================================================================
 */

export * from './provider';
export * from './router';
