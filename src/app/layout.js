import { Raleway } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "MC Reviews",
  description: "A pizza review app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className} suppressHydrationWarning={true}>
        {children}
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
