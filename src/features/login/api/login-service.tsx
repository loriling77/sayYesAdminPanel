import { apiClient } from "@/lib/api-client";
import type { LoginUserRequest } from "@/types";


export const loginService = {
    loginUser: (data: LoginUserRequest) => {
        return apiClient.post<LoginUserRequest>("/api/users/login", data);
    }



};
