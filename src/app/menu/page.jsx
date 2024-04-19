import Image from "next/image";

export default function Menu() {
  return (
    <main className="page-container">
      <div className="menu-container">
        <h2>Menu</h2>
        <p>Browse the Crazy Pedro&apos;s menu below</p>
        <div className="p-5 max-w-7xl">
          <Image className="w-full h-auto" src={"/images/food-menu.png"} width={4087} height={3083} alt={`Food menu`} />
          <Image className="w-full h-auto" src={"/images/drinks-menu.png"} width={4087} height={3083} alt={`Drinks menu`} />
        </div>
        <a href="https://crazypedros.co.uk/" target="_">
          Crazy Pedro&apos;s Website
        </a>
        <Image className="w-full h-auto max-w-xl p-5" src={"/images/pedros-image.png"} width={661} height={328} alt={`Pedros image`} />
      </div>
    </main>
  );
}
