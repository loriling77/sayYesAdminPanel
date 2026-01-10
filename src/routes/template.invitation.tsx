import { createFileRoute } from "@tanstack/react-router";
import Search from "@/components/search";
import { PageHeader, ErrorMessage } from "@/components";
import { useTemplate, useTemplates } from "@/features/templates/api";
import { TemplateTable } from "@/features/templates/components";
import { ViewPort } from "@/features/viewPort/components";

export const Route = createFileRoute("/template/invitation")({
    component: Invitation,
});

function Invitation() {
    const { data: templates, isLoading, error } = useTemplates();
    const template = useTemplate();

    //   const invitationTemplates = templates?.filter((t) =>
    //     t.title?.toLowerCase().includes("invitation"),
    //   );

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
                title="Invitation Templates"
                createButtonText="Create Template"
            />
            <div className="mb-5">
                <Search />
            </div>
            <TemplateTable templates={templates} loading={isLoading} onView={(id) => template.mutate(id)} />
        </ViewPort>
    );
}
