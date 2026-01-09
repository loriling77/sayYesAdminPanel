import { createFileRoute } from "@tanstack/react-router";
import Search from "@/components/search";
import { PageHeader, ErrorMessage } from "@/components";
import { useTemplates } from "@/features/templates/api";
import { TemplateTable } from "@/features/templates/components";
import { ViewPort } from "@/features/viewPort/components";

export const Route = createFileRoute("/template/mv")({
  component: MV,
});

function MV() {
  const { data: templates, isLoading, error } = useTemplates();

  const mvTemplates = templates?.filter((t) =>
    t.title?.toLowerCase().includes("mv"),
  );

  if (error) {
    return (
      <ViewPort>
        <ErrorMessage message={error.message} />
      </ViewPort>
    );
  }

  return (
    <ViewPort>
      <PageHeader title="MV Templates" createButtonText="Create Template" />
      <div className="mb-5">
        <Search />
      </div>
      <TemplateTable templates={mvTemplates} loading={isLoading} />
    </ViewPort>
  );
}
