import Link from "next/link";

export default function NotFound() {
  return (
    <div className="content-container top-padding">
      <h2 className="subheading">Page Not Found</h2>
      <p className="text-backdrop">Could not find requested resource</p>
      <Link className="button" href={`/pizzas`}>
        Back
      </Link>
    </div>
  );
}
