import { apiClient } from "@/lib/api-client";
import type { TemplateResponse, CreateTemplateRequest } from "@/types";

export const templateService = {
    getAllTemplates: () => {
        return apiClient.get<TemplateResponse[]>("/api/templates");
    },

    createTemplate: (data: CreateTemplateRequest) => {
        return apiClient.post<TemplateResponse, CreateTemplateRequest>(
            "/api/templates",
            data,
        );
    },

    getTemplate: (id: string) => {
        return apiClient.get<TemplateResponse>(`/api/templates/${id}`);
    },

    deleteTemplate: (id: string) => {
        return apiClient.delete(`/api/templates/${id}`);
    }
};
