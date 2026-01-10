/**
 * =============================================================================
 * TYPES FOLDER
 * =============================================================================
 *
 * WHAT IS THIS FOLDER?
 * --------------------
 * This folder contains TypeScript "type definitions". Types describe the
 * SHAPE of our data - what fields it has and what kind of values those
 * fields can hold.
 *
 * WHY DO WE NEED TYPES?
 * ---------------------
 * Types help us:
 * 1. Catch errors before running the code
 * 2. Get better code suggestions in our editor
 * 3. Document what our data looks like
 *
 * EXAMPLE:
 * --------
 * Without types:
 *   const user = { name: "John", age: 25 };
 *   console.log(user.email); // No error until we run the code!
 *
 * With types:
 *   interface User { name: string; age: number; }
 *   const user: User = { name: "John", age: 25 };
 *   console.log(user.email); // ERROR! TypeScript tells us "email" doesn't exist
 *
 * HOW IS THIS FOLDER ORGANIZED?
 * -----------------------------
 * Each file contains types for one feature:
 *
 * - user.types.ts           → Types for User data
 * - category.types.ts       → Types for Category data
 * - template.types.ts       → Types for Template requests/inputs
 * - template-response.types.ts → Types for Template responses from server
 *
 * HOW TO USE:
 * -----------
 * Import types from this folder like this:
 *
 *   import type { UserResponse, CategoryResponse } from '@/types';
 *
 * The word "type" after "import" tells TypeScript this is only for type
 * checking - it won't be included in the final code that runs in the browser.
 *
 * =============================================================================
 */

// User types - describes user data from the API
export * from "./user.types";

// Category types - describes category data from the API
export * from "./category.types";

// Template types - describes template data sent TO the API (requests)
export * from "./template.types";

// Template response types - describes template data received FROM the API
export * from "./template-response.types";
