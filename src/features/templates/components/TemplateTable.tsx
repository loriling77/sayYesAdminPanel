import React from "react";
import { Table } from "antd";
import type { TemplateResponse } from "@/types";
import { createTemplateColumns } from "./template-columns";

interface TemplateTableProps {
  templates?: TemplateResponse[];
  loading?: boolean;
  onView?: (template: TemplateResponse) => void;
  onEdit?: (template: TemplateResponse) => void;
  onDelete?: (id: string) => void;
}

export const TemplateTable: React.FC<TemplateTableProps> = ({
  templates = [],
  loading = false,
  onView,
  onEdit,
  onDelete,
}) => {
  const columns = createTemplateColumns({ onView, onEdit, onDelete });

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
