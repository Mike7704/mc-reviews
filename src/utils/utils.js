"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

// Delete pizza from database
export async function fetchPizzas(pizzaID) {
  try {
    if (pizzaID) {
      return await sql`
        SELECT * FROM pizza_reviews WHERE id=${pizzaID}
      ;`;
    }
    return await sql`
        SELECT * FROM pizza_reviews ORDER BY rating DESC, name ASC
      ;`;
  } catch (error) {
    throw new Error("Could not fetch pizzas");
  }
}

// Add pizza to database
export async function addPizza(name, description, toppings, rating, imageID) {
  try {
    await sql`INSERT INTO pizza_reviews (name, description, toppings, rating, image_url) VALUES (${name}, ${description}, ${toppings}, ${rating}, ${imageID})`;
    revalidatePath(`/pizzas`);
  } catch (error) {
    throw new Error("Could not add pizza");
  }
}

// Delete pizza from database
export async function deletePizza(pizzaID) {
  try {
    await sql`DELETE FROM pizza_reviews WHERE id=${pizzaID}`;
    revalidatePath(`/pizzas`);
  } catch (error) {
    throw new Error("Could not delete pizza");
  }
}
