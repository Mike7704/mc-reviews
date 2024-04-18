import Image from "next/image";

export default function Home() {
  return (
    <main className="page-container">
      <div className="background-image" />
      <div className="header-container">
        <Image className="pedros-logo" src={"/images/pedros-logo.png"} width={128} height={128} alt={`Home`} />
        <h1>MC Reviews</h1>
        <h3>The only pizza reviewer you need</h3>
      </div>
      <div className="reviews-container">
        <h2>Popular</h2>
      </div>
      <div className="about-container">
        <h2>About</h2>
      </div>
    </main>
  );
}
