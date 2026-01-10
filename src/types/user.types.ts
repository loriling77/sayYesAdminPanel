/**
 * =============================================================================
 * USER TYPES
 * =============================================================================
 *
 * These types describe the shape of User data in our application.
 *
 * We have two types:
 * 1. UserResponse    - Data we GET from the server (has id, createdAt, etc.)
 * 2. CreateUserRequest - Data we SEND to create a new user (no id needed)
 *
 * =============================================================================
 */

/**
 * UserResponse
 *
 * This describes a user object that we receive FROM the server.
 * When we fetch users, the server sends back objects that look like this.
 *
 * Example of what the server sends:
 * {
 *   "id": "abc-123-def",
 *   "email": "john@example.com",
 *   "name": "John Doe",
 *   "username": "johndoe",
 *   "createdAt": "2024-01-15T10:30:00Z",
 *   "updatedAt": "2024-01-15T10:30:00Z"
 * }
 */
export interface UserResponse {
  /** Unique identifier for the user (created by the server) */
  id: string;

  /** User's email address */
  email: string;

  /** User's full name (can be empty) */
  name: string;

  /** User's username for login */
  username: string;

  /** When the user was created (ISO date string) */
  createdAt: string;

  /** When the user was last updated (ISO date string) */
  updatedAt: string;
}

/**
 * CreateUserRequest
 *
 * This describes the data we SEND to the server to create a new user.
 * Notice we don't include 'id', 'createdAt', or 'updatedAt' - the server
 * creates those automatically.
 *
 * Example of what we send:
 * {
 *   "email": "jane@example.com",
 *   "username": "janedoe",
 *   "name": "Jane Doe"
 * }
 */
export interface CreateUserRequest {
  /** Required: User's email address */
  email: string;

  /** Optional: User's full name */
  name?: string;

  /** Required: User's username for login */
  username: string;
}
