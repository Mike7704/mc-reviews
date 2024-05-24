import Link from "next/link";
import Image from "next/image";
import { getImage } from "@/api/cloudinary";
import AnimateCard from "@/components/AnimateCard";
import pizzaCardStyle from "@/styles/pizza_card.module.css";

export default async function PizzaCard({ pizza }) {
  // Fetch image from cloudinary
  const pizzaImageSrc = await getImage(pizza.image_url);

  return (
    <AnimateCard style={pizzaCardStyle.animation_container}>
      <Link className={pizzaCardStyle.card_container} href={`/pizzas/${pizza.id}`}>
        <div className="container-overlay" />
        <div className={pizzaCardStyle.image_container}>
          <Image
            className={pizzaCardStyle.image}
            src={pizzaImageSrc}
            width={256}
            height={256}
            alt={`${pizza.name} image`}
          />
        </div>
        <div className={pizzaCardStyle.text_container}>
          <h3>{pizza.name}</h3>
          <p>{pizza.description}</p>
          <h3>🍕{pizza.rating}</h3>
        </div>
      </Link>
    </AnimateCard>
  );
}
