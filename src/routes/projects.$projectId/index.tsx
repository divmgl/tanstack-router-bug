import { Navigate, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$projectId/")({
  component: ProjectPageRoute,
});

function ProjectPageRoute() {
  const { projectId } = Route.useParams();

  return (
    <>
      <Navigate
        to="/projects/$projectId/$tab"
        params={{ projectId, tab: "overview" }}
        replace
      />
    </>
  );
}
