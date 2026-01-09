import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
    {
        key: "dashboard",
        label: "Dashboard",
        icon: <MailOutlined />,
        children: [{ key: "/dashboard", label: "Dashboard" }],
    },
    {
        key: "user",
        label: "User",
        icon: <MailOutlined />,
        children: [{ key: "/user", label: "UserInfo" }],
    },
    {
        key: "template",
        label: "Template",
        icon: <AppstoreOutlined />,
        children: [
            { key: "/template/invitation", label: "Invitation" },
            { key: "/template/mv", label: "MV" },
            { key: "/template/poster", label: "Poster" },
        ],
    },
    {
        type: "divider",
    },
    {
        key: "category",
        label: "Category",
        icon: <SettingOutlined />,
        children: [{ key: "/category", label: "Category Management" }],
    },
];

export { items };
