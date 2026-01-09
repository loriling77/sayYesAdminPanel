/**
 * =============================================================================
 * USER SERVICE
 * =============================================================================
 *
 * This file contains functions that communicate with the backend server
 * for user-related operations.
 *
 * These are "pure functions" - they just fetch or send data. They don't know
 * anything about React, caching, or loading states. That's handled by the
 * hooks in use-users.ts.
 *
 * =============================================================================
 */

import { apiClient } from "@/lib/api-client";
import type { UserResponse, CreateUserRequest } from "@/types";

/**
 * User Service Object
 *
 * Contains all API functions for users.
 * We group them in an object for easy organization.
 */
export const userService = {
  /**
   * Get all users from the server.
   *
   * API Endpoint: GET /api/users
   *
   * @returns Promise with array of users
   *
   * Example response:
   * [
   *   { id: "1", email: "john@example.com", username: "john", ... },
   *   { id: "2", email: "jane@example.com", username: "jane", ... }
   * ]
   */
  getAllUsers: () => {
    return apiClient.get<UserResponse[]>("/api/users");
  },

  /**
   * Create a new user.
   *
   * API Endpoint: POST /api/users
   *
   * @param data - The user data to send
   * @returns Promise with the created user (including new id)
   *
   * Example:
   *   userService.createUser({
   *     email: "new@example.com",
   *     username: "newuser",
   *     name: "New User"
   *   })
   */
  createUser: (data: CreateUserRequest) => {
    return apiClient.post<UserResponse, CreateUserRequest>("/api/users", data);
  },

  /**
   * Delete a user by their ID.
   *
   * API Endpoint: DELETE /api/users/{id}
   *
   * @param id - The user's unique ID
   *
   * Example:
   *   userService.deleteUser("abc-123-def")
   */
  deleteUser: (id: string) => {
    return apiClient.delete(`/api/users/${id}`);
  },
};
