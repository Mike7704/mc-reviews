import { revalidatePath } from "next/cache";
import PizzaCard from "@/components/PizzaCard";
import PizzaForm from "@/components/PizzaForm";
import { fetchPizzas } from "@/utils/utils";
import homeStyle from "@/styles/home.module.css";

export default async function Pizzas() {
  // Fetch all pizzas from database
  const pizzas = await fetchPizzas();

  // Make sure recent data is displayed on page load
  revalidatePath(`/pizzas`);

  return (
    <>
      <div className="content-container">
        <h2 className="subheading">Pizzas</h2>
        {pizzas.rows.length > 0 ? (
          <div className={homeStyle.pizza_cards_container}>
            {pizzas.rows.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        ) : (
          <p className="text-backdrop">No Pizzas Found</p>
        )}
      </div>
      <div className="content-container">
        <h2 className="subheading">Add A Pizza</h2>
        <PizzaForm />
      </div>
    </>
  );
}
