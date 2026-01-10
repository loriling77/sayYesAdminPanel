/**
 * =============================================================================
 * USERS API
 * =============================================================================
 *
 * This folder contains everything for communicating with the server about users.
 *
 * FILES:
 * ------
 *
 * 1. user-service.ts
 *    Low-level functions that directly call the API.
 *    These are simple functions that fetch or send data.
 *
 * 2. use-users.ts
 *    React Query hooks that wrap the service functions.
 *    These hooks handle caching, loading states, and data updates automatically.
 *
 * WHY TWO FILES?
 * --------------
 * We separate "service" from "hooks" because:
 *
 * - Services are pure functions (no React)
 *   → Can be used anywhere, even outside React components
 *   → Easy to test
 *
 * - Hooks use React features
 *   → Must be used inside React components
 *   → Handle all the complex stuff (caching, loading, errors)
 *
 * HOW TO USE:
 * -----------
 *
 *   import { useUsers, useCreateUser, useDeleteUser } from '@/features/users/api';
 *
 *   function MyComponent() {
 *     // Fetch all users
 *     const { data: users, isLoading, error } = useUsers();
 *
 *     // Create a new user
 *     const createUser = useCreateUser();
 *     createUser.mutate({ email: 'test@test.com', username: 'test' });
 *
 *     // Delete a user
 *     const deleteUser = useDeleteUser();
 *     deleteUser.mutate('user-id-here');
 *   }
 *
 * =============================================================================
 */

export * from "./use-users";
export * from "./user-service";
