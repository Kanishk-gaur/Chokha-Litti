import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-amber-50`}>
        {/* Navbar and Footer removed from layout */}
        <main>{children}</main>
      </body>
    </html>
  );
}