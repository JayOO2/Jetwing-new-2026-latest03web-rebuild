import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatbot from "@/components/AIChatbot";

export const metadata: Metadata = {
  title: "Jetwing Travels - No.1 Travel Agent in Sri Lanka | Tour Operator",
  description: "Jetwing Travels - The leading Destination Management Company in Sri Lanka. Discover amazing tours, hotels and experiences across the island.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AIChatbot />
      </body>
    </html>
  );
}
