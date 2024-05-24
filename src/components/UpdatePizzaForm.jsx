"use client";
import FormSubmitButton from "@/components/FormSubmitButton";
import { updatePizza } from "@/utils/utils";
import formStyle from "@/styles/form.module.css";

export default function UpdatePizzaForm({ pizza, hideForm }) {
  async function handleSubmit(formData) {
    await updatePizza(formData);
    hideForm();
  }

  return (
    <form className={formStyle.form_container} action={handleSubmit}>
      <input type="hidden" name="pizzaID" value={pizza.id} />
      <input type="hidden" name="currentImageID" value={pizza.image_url} />
      <div className={formStyle.input_container}>
        <div className="container-overlay" />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={pizza.name}
          placeholder="Enter name here"
          required
        ></input>

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          step="0.1"
          min="1"
          max="5"
          defaultValue={pizza.rating}
          placeholder="Enter 1-5 rating here"
          required
        ></input>

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          defaultValue={pizza.description}
          placeholder="Enter review here"
          required
        ></textarea>

        <label htmlFor="toppings">Toppings</label>
        <textarea
          id="toppings"
          name="toppings"
          defaultValue={pizza.toppings}
          placeholder="Enter toppings here"
          required
        ></textarea>

        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" accept="image/*"></input>
      </div>
      <FormSubmitButton />
    </form>
  );
}
