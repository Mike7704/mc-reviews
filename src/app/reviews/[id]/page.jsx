import { sql } from "@vercel/postgres";

export default async function Review({ params }) {
  let pizza;

  try {
    // Fetch all pizza data
    pizza = (
      await sql`
      SELECT * FROM pizza_reviews WHERE id = ${params.id}
    ;`
    ).rows[0];
  } catch (error) {
    throw new Error("Could not fetch review");
  }

  return (
    <>
      <div className="reviews-container">
        <h2>{pizza.name}</h2>
      </div>
    </>
  );
}
