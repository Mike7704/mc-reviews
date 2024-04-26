import FormSubmitButton from "@/components/FormSubmitButton";
import { addPizza } from "@/utils/utils";
import { uploadImage } from "@/api/cloudinary";

export default function AddPizzaForm() {
  async function handleAddPizza(formData) {
    "use server";
    // Get pizza data from form
    const name = formData.get("name");
    const description = formData.get("description");
    const toppings = formData.get("toppings");
    const rating = formData.get("rating");
    // Upload image to cloudinary and store image url
    const imageUrl = await uploadImage(formData.get("image"));
    // Add pizza to database
    await addPizza(name, description, toppings, rating, imageUrl);
  }

  return (
    <form className="form-container" action={handleAddPizza}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Enter name here" required></input>

      <label htmlFor="rating">Rating</label>
      <input type="number" id="rating" name="rating" step="any" min="0" max="5" required></input>

      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" placeholder="Enter review here" required></textarea>

      <label htmlFor="toppings">Toppings</label>
      <textarea id="toppings" name="toppings" placeholder="Enter toppings here" required></textarea>

      <label htmlFor="image">Image</label>
      <input type="file" id="image" name="image" accept="image/*" required></input>

      <FormSubmitButton />
    </form>
  );
}
