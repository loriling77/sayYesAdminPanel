import { apiClient } from "@/lib/api-client";
import type { CategoryResponse, CreateCategoryRequest } from "@/types";

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
};
