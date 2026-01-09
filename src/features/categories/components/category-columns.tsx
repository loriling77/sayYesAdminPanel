import { Space, Button } from "antd";
import type { TableProps } from "antd";
import type { CategoryResponse } from "@/types";

interface CategoryColumnsProps {
  onEdit?: (category: CategoryResponse) => void;
  onDelete?: (id: string) => void;
}

export const createCategoryColumns = ({
  onEdit,
  onDelete,
}: CategoryColumnsProps): TableProps<CategoryResponse>["columns"] => [
  {
    title: "Icon",
    dataIndex: "icon",
    key: "icon",
    render: (icon: string) => <span className="text-2xl">{icon || "📁"}</span>,
  },
  {
    title: "Category Name",
    dataIndex: "categoryName",
    key: "categoryName",
    render: (text) => <span className="font-medium">{text}</span>,
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (id: string) => (
      <span className="text-gray-500 text-xs font-mono">{id}</span>
    ),
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
          <Button type="link" danger onClick={() => onDelete(record.id)}>
            Delete
          </Button>
        )}
      </Space>
    ),
  },
];
