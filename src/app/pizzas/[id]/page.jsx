import Image from "next/image";
import { notFound } from "next/navigation";
import { getImage } from "@/api/cloudinary";
import { fetchPizzas } from "@/utils/utils";
import DeleteButton from "@/components/DeleteButton";

export default async function Pizza({ params }) {
  const pizza = (await fetchPizzas(params.id)).rows[0];
  if (!pizza) {
    notFound();
  }

  // Fetch image from cloudinary
  const pizzaImageSrc = await getImage(pizza.image_url);

  return (
    <>
      <div className="content-container">
        <h2>{pizza.name}</h2>
        <div className="text-backdrop">
          <p>🍕{pizza.rating}</p>
          <p>{pizza.description}</p>
          <p>Toppings: {pizza.toppings}</p>
        </div>
        <Image className="self-center" src={pizzaImageSrc} width={512} height={512} alt={`${pizza.name} image`} />
        <button>Edit</button>
        <DeleteButton pizzaID={pizza.id} imageID={pizza.image_url} />
      </div>
    </>
  );
}
