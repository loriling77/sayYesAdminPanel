/**
 * =============================================================================
 * CATEGORY TYPES
 * =============================================================================
 *
 * These types describe the shape of Category data in our application.
 * Categories are used to organize templates (like folders for files).
 *
 * =============================================================================
 */

/**
 * CategoryResponse
 *
 * This describes a category object that we receive FROM the server.
 *
 * Example of what the server sends:
 * {
 *   "id": "cat-123-abc",
 *   "categoryName": "Wedding Invitations",
 *   "icon": "💒"
 * }
 */
export interface CategoryResponse {
    /** Unique identifier for the category */
    id: string;

    /** Name of the category (can be empty) */
    categoryName?: string;

    /** Emoji or icon representing the category (can be empty) */
    icon?: string;
}

/**
 * CreateCategoryRequest
 *
 * This describes the data we SEND to create a new category.
 *
 * Example of what we send:
 * {
 *   "categoryName": "Birthday Cards",
 *   "icon": "🎂"
 * }
 */
export interface CreateCategoryRequest {
    /** Required: Name of the category */
    categoryName: string;

    /** Optional: Emoji or icon for the category */
    icon?: string;
}


export type UpdateCategoryRequest = CategoryResponse;