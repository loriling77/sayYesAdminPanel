import { apiClient } from "@/lib/api-client";
import type { UserResponse, CreateUserRequest } from "@/types";

export const userService = {
  getAllUsers: () => {
    return apiClient.get<UserResponse[]>("/api/users");
  },

  createUser: (data: CreateUserRequest) => {
    return apiClient.post<UserResponse, CreateUserRequest>("/api/users", data);
  },

  deleteUser: (id: string) => {
    return apiClient.delete(`/api/users/${id}`);
  },
};
