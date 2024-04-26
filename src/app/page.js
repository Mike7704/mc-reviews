import Link from "next/link";
import PizzaFact from "@/components/PizzaFact";
import PizzaCard from "@/components/PizzaCard";
import { fetchPizzas } from "@/utils/utils";

export default async function Home() {
  // Fetch all pizzas from database
  const pizzas = await fetchPizzas();

  return (
    <>
      <div className="content-container">
        <h2>Welcome Pizza Lover!</h2>
        <div className="text-backdrop">
          <p>
            Here at MC Reviews, we believe that pizza is more than just a meal – it&apos;s an experience. That&apos;s why we go beyond the taste and
            texture to consider every aspect of the pizza-making process, from the quality of the ingredients to the ambiance of the restaurant.
          </p>
          <br />
          <p>
            We&apos;re here to guide you on your pizza journey so you make the right decision on your next pizza order. Join us as we embark on a
            delicious exploration of the world&apos;s most beloved dish!
          </p>
        </div>
      </div>

      <div className="content-container">
        <h2>🍕Our Favourite Pizzas🍕</h2>
        {pizzas.rows.length > 0 ? (
          <div className="pizza-cards-container">
            {pizzas.rows.slice(0, 3).map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        ) : (
          <p className="text-backdrop">No Pizzas Found</p>
        )}
        <Link className="button" href={"/pizzas"}>
          View All Pizzas
        </Link>
      </div>

      <div className="content-container">
        <h2>Did You Know?</h2>
        <PizzaFact />
      </div>

      <div className="content-container">
        <h2>Instagram</h2>
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
        <div className="elfsight-app-b0a80f14-9511-476a-b8ab-114aa10a7984 instagram" data-elfsight-app-lazy />
      </div>
    </>
  );
}
