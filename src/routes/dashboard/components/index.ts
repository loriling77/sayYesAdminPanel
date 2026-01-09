/**
 * =============================================================================
 * DASHBOARD COMPONENTS
 * =============================================================================
 *
 * Components specific to the dashboard page.
 *
 * WHY A SUBFOLDER UNDER ROUTES?
 * -----------------------------
 * Sometimes a page has its own components that are only used on that page.
 * Instead of putting them in the features folder, we keep them close to
 * the route that uses them.
 *
 * This is the "co-location" pattern - keeping related code together.
 *
 * FILES:
 * ------
 * - StatisticsCards.tsx → Cards showing user/template/category counts
 * - QuickActionsCard.tsx → Card with quick action links
 *
 * =============================================================================
 */

export * from './StatisticsCards';
export * from './QuickActionsCard';
