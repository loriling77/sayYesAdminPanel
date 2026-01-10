import CategoryIcon from '../assets/categoryIcon.svg'
import DashBoardIcon from '../assets/dashBoardIcon.svg'
import TemplateIcon from '../assets/templateIcon.svg'
import UserIcon from '../assets/userIcon.svg'

import type { MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
    {
        key: "dashboard",
        label: "Dashboard",
        icon: <img src={DashBoardIcon} className='w-5 h-5'></img>,
        children: [{ key: "/dashboard", label: "Dashboard" }],
    },
    {
        key: "user",
        label: "User",
        icon: <img src={UserIcon} className='w-7 h-7'></img>,
        children: [{ key: "/user", label: "UserInfo" }],
    },
    {
        key: "template",
        label: "Template",
        icon: <img src={TemplateIcon} className='w-5 h-5'></img>,
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
        icon: <img src={CategoryIcon} className='w-5 h-5' ></img>,
        children: [{ key: "/category", label: "Category Management" }],
    },
];

export { items };
