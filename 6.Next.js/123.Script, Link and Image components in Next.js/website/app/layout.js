import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook - connect with the world",
  description:
    "This is facebook and we can connect with the wold using facebook",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className="container mx-auto min-h-[87vh]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
