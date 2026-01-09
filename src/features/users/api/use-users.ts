/**
 * =============================================================================
 * USER HOOKS (React Query)
 * =============================================================================
 *
 * This file contains React Query hooks for user operations.
 *
 * WHAT IS A HOOK?
 * ---------------
 * In React, a "hook" is a special function that starts with "use".
 * Hooks let you use React features (like state) in your components.
 *
 * WHAT IS REACT QUERY?
 * --------------------
 * React Query (TanStack Query) is a library that makes fetching data easy.
 *
 * Without React Query, you would need to:
 *   1. Create state for the data: useState([])
 *   2. Create state for loading: useState(true)
 *   3. Create state for errors: useState(null)
 *   4. Fetch data in useEffect
 *   5. Handle all edge cases
 *
 * With React Query, it's just:
 *   const { data, isLoading, error } = useUsers();
 *
 * React Query automatically handles:
 *   - Loading states
 *   - Error states
 *   - Caching (remembers data)
 *   - Re-fetching when needed
 *   - Deduplication (if 3 components ask for users, only 1 request is made)
 *
 * QUERY VS MUTATION
 * -----------------
 * - Query = READ data (useQuery)
 *   Example: Get list of users
 *
 * - Mutation = CHANGE data (useMutation)
 *   Example: Create, update, or delete a user
 *
 * QUERY KEYS
 * ----------
 * Query keys are like "names" for cached data. React Query uses them to:
 *   - Know if data is already cached
 *   - Know which data to update after a mutation
 *
 * We use a "key factory" pattern to keep keys consistent:
 *   userKeys.lists() → ['users', 'list']
 *   userKeys.detail('123') → ['users', 'detail', '123']
 *
 * =============================================================================
 */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userService } from "./user-service";
import type { CreateUserRequest } from "@/types";

/**
 * Query Key Factory
 *
 * This object creates consistent query keys for user data.
 * Using a factory ensures we never have typos in our keys.
 *
 * "as const" tells TypeScript these are exact values, not just strings.
 */
export const userKeys = {
  // Base key for all user-related queries
  all: ["users"] as const,

  // Key for list of users
  lists: () => [...userKeys.all, "list"] as const,

  // Key for list with specific filters
  list: (filters?: Record<string, unknown>) =>
    [...userKeys.lists(), filters] as const,

  // Base key for user details
  details: () => [...userKeys.all, "detail"] as const,

  // Key for a specific user's details
  detail: (id: string) => [...userKeys.details(), id] as const,
};

/**
 * useUsers Hook
 *
 * Fetches all users from the server.
 *
 * RETURNS:
 * - data: The list of users (undefined while loading)
 * - isLoading: true while fetching for the first time
 * - error: Error object if something went wrong
 * - refetch: Function to manually fetch again
 *
 * EXAMPLE:
 *   function UserList() {
 *     const { data: users, isLoading, error } = useUsers();
 *
 *     if (isLoading) return <div>Loading...</div>;
 *     if (error) return <div>Error: {error.message}</div>;
 *
 *     return users.map(user => <div>{user.name}</div>);
 *   }
 */
export const useUsers = () => {
  return useQuery({
    // Unique key for this query
    queryKey: userKeys.lists(),

    // Function that fetches the data
    queryFn: userService.getAllUsers,
  });
};

/**
 * useCreateUser Hook
 *
 * Creates a new user on the server.
 *
 * This is a MUTATION because it changes data on the server.
 *
 * After creating a user, we "invalidate" the users list.
 * This tells React Query: "The cached list is outdated, fetch it again."
 *
 * RETURNS:
 * - mutate: Function to call with the new user data
 * - isPending: true while the request is in progress
 * - error: Error object if something went wrong
 *
 * EXAMPLE:
 *   function CreateUserButton() {
 *     const createUser = useCreateUser();
 *
 *     const handleClick = () => {
 *       createUser.mutate({
 *         email: 'new@example.com',
 *         username: 'newuser'
 *       });
 *     };
 *
 *     return (
 *       <button onClick={handleClick} disabled={createUser.isPending}>
 *         {createUser.isPending ? 'Creating...' : 'Create User'}
 *       </button>
 *     );
 *   }
 */
export const useCreateUser = () => {
  // Get access to the query client to invalidate queries
  const queryClient = useQueryClient();

  return useMutation({
    // Function that sends the data to the server
    mutationFn: (data: CreateUserRequest) => userService.createUser(data),

    // What to do after successful creation
    onSuccess: () => {
      // Tell React Query to fetch the users list again
      // This ensures the list shows the new user
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
  });
};

/**
 * useDeleteUser Hook
 *
 * Deletes a user from the server.
 *
 * After deleting, we invalidate the list so it updates.
 *
 * EXAMPLE:
 *   function DeleteButton({ userId }) {
 *     const deleteUser = useDeleteUser();
 *
 *     return (
 *       <button
 *         onClick={() => deleteUser.mutate(userId)}
 *         disabled={deleteUser.isPending}
 *       >
 *         {deleteUser.isPending ? 'Deleting...' : 'Delete'}
 *       </button>
 *     );
 *   }
 */
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // Function that deletes the user (takes user ID as parameter)
    mutationFn: (id: string) => userService.deleteUser(id),

    // After successful deletion, refresh the users list
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
  });
};
