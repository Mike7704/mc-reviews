import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="page-container">
      <Header />
      <section id="home" className="home-container">
        <h2>Home Section</h2>
      </section>
      <section id="reviews" className="reviews-container">
        <h2>Reviews Section</h2>
      </section>
      <section id="about" className="about-container">
        <h2>About Section</h2>
      </section>
      <Footer />
    </main>
  );
}
