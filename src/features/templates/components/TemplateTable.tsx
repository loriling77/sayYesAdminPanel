import React from "react";
import { Table } from "antd";
import type { TemplateResponse } from "@/types";
import { createTemplateColumns } from "./template-columns";

interface TemplateTableProps {
    templates?: TemplateResponse[];
    loading?: boolean;

    onEdit?: (id: string) => void;
    onDelete?: ((id: string) => void | undefined) | undefined;
    handleOpenModal?: (template: TemplateResponse) => void;
    handleCloseModal?: () => void;
}

export const TemplateTable: React.FC<TemplateTableProps> = ({
    templates,
    loading = false,
    onEdit,
    onDelete }) => {
    const columns = createTemplateColumns({ onEdit, onDelete });

    return (
        <Table<TemplateResponse>
            columns={columns}
            dataSource={templates}
            loading={loading}
            rowKey="id"
            pagination={{ pageSize: 10 }}
        />
    );
};
