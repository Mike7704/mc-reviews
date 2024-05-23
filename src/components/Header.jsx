import Image from "next/image";
import RotateIn from "@/components/RotateIn";

export default function Header() {
  return (
    <div className="header-container">
      <div className="background-image" />
      <RotateIn>
        <div className="pedros-logo-container">
          <Image src={"/images/pedros-logo.png"} width={156} height={156} alt={`Home`} />
        </div>
      </RotateIn>
      <h1>MC Reviews</h1>
      <h3>The only pizza reviews you can trust</h3>
    </div>
  );
}
