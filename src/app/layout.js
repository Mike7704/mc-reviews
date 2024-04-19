import { Raleway } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
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
        <Header />
        {children}
        <Footer />
        <Navbar />
      </body>
    </html>
  );
}
