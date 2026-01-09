export interface CategoryResponse {
  id: string;
  categoryName?: string;
  icon?: string;
}

export interface CreateCategoryRequest {
  categoryName: string;
  icon?: string;
}
