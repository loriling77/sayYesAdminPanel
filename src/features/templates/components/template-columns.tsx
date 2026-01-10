import { Space, Button, Tag } from "antd";
import type { TableProps } from "antd";
import type { TemplateResponse } from "@/types";

interface TemplateColumnsProps {
    onView?: (id: string) => void;
    onEdit?: (template: TemplateResponse) => void;
    onDelete?: (id: string) => void;
}

export const createTemplateColumns = ({
    onView,
    onEdit,
    onDelete,
}: TemplateColumnsProps): TableProps<TemplateResponse>["columns"] => [
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
            render: (text) => <span className="font-medium">{text}</span>,
        },
        {
            title: "Thumbnail",
            dataIndex: "thumbNailImageUrl",
            key: "thumbNailImageUrl",
            render: (url: string) =>
                url ? (
                    <img
                        src={url}
                        alt="thumbnail"
                        className="w-16 h-16 object-cover rounded"
                    />
                ) : (
                    <span className="text-gray-400">No thumbnail</span>
                ),
        },
        {
            title: "Music URL",
            dataIndex: "musicUrl",
            key: "musicUrl",
            render: (url: string) =>
                url ? (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                    >
                        View Music
                    </a>
                ) : (
                    <span className="text-gray-400">No music</span>
                ),
        },
        {
            title: "Sections",
            dataIndex: "sections",
            key: "sections",
            render: (sections: TemplateResponse["sections"]) => (
                <Tag color="blue">{sections?.length || 0} sections</Tag>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    {onView && (
                        <Button type="link" onClick={() => onView(record.id)}>
                            View
                        </Button>
                    )}
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
