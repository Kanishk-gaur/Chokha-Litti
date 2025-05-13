import BenefitsPage from "@/components/benefits/benefitsPage";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function BenefitsRoute() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Main content - BenefitsPage */}
      <main className="flex-grow">
        <BenefitsPage />
      </main>
      
      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}