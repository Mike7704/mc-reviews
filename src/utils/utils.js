"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { uploadImage } from "@/api/cloudinary";
import { deleteImage } from "@/api/cloudinary";

// Fetch pizza from database
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
export async function addPizza(formData) {
  try {
    const name = formData.get("name");
    const description = formData.get("description");
    const toppings = formData.get("toppings");
    const rating = formData.get("rating");
    // Upload image to cloudinary and store image url
    const imageID = await uploadImage(formData.get("image"));

    await sql`INSERT INTO pizza_reviews
      (name, description, toppings, rating, image_url)
      VALUES (${name}, ${description}, ${toppings}, ${rating}, ${imageID}
    )`;
    revalidatePath(`/pizzas`);
  } catch (error) {
    throw new Error("Could not add pizza");
  }
}

// Update pizza in database
export async function updatePizza(formData) {
  try {
    const pizzaID = formData.get("pizzaID");
    const name = formData.get("name");
    const description = formData.get("description");
    const toppings = formData.get("toppings");
    const rating = formData.get("rating");

    // Upload new image to cloudinary if provided
    const imageUrl = formData.get("image").size > 0 ? await uploadImage(formData.get("image")) : null;

    // Delete current image if new image is provided
    const currentImageID = formData.get("currentImageID");
    if (imageUrl && currentImageID) {
      await deleteImage(currentImageID);

      await sql`
        UPDATE pizza_reviews 
        SET name = ${name},
        description = ${description},
        toppings = ${toppings},
        rating = ${rating},
        image_url = ${imageUrl}
        WHERE id = ${pizzaID}
      `;
    } else {
      // Don't update image
      await sql`
        UPDATE pizza_reviews 
        SET name = ${name},
        description = ${description},
        toppings = ${toppings},
        rating = ${rating}
        WHERE id = ${pizzaID}
      `;
    }

    revalidatePath(`/pizzas/${pizzaID}`);
  } catch (error) {
    throw new Error("Could not update pizza");
  }
}

// Delete pizza from database
export async function deletePizza(pizzaID) {
  try {
    await sql`DELETE FROM pizza_reviews WHERE id=${pizzaID}`;
  } catch (error) {
    throw new Error("Could not delete pizza: ");
  } finally {
    redirect(`/pizzas`);
  }
}
