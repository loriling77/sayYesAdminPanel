/**
 * =============================================================================
 * SHARED COMPONENTS FOLDER
 * =============================================================================
 *
 * WHAT IS THIS FOLDER?
 * --------------------
 * This folder contains "shared" components - UI pieces that are used
 * across many different pages and features.
 *
 * SHARED VS FEATURE COMPONENTS:
 * -----------------------------
 *
 * Shared components (this folder):
 * - Used in multiple places
 * - Generic and reusable
 * - Example: PageHeader, ErrorMessage, Search
 *
 * Feature components (src/features/*/components):
 * - Used only within one feature
 * - Specific to that feature's needs
 * - Example: UserTable, TemplateTable
 *
 * OUR SHARED COMPONENTS:
 * ----------------------
 *
 * 1. PageHeader.tsx
 *    A header for pages with a title and optional "Create" button.
 *    Used on almost every page.
 *
 * 2. ErrorMessage.tsx
 *    Displays error messages in a consistent red style.
 *    Used when API calls fail.
 *
 * 3. search.tsx
 *    A search input box.
 *    Used on pages with tables to filter data.
 *
 * HOW TO USE:
 * -----------
 *   import { PageHeader, ErrorMessage } from '@/components';
 *
 *   function MyPage() {
 *     return (
 *       <div>
 *         <PageHeader title="My Page" createButtonText="Add New" />
 *         {error && <ErrorMessage message={error.message} />}
 *       </div>
 *     );
 *   }
 *
 * =============================================================================
 */

export * from './PageHeader';
export * from './ErrorMessage';
