import { revalidatePath } from "next/cache";
import PizzaCard from "@/components/PizzaCard";
import AddPizzaForm from "@/components/AddPizzaForm";
import { fetchPizzas } from "@/utils/utils";

export default async function Pizzas() {
  // Fetch all pizzas from database
  const pizzas = await fetchPizzas();

  // Make sure recent data is displayed on page load
  revalidatePath(`/pizzas`);

  return (
    <>
      <div className="content-container">
        <h2>Pizzas</h2>
        {pizzas.rows.length > 0 ? (
          <div className="pizza-cards-container">
            {pizzas.rows.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        ) : (
          <p className="text-backdrop">No Pizzas Found</p>
        )}
      </div>
      <div className="content-container">
        <h2>Add A Pizza</h2>
        <AddPizzaForm />
      </div>
    </>
  );
}
