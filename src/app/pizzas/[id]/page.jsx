import { fetchPizzas } from "@/utils/utils";

export default async function Pizza({ params }) {
  const pizza = (await fetchPizzas(params.id)).rows[0];

  return (
    <>
      <div className="content-container">
        <h2>{pizza.name}</h2>
      </div>
    </>
  );
}
