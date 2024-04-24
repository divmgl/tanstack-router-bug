import { Link } from "@tanstack/react-router";

export function FromIsMissingLink() {
  return <Link to="/projects/$projectId/$tab">Link</Link>;
}

export function LinkIsBrokenExample() {
  return (
    <Link from="" to="/projects/$projectId/$tab">
      Link
    </Link>
  );
}
