import type { Metadata } from "next";
import { Poppins, Sansita_Swashed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const sansita = Sansita_Swashed({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sansita',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Tuna Toro",
  description: "Tuna Toro Bintaro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${sansita.variable}`}
      >
        <Navbar />
        {children}
        <div className="h-[10vh] bg-[#212121]">

        </div>
        <Footer />
      </body>
    </html>
  );
}
