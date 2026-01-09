export interface UserResponse {
  id: string;
  email: string;
  name: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserRequest {
  email: string;
  name?: string;
  username: string;
}
