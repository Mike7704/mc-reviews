import Link from "next/link";
import Image from "next/image";
import navbarStyle from "@/styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={navbarStyle.container}>
      <Link className={navbarStyle.icon} href={"/menu"}>
        <Image src={"/images/icons/menu.png"} width={32} height={32} alt={`Menu`} />
      </Link>
      <Link className={navbarStyle.icon} href={"/"}>
        <Image src={"/images/icons/home.png"} width={32} height={32} alt={`Home`} />
      </Link>
      <Link className={navbarStyle.icon} href={"/pizzas"}>
        <Image src={"/images/icons/pizza.png"} width={32} height={32} alt={`Pizzas`} />
      </Link>
    </nav>
  );
}
