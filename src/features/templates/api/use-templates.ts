import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { templateService } from "./template-service";
import type { CreateTemplateRequest } from "@/types";

export const templateKeys = {
    all: ["templates"] as const,
    lists: () => [...templateKeys.all, "list"] as const,
    list: (filters?: Record<string, unknown>) =>
        [...templateKeys.lists(), filters] as const,
    details: () => [...templateKeys.all, "detail"] as const,
    detail: (id: string) => [...templateKeys.details(), id] as const,
};

export const useTemplates = () => {
    return useQuery({
        queryKey: templateKeys.lists(),
        queryFn: templateService.getAllTemplates,
    });
};

export const useCreateTemplate = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: CreateTemplateRequest) =>
            templateService.createTemplate(data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: templateKeys.lists() });
        },
    });


};

export const useTemplate = () => {
    return useMutation({
        mutationFn: (id: string) => templateService.getTemplate(id),
        onSuccess(data) {
            return data;
        },
    });
}
