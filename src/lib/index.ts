/**
 * =============================================================================
 * LIB FOLDER (Library/Utilities)
 * =============================================================================
 *
 * WHAT IS THIS FOLDER?
 * --------------------
 * This folder contains "utility" code - helpful functions and tools that are
 * used across the entire application. Think of it as a toolbox.
 *
 * WHAT'S INSIDE?
 * --------------
 *
 * 1. api-client.ts
 *    The API client handles all communication with the backend server.
 *    It provides simple functions like get(), post(), and delete() that
 *    other parts of the app use to fetch or send data.
 *
 * 2. utils.ts
 *    Small helper functions, like combining CSS class names.
 *
 * WHY A SEPARATE FOLDER?
 * ----------------------
 * We keep utility code separate because:
 * - It can be used anywhere in the app
 * - It's not specific to any one feature
 * - It makes the code easier to maintain and test
 *
 * HOW TO USE:
 * -----------
 *   import { apiClient } from '@/lib/api-client';
 *   import { cn } from '@/lib/utils';
 *
 * =============================================================================
 */

export * from './api-client';
export * from './utils';
