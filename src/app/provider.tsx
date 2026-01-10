/**
 * =============================================================================
 * APP PROVIDER
 * =============================================================================
 *
 * WHAT IS A PROVIDER?
 * -------------------
 * In React, a "Provider" is a component that shares data or functionality
 * with all components inside it. It's like a parent who gives tools to all
 * their children.
 *
 * WHAT DOES THIS PROVIDER DO?
 * ---------------------------
 * This provider sets up TanStack Query (also called React Query).
 *
 * TanStack Query helps us:
 * 1. Fetch data from the server
 * 2. Cache the data (remember it so we don't fetch again)
 * 3. Show loading states automatically
 * 4. Handle errors automatically
 * 5. Keep data fresh (re-fetch when needed)
 *
 * THE QUERY CLIENT
 * ----------------
 * QueryClient is like a "brain" that remembers all the data we've fetched.
 * We configure it with default settings:
 *
 * - retry: 1
 *   If a request fails, try ONE more time before giving up.
 *
 * - refetchOnWindowFocus: false
 *   Don't automatically re-fetch data when user switches back to the tab.
 *   (This is personal preference - you can set it to true if you want)
 *
 * - staleTime: 5 * 60 * 1000 (5 minutes)
 *   Consider data "fresh" for 5 minutes. During this time, we use the
 *   cached data instead of fetching again.
 *
 * =============================================================================
 */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

/**
 * Create a new QueryClient with our default settings.
 *
 * This is created OUTSIDE the component so it's only created once
 * when the app loads, not every time the component renders.
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // If a request fails, retry once
      retry: 1,

      // Don't re-fetch when user returns to the tab
      refetchOnWindowFocus: false,

      // Data is considered fresh for 5 minutes
      // 5 * 60 * 1000 = 300,000 milliseconds = 5 minutes
      staleTime: 5 * 60 * 1000,
    },
    mutations: {
      // Don't retry mutations (create/update/delete) if they fail
      retry: 0,
    },
  },
});

/**
 * Props for the AppProvider component.
 * "children" is whatever components we wrap with this provider.
 */
type AppProviderProps = {
  children: React.ReactNode;
};

/**
 * AppProvider Component
 *
 * Wrap your app with this to give all components access to TanStack Query.
 *
 * Usage (in main.tsx):
 *   <AppProvider>
 *     <YourApp />
 *   </AppProvider>
 *
 * Now any component can use:
 *   const { data, isLoading } = useQuery({ ... });
 *   const mutation = useMutation({ ... });
 */
export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
