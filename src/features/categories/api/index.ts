/**
 * =============================================================================
 * CATEGORIES API
 * =============================================================================
 *
 * Everything for communicating with the server about categories.
 * Works exactly like the users API - see users/api/index.ts for details.
 *
 * AVAILABLE HOOKS:
 * ----------------
 * - useCategories()      → Fetch all categories
 * - useCreateCategory()  → Create a new category
 *
 * EXAMPLE:
 * --------
 *   import { useCategories } from '@/features/categories/api';
 *
 *   const { data: categories, isLoading } = useCategories();
 *
 * =============================================================================
 */

export * from "./use-categories";
export * from "./category-service";
