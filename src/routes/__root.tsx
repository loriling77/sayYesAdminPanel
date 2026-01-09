import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Menu from "../features/sideBar/components/menu";

const RootLayout = () => (
  <div className="flex">
    <Menu />
    <div className="flex-1">
      <Outlet />
    </div>
    <TanStackRouterDevtools />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
