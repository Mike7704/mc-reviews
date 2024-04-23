import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
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

    // Get pizza data from form
    const name = formData.get("name");
    const description = formData.get("description");
    const toppings = formData.get("toppings");
    const rating = formData.get("rating");

    const file = formData.get("image");
    if (!file) {
      return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(" ", "_");
    const image_url = "/images/uploads/" + filename;
    console.log(filename);
    try {
      await writeFile(path.join(process.cwd(), "public/images/uploads/" + filename), buffer);
      //return NextResponse.json({ Message: "Success", status: 201 });
    } catch (error) {
      console.log("Error occured ", error);
      //return NextResponse.json({ Message: "Failed", status: 500 });
    }

    // Insert pizza
    await sql`INSERT INTO pizza_reviews (name, description, toppings, rating, image_url) VALUES (${name}, ${description}, ${toppings}, ${rating}, ${image_url})`;

    // Revalidate the pizzas page to fetch most recent data
    revalidatePath(`/pizzas`);
  }

  revalidatePath(`/pizzas`);

  return (
    <>
      <div className="content-container">
        <h2>Pizzas</h2>
        <div className="pizza-cards-container">
          {pizzas.rows.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
      <div className="content-container">
        <h2>Add A Pizza</h2>
        <form className="form-container" action={handleAddPizza}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required></input>

          <label htmlFor="rating">Rating</label>
          <input type="number" id="rating" name="rating" required></input>

          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" placeholder="Write your review here" required></textarea>

          <label htmlFor="toppings">Toppings</label>
          <textarea id="toppings" name="toppings" placeholder="Write toppings here" required></textarea>

          <label htmlFor="image">Image</label>
          <input type="file" id="image" name="image" accept="image/*" required></input>

          <FormSubmitButton />
        </form>
      </div>
    </>
  );
}
