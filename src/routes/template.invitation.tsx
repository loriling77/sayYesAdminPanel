import { createFileRoute } from "@tanstack/react-router";
import Search from "@/components/search";
import { PageHeader, ErrorMessage } from "@/components";
import { useDeleteTemplate, useTemplates } from "@/features/templates/api";
import { TemplateTable } from "@/features/templates/components";
import { ViewPort } from "@/features/viewPort/components";
import { useState } from "react";
import TemplateViewModal from '../features/templateView/templateViewModal'

export const Route = createFileRoute("/template/invitation")({
    component: Invitation,
});




function Invitation() {
    const { data: templates, isLoading, error } = useTemplates();
    const [openModal, setOpenModal] = useState(false);
    const [selectTemplate, setSelectTemplate] = useState<string | null>(null);
    const deleteTemplate = useDeleteTemplate();

    const handleOpenModal = () => {
        setSelectTemplate(templates ? templates[0].id : null);
        setOpenModal(true);
    };

    const handleCloseModal = () => {

        setOpenModal(false);
    }

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
            <TemplateTable templates={templates} loading={isLoading} onEdit={handleOpenModal} onDelete={(id: string) => deleteTemplate.mutate(id)} />
            <TemplateViewModal openModal={openModal} handleCloseModal={handleCloseModal} template={selectTemplate} />
        </ViewPort>
    );
}
