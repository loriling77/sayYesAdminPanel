/**
 * =============================================================================
 * USER COMPONENTS
 * =============================================================================
 *
 * This folder contains React components for displaying user data.
 *
 * FILES:
 * ------
 *
 * 1. UserTable.tsx
 *    A table component that displays a list of users.
 *    It receives data as "props" (properties) and displays it.
 *
 * 2. user-columns.tsx
 *    Defines the columns for the user table.
 *    Separated so UserTable.tsx stays small and focused.
 *
 * WHY SEPARATE COLUMNS?
 * ---------------------
 * Table columns often have a lot of code (formatting, rendering, actions).
 * By separating them, each file stays short and easy to understand.
 *
 * HOW TO USE:
 * -----------
 *
 *   import { UserTable } from '@/features/users/components';
 *
 *   function UserPage() {
 *     const { data: users, isLoading } = useUsers();
 *
 *     return (
 *       <UserTable
 *         users={users}
 *         loading={isLoading}
 *         onDelete={(id) => console.log('Delete', id)}
 *       />
 *     );
 *   }
 *
 * =============================================================================
 */

export * from "./UserTable";
export * from "./user-columns";
