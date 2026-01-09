import React from "react";
import { Table } from "antd";
import type { CategoryResponse } from "@/types";
import { createCategoryColumns } from "./category-columns";

interface CategoryTableProps {
  categories?: CategoryResponse[];
  loading?: boolean;
  onEdit?: (category: CategoryResponse) => void;
  onDelete?: (id: string) => void;
}

export const CategoryTable: React.FC<CategoryTableProps> = ({
  categories = [],
  loading = false,
  onEdit,
  onDelete,
}) => {
  const columns = createCategoryColumns({ onEdit, onDelete });

  return (
    <Table<CategoryResponse>
      columns={columns}
      dataSource={categories}
      loading={loading}
      rowKey="id"
      pagination={{ pageSize: 10 }}
    />
  );
};
