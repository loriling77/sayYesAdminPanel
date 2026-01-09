import { Space, Button } from "antd";
import type { TableProps } from "antd";
import type { UserResponse } from "@/types";

interface UserColumnsProps {
  onEdit?: (user: UserResponse) => void;
  onDelete?: (id: string) => void;
  deleteLoading?: boolean;
}

export const createUserColumns = ({
  onEdit,
  onDelete,
  deleteLoading,
}: UserColumnsProps): TableProps<UserResponse>["columns"] => [
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
    render: (text) => <span className="font-medium">{text}</span>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    render: (date: string) => new Date(date).toLocaleDateString(),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        {onEdit && (
          <Button type="link" onClick={() => onEdit(record)}>
            Edit
          </Button>
        )}
        {onDelete && (
          <Button
            type="link"
            danger
            loading={deleteLoading}
            onClick={() => onDelete(record.id)}
          >
            Delete
          </Button>
        )}
      </Space>
    ),
  },
];
