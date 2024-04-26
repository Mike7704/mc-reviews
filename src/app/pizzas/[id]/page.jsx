import Image from "next/image";
import { getImage } from "@/api/cloudinary";
import { fetchPizzas } from "@/utils/utils";

export default async function Pizza({ params }) {
  const pizza = (await fetchPizzas(params.id)).rows[0];
  // Fetch image from cloudinary
  const pizzaImageSrc = await getImage(pizza.image_url);

  return (
    <>
      <div className="content-container">
        <h2>{pizza.name}</h2>
        <p>{pizza.description}</p>
        <p>Toppings: {pizza.toppings}</p>
        <p>🍕{pizza.rating}</p>
        <Image className="self-center" src={pizzaImageSrc} width={256} height={256} alt={`${pizza.name} image`} />
      </div>
    </>
  );
}
