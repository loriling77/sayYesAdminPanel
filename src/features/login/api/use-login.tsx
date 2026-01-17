import { useMutation } from "@tanstack/react-query";

import { loginService } from "./login-service";
import type { LoginUserRequest } from "@/types";




export const useLogin = () => {
    return useMutation({
        mutationFn: (data: LoginUserRequest) => loginService.loginUser(data),

    });
};

