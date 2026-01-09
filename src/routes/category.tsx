import { createFileRoute } from "@tanstack/react-router";
import Search from "@/components/search";
import { PageHeader, ErrorMessage } from "@/components";
import { useCategories } from "@/features/categories/api";
import { CategoryTable } from "@/features/categories/components";
import { ViewPort } from "@/features/viewPort/components";

export const Route = createFileRoute("/category")({
  component: Category,
});

function Category() {
  const { data: categories, isLoading, error } = useCategories();

  if (error) {
    return (
      <ViewPort>
        <ErrorMessage message={error.message} />
      </ViewPort>
    );
  }

  return (
    <ViewPort>
      <PageHeader
        title="Category Management"
        createButtonText="Create Category"
      />
      <div className="mb-5">
        <Search />
      </div>
      <CategoryTable categories={categories} loading={isLoading} />
    </ViewPort>
  );
}
