/**
 * =============================================================================
 * USER PAGE
 * =============================================================================
 *
 * This page displays a list of all users and allows deleting them.
 *
 * HOW THIS PAGE WORKS:
 * --------------------
 * 1. When the page loads, useUsers() fetches all users from the server
 * 2. While loading, the table shows a loading indicator
 * 3. If there's an error, we show an error message
 * 4. Otherwise, we display users in a table
 *
 * DATA FLOW:
 * ----------
 *   User visits /user
 *         ↓
 *   useUsers() hook is called
 *         ↓
 *   React Query fetches from GET /api/users
 *         ↓
 *   Data is returned and displayed in UserTable
 *
 * =============================================================================
 */

import { createFileRoute } from "@tanstack/react-router";
import Search from "@/components/search";
import { PageHeader, ErrorMessage } from "@/components";
import { useUsers, useDeleteUser } from "@/features/users/api";
import { UserTable } from "@/features/users/components";
import { ViewPort } from "@/features/viewPort/components";

/**
 * Define the route.
 * createFileRoute('/user') tells the router this page is at /user
 */
export const Route = createFileRoute("/user")({
  component: User,
});

/**
 * The User page component.
 */
function User() {
  // Fetch all users from the server
  // data: the list of users (undefined while loading)
  // isLoading: true while fetching
  // error: error object if something went wrong
  const { data: users, isLoading, error } = useUsers();

  // Hook for deleting users
  // deleteUser.mutate(id) - call this to delete a user
  // deleteUser.isPending - true while delete is in progress
  const deleteUser = useDeleteUser();

  // If there was an error fetching users, show error message
  if (error) {
    return (
      <ViewPort>
        <ErrorMessage message={error.message} />
      </ViewPort>
    );
  }

  // Render the page
  return (
    <ViewPort>
      {/* Page header with title */}
      <PageHeader title="User Information" createButtonText="Create User" />

      {/* Search box */}
      <div className="mb-5">
        <Search />
      </div>

      {/* User table */}
      <UserTable
        users={users}
        loading={isLoading}
        onDelete={(id) => deleteUser.mutate(id)}
        deleteLoading={deleteUser.isPending}
      />
    </ViewPort>
  );
}
