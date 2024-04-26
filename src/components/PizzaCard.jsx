import Link from "next/link";
import Image from "next/image";
import pizzaCardStyle from "@/styles/pizza_card.module.css";
import { getImage } from "@/api/cloudinary";

export default async function PizzaCard({ pizza }) {
  // Fetch image from cloudinary
  const pizzaImageSrc = await getImage(pizza.image_url);

  return (
    <Link className={pizzaCardStyle.card_container} href={`/pizzas/${pizza.id}`}>
      <div className={pizzaCardStyle.image_container}>
        <Image className={pizzaCardStyle.image} src={pizzaImageSrc} width={185} height={250} alt={`${pizza.name} image`} />
      </div>
      <div className={pizzaCardStyle.text_container}>
        <p className="text-xl">{pizza.name}</p>
        <p className="text-xl">🍕{pizza.rating}</p>
        <p className="text-sm">{pizza.description}</p>
        <p className="text-sm">Toppings: {pizza.toppings}</p>
      </div>
    </Link>
  );
}
