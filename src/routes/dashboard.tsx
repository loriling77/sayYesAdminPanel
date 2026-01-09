import { createFileRoute } from "@tanstack/react-router";
import { useUsers } from "@/features/users/api";
import { useTemplates } from "@/features/templates/api";
import { useCategories } from "@/features/categories/api";
import { ViewPort } from "@/features/viewPort/components";
import { StatisticsCards, QuickActionsCard } from "../features/dashBoard/components";

export const Route = createFileRoute("/dashboard")({
    component: Dashboard,
});

function Dashboard() {
    const { data: users, isLoading: usersLoading } = useUsers();
    const { data: templates, isLoading: templatesLoading } = useTemplates();
    const { data: categories, isLoading: categoriesLoading } = useCategories();

    return (
        <ViewPort>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            <StatisticsCards
                userCount={users?.length || 0}
                templateCount={templates?.length || 0}
                categoryCount={categories?.length || 0}
                usersLoading={usersLoading}
                templatesLoading={templatesLoading}
                categoriesLoading={categoriesLoading}
            />

            <QuickActionsCard />
        </ViewPort>
    );
}
