/**
 * =============================================================================
 * FEATURES FOLDER
 * =============================================================================
 *
 * WHAT IS A FEATURE?
 * ------------------
 * A "feature" is a complete piece of functionality in your app. Each feature
 * has everything it needs to work: components, API calls, hooks, and more.
 *
 * Think of features like LEGO blocks - each one is complete on its own,
 * and you can combine them to build the full application.
 *
 * OUR FEATURES:
 * -------------
 *
 * 1. users/
 *    Everything related to managing users:
 *    - API calls to fetch, create, delete users
 *    - React Query hooks (useUsers, useCreateUser, useDeleteUser)
 *    - Table component to display users
 *
 * 2. templates/
 *    Everything related to managing templates:
 *    - API calls to fetch and create templates
 *    - React Query hooks (useTemplates, useCreateTemplate)
 *    - Table component to display templates
 *
 * 3. categories/
 *    Everything related to managing categories:
 *    - API calls to fetch and create categories
 *    - React Query hooks (useCategories, useCreateCategory)
 *    - Table component to display categories
 *
 * 4. sideBar/
 *    The sidebar menu navigation:
 *    - Menu component
 *    - Menu items configuration
 *
 * 5. viewPort/
 *    The main content area (right side of the screen):
 *    - ViewPort layout component
 *
 * FOLDER STRUCTURE FOR EACH FEATURE:
 * -----------------------------------
 *
 *   featureName/
 *   ├── api/                    ← Server communication
 *   │   ├── feature-service.ts  ← API call functions
 *   │   ├── use-feature.ts      ← React Query hooks
 *   │   └── index.ts            ← Exports everything
 *   ├── components/             ← UI components
 *   │   ├── FeatureTable.tsx    ← Table component
 *   │   ├── feature-columns.tsx ← Table column definitions
 *   │   └── index.ts            ← Exports everything
 *   └── stores/                 ← State/configuration (if needed)
 *
 * WHY THIS STRUCTURE?
 * -------------------
 * 1. EASY TO FIND: All user-related code is in users/
 * 2. EASY TO DELETE: Want to remove a feature? Delete its folder
 * 3. EASY TO ADD: Copy a feature folder structure for new features
 * 4. CLEAR BOUNDARIES: Features don't reach into each other's code
 *
 * =============================================================================
 */

// Export features for easy importing
// Example: import { useUsers } from '@/features/users/api';
