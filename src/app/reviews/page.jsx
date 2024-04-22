import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import FormSubmitButton from "@/components/FormSubmitButton";
import PizzaCard from "@/components/PizzaCard";

export default async function Reviews() {
  let pizzas;

  try {
    // Fetch all reviews for the movie
    pizzas = await sql`
      SELECT * FROM pizza_reviews ORDER BY rating DESC
    ;`;
  } catch (error) {
    throw new Error("Could not fetch pizzas");
  }

  async function handleAddPizza(formData) {
    // Make sure this is running on the server
    "use server";

    // Get review data from form
    const review = formData.get("review");
    const rating = formData.get("rating");

    // Update review
    await sql`INSERT INTO pizza_reviews (game_id, review, rating) VALUES (${params.id}, ${review}, ${rating})`;

    // Revalidate the games page to fetch most recent data
    revalidatePath(`/reviews`);
  }

  return (
    <>
      <div className="reviews-container">
        <h2>Pizzas</h2>
        <div className="pizza-cards-container">
          {pizzas.rows.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
      <div className="add-pizza-container">
        <h2>Add A Pizza</h2>
        <form action={handleAddPizza}>
          <label className="subheading" htmlFor="rating">
            Rating
          </label>
          <input type="number"></input>

          <label className="subheading" htmlFor="review">
            Review
          </label>
          <textarea id="review" name="review" placeholder="Write your review here" required></textarea>

          <label className="subheading" htmlFor="image">
            Image
          </label>
          <input type="file"></input>

          <FormSubmitButton />
        </form>
      </div>
    </>
  );
}
