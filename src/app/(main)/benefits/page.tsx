"use client";

import Navbar from "@/components/navbar/Navbar";
import BenefitsPage from "@/components/benefits/benefitsPage";
import Footer from "@/components/footer/Footer";

export default function BenefitsRoute() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <BenefitsPage />
        </main>
        <Footer />
      </div>
    </>
  );
}
