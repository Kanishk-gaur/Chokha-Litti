import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chokha Litti",
  description: "Your description here",
  icons: {
    icon: "/Liiti_Logo.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-amber-50`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
