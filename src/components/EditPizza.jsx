"use client";
import { useState } from "react";
import DeleteButton from "@/components/DeleteButton";

export default function EditPizza({ pizza }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? (
        <>
          <button onClick={() => setShowForm(false)}>Close</button>
          <DeleteButton pizzaID={pizza.id} imageID={pizza.image_url} />
        </>
      ) : (
        <button onClick={() => setShowForm(true)}>Edit</button>
      )}
    </>
  );
}
