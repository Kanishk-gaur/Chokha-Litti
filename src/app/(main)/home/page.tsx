"use client";

import HeroSection from "@/components/home/HeroSection";
import About from "@/components/about/aboutcode";
import Testimonials from "@/app/(main)/reviews/page";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Recipe from "@/app/(main)/recipe/page";
import Location from "@/app/(main)/location/page";
import Benefits from "@/components/benefits/benefits";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="scroll-smooth">
        <main>
          <section id="home">
            <HeroSection />
          </section>
          <section id="about" className="scroll-mt-20">
            <About />
          </section>
          <section id="menu" className="scroll-mt-20">
            <Recipe />
          </section>
          <section id="benefits" className="scroll-mt-20">
            <Benefits />
          </section>
          <section id="reviews" className="scroll-mt-20">
            <Testimonials />
          </section>
          <section id="location" className="scroll-mt-20">
            <Location />
          </section>
          {/* <section id="feedback" className="scroll-mt-20">
            <FeedbackForm />
          </section> */}
        </main>
      </div>
      <Footer />
    </>
  );
}
