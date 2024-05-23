import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import menuStyle from "@/styles/menu.module.css";

export default function Menu() {
  return (
    <AnimateIn>
      <div className="content-container top-padding">
        <h2 className="subheading">Menu</h2>
        <div>
          <Image
            className={menuStyle.menu_image}
            src={"/images/food-menu.png"}
            width={4087}
            height={3083}
            alt={`Food menu`}
            priority
          />
          <Image
            className={menuStyle.menu_image}
            src={"/images/drinks-menu.png"}
            width={4087}
            height={3083}
            alt={`Drinks menu`}
          />
        </div>
        <a className="button" href="https://crazypedros.co.uk/" target="_">
          Crazy Pedro&apos;s Website
        </a>
        <Image
          className={menuStyle.pedro_image}
          src={"/images/pedros-image.png"}
          width={661}
          height={328}
          alt={`Pedros image`}
        />
      </div>
    </AnimateIn>
  );
}
