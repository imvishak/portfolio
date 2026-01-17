import { Cardo } from "next/font/google";
import { Pacifico } from "next/font/google";

import "./globals.css";

const cardo = Cardo({
  weight: ["400", "700"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-cardo",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: ["400"],
  display: "swap",
  style: ["normal"],
  variable: "--font-pacifico",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html className={`${cardo.variable} ${pacifico.variable}`} lang="en">
      <body className="container main-container bg-black mx-auto max-w-screen-xl overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
