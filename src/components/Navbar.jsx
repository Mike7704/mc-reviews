import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <Link href={"#home"}>Home</Link>
      <Link href={"#reviews"}>Reviews</Link>
      <Link href={"#about"}>About</Link>
    </nav>
  );
}
