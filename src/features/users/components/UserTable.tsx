import React from "react";
import { Table } from "antd";
import type { UserResponse } from "@/types";
import { createUserColumns } from "./user-columns";

interface UserTableProps {
  users?: UserResponse[];
  loading?: boolean;
  onEdit?: (user: UserResponse) => void;
  onDelete?: (id: string) => void;
  deleteLoading?: boolean;
}

export const UserTable: React.FC<UserTableProps> = ({
  users = [],
  loading = false,
  onEdit,
  onDelete,
  deleteLoading,
}) => {
  const columns = createUserColumns({ onEdit, onDelete, deleteLoading });

  return (
    <Table<UserResponse>
      columns={columns}
      dataSource={users}
      loading={loading}
      rowKey="id"
      pagination={{ pageSize: 10 }}
    />
  );
};
