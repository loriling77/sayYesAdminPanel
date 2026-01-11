/**
 * =============================================================================
 * DASHBOARD PAGE
 * =============================================================================
 *
 * The main dashboard - shows an overview of the system.
 *
 * WHAT IT SHOWS:
 * --------------
 * - Statistics cards (total users, templates, categories)
 * - Recent activity section
 * - Quick action links
 *
 * DATA FETCHING:
 * --------------
 * We fetch data from THREE different endpoints at the same time:
 * - useUsers() → GET /api/users
 * - useTemplates() → GET /api/templates
 * - useCategories() → GET /api/categories
 *
 * React Query handles all of this automatically. Each hook manages its own
 * loading state, so we can show loading indicators independently.
 *
 * =============================================================================
 */

import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useUsers } from "@/features/users/api";
import { useTemplates } from "@/features/templates/api";
import { useCategories } from "@/features/categories/api";
import { ViewPort } from "@/features/viewPort/components";
import { StatisticsCards, QuickActionsCard } from "../features/dashBoard/components";

export const Route = createFileRoute("/dashboard")({
    component: Dashboard,
});



function Dashboard() {
    // Fetch data from all three endpoints
    // Each hook manages its own loading/error state
    const { data: users, isLoading: usersLoading } = useUsers();
    const { data: templates, isLoading: templatesLoading } = useTemplates();
    const { data: categories, isLoading: categoriesLoading } = useCategories();

    return (
        <ViewPort>
            {/* Page title */}
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            {/* Statistics cards showing counts */}
            <StatisticsCards
                userCount={users?.length || 0}
                templateCount={templates?.length || 0}
                categoryCount={categories?.length || 0}
                usersLoading={usersLoading}
                templatesLoading={templatesLoading}
                categoriesLoading={categoriesLoading}
            />

            {/* Quick actions and recent activity */}
            <QuickActionsCard />
        </ViewPort>
    );
}
