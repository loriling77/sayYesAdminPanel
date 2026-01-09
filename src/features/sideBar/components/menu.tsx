import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { items } from "../stores/menuItems";

const AppMenu: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const onClick: MenuProps["onClick"] = (e) => {
        navigate({ to: e.key });
    };

    return (
        <div className="text-[28px] font-bold mb-5 flex-column">
            <div className="pl-10 pt-5">SayYes</div>
            <Menu
                onClick={onClick}
                style={{ width: 256 }}
                selectedKeys={[location.pathname]}
                defaultOpenKeys={["dashboard", "user", "template", "category"]}
                mode="inline"
                items={items}
            />
        </div>
    );
};

export default AppMenu;
