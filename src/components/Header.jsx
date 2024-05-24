import Image from "next/image";
import AnimateLogo from "@/components/AnimateLogo";

export default function Header() {
  return (
    <div className="header-container">
      <Image
        className="background-image"
        src={"/images/pizza-background.jpg"}
        width={1920}
        height={1080}
        alt={`Background`}
        priority
      />
      <AnimateLogo>
        <div className="pedros-logo-container">
          <Image src={"/images/pedros-logo.png"} width={156} height={156} alt={`Home`} priority />
        </div>
      </AnimateLogo>
      <h1>MC Reviews</h1>
      <h3>The only pizza reviews you can trust</h3>
    </div>
  );
}
