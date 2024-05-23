import Image from "next/image";
import { notFound } from "next/navigation";
import { getImage } from "@/api/cloudinary";
import { fetchPizzas } from "@/utils/utils";
import EditPizza from "@/components/EditPizza";
import pizzaStyle from "@/styles/pizza.module.css";

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
        <h2 className={pizzaStyle.name}>{pizza.name}</h2>
        <div className={`text-backdrop ${pizzaStyle.text_container}`}>
          <p className={pizzaStyle.rating}>🍕{pizza.rating}</p>
          <label>Description</label>
          <p className={pizzaStyle.text}>{pizza.description}</p>
          <label>Toppings</label>
          <p className={pizzaStyle.text}>{pizza.toppings}</p>
          <Image
            className={pizzaStyle.image}
            src={pizzaImageSrc}
            width={512}
            height={512}
            alt={`${pizza.name} image`}
          />
        </div>
        <EditPizza pizza={pizza} />
      </div>
    </>
  );
}