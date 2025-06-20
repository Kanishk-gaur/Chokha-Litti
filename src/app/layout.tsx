import { Inter } from "next/font/google";
import "./globals.css";
import MusicWrapper from "@/components/MusicWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chokha Litti",
  description: "Your description here",
  icons: {
    icon: "/logo3.png",
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
        <MusicWrapper>
          <main>{children}</main>
        </MusicWrapper>
      </body>
    </html>
  );
}
