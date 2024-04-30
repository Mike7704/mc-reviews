"use client";
import { deletePizza } from "@/utils/utils";
import { deleteImage } from "@/api/cloudinary";

export default function DeleteButton({ pizzaID, imageID }) {
  function handleDelete() {
    deletePizza(pizzaID);
    deleteImage(imageID);
  }

  return <button onClick={() => handleDelete()}>Delete</button>;
}
