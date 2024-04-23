export default function Home() {
  return (
    <>
      <div className="content-container">
        <h2>Pizzas</h2>
        <p>View all pizzas.</p>
      </div>
      <div className="content-container">
        <h2>About</h2>
        <p>
          Here at MC Reviews, we believe that pizza is more than just a meal – it&apos;s an experience. That&apos;s why we go beyond the taste and
          texture to consider every aspect of the pizza-making process, from the quality of the ingredients to the ambiance of the restaurant.
        </p>

        <p>
          We&apos;re here to guide you on your pizza journey so you make the right decision on your next pizza order. Join us as we embark on a
          delicious exploration of the world&apos;s most beloved dish!
        </p>
      </div>

      <div className="content-container">
        <h2>Fact Of The Day</h2>
        <p>Pizza fact.</p>
      </div>

      <div className="content-container">
        <h2>Instagram</h2>
        <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
        <div className="elfsight-app-b0a80f14-9511-476a-b8ab-114aa10a7984 instagram" data-elfsight-app-lazy></div>
      </div>
    </>
  );
}
