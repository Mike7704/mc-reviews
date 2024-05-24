import { revalidatePath } from "next/cache";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
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

  // Make sure recent data is displayed on page load
  revalidatePath(`/pizzas/${params.id}`);

  // Fetch image from cloudinary
  const pizzaImageSrc = await getImage(pizza.image_url);

  return (
    <AnimateIn>
      <div className="content-container top-padding">
        <h2 className={pizzaStyle.name}>{pizza.name}</h2>
        <div className={`text-backdrop ${pizzaStyle.text_container}`}>
          <div className="container-overlay" />
          <p className={pizzaStyle.rating}>🍕{pizza.rating}</p>
          <div>
            <label>Description</label>
            <p className={pizzaStyle.text}>{pizza.description}</p>
          </div>
          <div>
            <label>Toppings</label>
            <p className={pizzaStyle.text}>{pizza.toppings}</p>
          </div>
          <Image
            className={pizzaStyle.image}
            src={pizzaImageSrc}
            width={512}
            height={512}
            alt={`${pizza.name} image`}
          />
        </div>
        {pizza.id !== 26 && pizza.id !== 76 ? <EditPizza pizza={pizza} /> : <button>Can&apos;t Edit, Sorry 😉</button>}
      </div>
    </AnimateIn>
  );
}
