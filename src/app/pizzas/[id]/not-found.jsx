import Link from "next/link";

export default function NotFound() {
  return (
    <div className="content-container">
      <h2>Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="button" href={`/pizzas`}>
        Back
      </Link>
    </div>
  );
}
