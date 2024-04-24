import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/projects/$projectId/$tab/activities/$activityId"
)({
  component: () => (
    <div>Hello /projects/$projectId/$tab/activities/$activityId!</div>
  ),
});
