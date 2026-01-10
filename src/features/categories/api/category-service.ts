import { apiClient } from "@/lib/api-client";
import type { CategoryResponse, CreateCategoryRequest, UpdateCategoryRequest } from "@/types";

export const categoryService = {
    getAllCategories: () => {
        return apiClient.get<CategoryResponse[]>("/api/categories");
    },

    createCategory: (data: CreateCategoryRequest) => {
        return apiClient.post<CategoryResponse, CreateCategoryRequest>(
            "/api/categories",
            data,
        );
    },

    deleteCategory: (id: string) => {
        return apiClient.delete(`/api/categories/${id}`);
    },

    updateCategory: (data: UpdateCategoryRequest) => {
        return apiClient.put(`/api/categories/${data.id}`, data);
    }
};
