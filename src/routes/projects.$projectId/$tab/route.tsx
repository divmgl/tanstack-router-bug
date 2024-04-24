import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$projectId/$tab")({
  component: ProjectPageTabRoute,
});

function ProjectPageTabRoute() {
  return (
    <div>
      Project tab route
      <Outlet />
    </div>
  );
}
