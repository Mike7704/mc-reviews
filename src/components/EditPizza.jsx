"use client";
import { useState } from "react";
//import PizzaForm from "@/components/PizzaForm";
import DeleteButton from "@/components/DeleteButton";

export default function EditPizza({ pizza }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? (
        <>
          {/*<h2 className="subheading">Edit Review</h2>
          <PizzaForm />*/}
          <button onClick={() => setShowForm(false)}>Close</button>
          <DeleteButton pizzaID={pizza.id} imageID={pizza.image_url} />
        </>
      ) : (
        <button onClick={() => setShowForm(true)}>Edit</button>
      )}
    </>
  );
}
