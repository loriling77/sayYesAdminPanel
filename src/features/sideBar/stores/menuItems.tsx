/**
 * =============================================================================
 * MENU ITEMS CONFIGURATION
 * =============================================================================
 *
 * This file defines the sidebar menu structure.
 *
 * HOW THE MENU WORKS:
 * -------------------
 * The menu uses Ant Design's Menu component. Each item can:
 * - Be a simple link (navigate to a page)
 * - Have children (expandable submenu)
 *
 * KEY PROPERTY:
 * -------------
 * The "key" is the URL path. When you click a menu item,
 * we navigate to that path. For example:
 * - key: '/dashboard' → navigates to /dashboard
 * - key: '/user' → navigates to /user
 *
 * ADDING NEW MENU ITEMS:
 * ----------------------
 * 1. Add the item to the array below
 * 2. Make sure a route exists for that path (in src/routes/)
 *
 * Example:
 *   {
 *     key: 'products',           // Group identifier
 *     label: 'Products',         // What user sees
 *     icon: <ShoppingOutlined />,
 *     children: [
 *       { key: '/products', label: 'All Products' },
 *       { key: '/products/add', label: 'Add Product' },
 *     ],
 *   }
 *
 * =============================================================================
 */

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
