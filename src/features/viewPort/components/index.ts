/**
 * =============================================================================
 * VIEWPORT COMPONENTS
 * =============================================================================
 *
 * The "viewport" is the main content area - the right side of the screen
 * where page content is displayed.
 *
 * FILES:
 * ------
 *
 * ViewPort.tsx
 *   A wrapper component that provides consistent styling for all pages.
 *   It adds padding, background color, and handles scrolling.
 *
 * WHY USE A VIEWPORT WRAPPER?
 * ---------------------------
 * Instead of adding the same padding and styling to every page,
 * we wrap all page content in ViewPort. This ensures:
 *
 * 1. Consistent spacing on all pages
 * 2. Easy to change styling in one place
 * 3. Pages only worry about their content, not layout
 *
 * USAGE:
 * ------
 *   import { ViewPort } from '@/features/viewPort/components';
 *
 *   function MyPage() {
 *     return (
 *       <ViewPort>
 *         <h1>My Page Title</h1>
 *         <p>My page content...</p>
 *       </ViewPort>
 *     );
 *   }
 *
 * =============================================================================
 */

export * from "./ViewPort";
