import "./globals.css";
import { Poppins } from "next/font/google";
import { Providers } from "@/Store/Provider";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppin = Poppins({
  weight: ["100", "400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ecommerce Next App",
  description: "Developed by Abdullah Moiz",
  authors: [{ name: "Abdullah Moiz", url: "https://abdullahmoiz.vercel.app/" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppin.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
