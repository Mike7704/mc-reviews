import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <Link className="icon" href={"/menu"}>
        <Image src={"/images/icons/menu.png"} width={32} height={32} alt={`Menu`} />
      </Link>
      <Link className="icon" href={"/"}>
        <Image src={"/images/icons/home.png"} width={32} height={32} alt={`Home`} />
      </Link>
      <Link className="icon" href={"/reviews"}>
        <Image src={"/images/icons/pizza.png"} width={32} height={32} alt={`Reviews`} />
      </Link>
    </nav>
  );
}
