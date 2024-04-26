"use client";
import { useEffect, useState } from "react";

export default function PizzaFact() {
  const pizzaFacts = [
    "The word 'pizza' is believed to have originated from the Latin word 'picea,' which describes the blackening of bread in an oven.",
    "The first documented pizzeria, Antica Pizzeria Port'Alba, opened in Naples, Italy, in 1738.",
    "The world's largest pizza was made in Rome in 2012, measuring 1261.65 square meters (13,580.28 square feet).",
    "The most popular pizza topping in the United States is pepperoni.",
    "The Hawaiian pizza, topped with ham and pineapple, was invented in Canada, not Hawaii.",
    "The world record for the fastest time to eat a 12-inch pizza is 41.31 seconds.",
    "In Japan, mayonnaise and squid are common pizza toppings.",
    "Pizza Hut delivered a pizza to the International Space Station in 2001.",
    "The world's most expensive pizza, the Louis XIII, costs $12,000 and is topped with lobster, caviar, truffles, and 24-carat gold leaf.",
    "October is National Pizza Month in the United States.",
    "The first American pizzeria, Lombardi's, opened in New York City in 1905.",
    "The world's longest pizza was made in Fontana, California, in 2017, stretching over 6,330 feet (1.92 kilometers).",
    "Pizza Margherita, topped with tomato, mozzarella, and basil, was named after Queen Margherita of Savoy and the colors of the Italian flag.",
    "Chicago-style deep-dish pizza features a thick crust with toppings layered in reverse order, with cheese and toppings on the bottom and sauce on top.",
    "The first frozen pizza hit the market in 1957, introduced by the Celentano Brothers.",
    "The largest pizza delivery order consisted of 13,386 pizzas and was delivered by Domino's Pizza Malaysia in 2016.",
    "The world's fastest pizza maker, Pali Grewal, made 14 pizzas in 2 minutes and 35.77 seconds in 2018.",
    "The most expensive pizza commercially available, the 'Luxury Pizza' from Industry Kitchen in New York City, costs $2,700 and features ingredients like caviar, truffles, and 24-karat gold flakes.",
    "The annual consumption of pizza in the United States is estimated to be around 3 billion pizzas.",
  ];

  const [currentFact, setCurrentFact] = useState("Fetching Fact...");

  // Run on mount to select random fact
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * pizzaFacts.length);
    setCurrentFact(pizzaFacts[randomIndex]);
  }, []);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * pizzaFacts.length);
    setCurrentFact(pizzaFacts[randomIndex]);
  };

  return (
    <>
      <p className="text-backdrop">{currentFact}</p>
      <button onClick={getRandomFact}>New Fact</button>
    </>
  );
}
