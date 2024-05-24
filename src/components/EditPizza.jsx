"use client";
import { useState, useEffect } from "react";
import UpdatePizzaForm from "@/components/UpdatePizzaForm";
import DeleteButton from "@/components/DeleteButton";

export default function EditPizza({ pizza }) {
  const [showForm, setShowForm] = useState(false);

  const hideForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    // Scroll the page down when the form is opened
    if (showForm) {
      const targetPosition = document.body.scrollHeight - window.innerHeight - 160;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }, [showForm]);

  return (
    <>
      {showForm ? (
        <>
          <h2 className="subheading">Edit Review</h2>
          <UpdatePizzaForm pizza={pizza} hideForm={hideForm} />
          <button onClick={() => setShowForm(false)}>Close</button>
          <DeleteButton pizzaID={pizza.id} imageID={pizza.image_url} />
        </>
      ) : (
        <button onClick={() => setShowForm(true)}>Edit</button>
      )}
    </>
  );
}
