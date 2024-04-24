import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => <RootRoute />,
});

function RootRoute() {
  return (
    <div>
      Root Route: Outlet: <Outlet />
    </div>
  );
}
