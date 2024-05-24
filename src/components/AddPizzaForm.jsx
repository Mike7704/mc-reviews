"use client";
import { useRef } from "react";
import FormSubmitButton from "@/components/FormSubmitButton";
import { addPizza } from "@/utils/utils";
import formStyle from "@/styles/form.module.css";

export default function AddPizzaForm() {
  const formRef = useRef(null);

  async function handleSubmit(formData) {
    await addPizza(formData);
    formRef.current.reset();
  }

  return (
    <form className={formStyle.form_container} ref={formRef} action={handleSubmit}>
      <div className={formStyle.input_container}>
        <div className="container-overlay" />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter name here" required></input>

        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          id="rating"
          name="rating"
          step="0.1"
          min="1"
          max="5"
          placeholder="Enter 1-5 rating here"
          required
        ></input>

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" placeholder="Enter review here" required></textarea>

        <label htmlFor="toppings">Toppings</label>
        <textarea id="toppings" name="toppings" placeholder="Enter toppings here" required></textarea>

        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" accept="image/*" required></input>
      </div>
      <FormSubmitButton />
    </form>
  );
}
