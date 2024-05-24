import Link from "next/link";
import AnimatePage from "@/components/AnimatePage";
import PizzaFact from "@/components/PizzaFact";
import PizzaCard from "@/components/PizzaCard";
import Instagram from "@/components/Instagram";
import { fetchPizzas } from "@/utils/utils";
import homeStyle from "@/styles/home.module.css";

export default async function Home() {
  // Fetch all pizzas from database
  const pizzas = await fetchPizzas();

  return (
    <AnimatePage>
      <div className="content-container top-padding">
        <h2 className="subheading">Welcome Pizza Lover!</h2>
        <div className="text-backdrop">
          <div className="container-overlay" />
          <p>
            Here at MC Reviews, we believe that pizza is more than just a meal - it&apos;s an experience. Crazy Pedros
            is about crafting these unforgettable experiences with every slice. From timeless classics to bold creations
            and monthly specials, there&apos;s something to delight everyone&apos;s taste buds.
          </p>
          <br />
          <p>
            Join us as we guide you through the world of Crazy Pedros, helping you discover the perfect pizza for every
            occasion. Let&apos;s embark on this delicious journey together and get your next order right!
          </p>
        </div>
      </div>

      <div className="content-container">
        <h2 className="subheading">🍕Our Favourite Pizzas🍕</h2>
        {pizzas.rows.length > 0 ? (
          <div className={homeStyle.pizza_cards_container}>
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
        <h2 className="subheading">Did You Know?</h2>
        <PizzaFact />
      </div>

      <div className="content-container">
        <h2 className="subheading">Instagram</h2>
        <Instagram />
      </div>
    </AnimatePage>
  );
}
