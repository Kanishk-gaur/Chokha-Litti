"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Recipe from "@/app/(main)/recipe/page";
import Testimonials from "../reviews/page";
import Location from "../location/page";
import About from "@/components/about/aboutcode";

export default function AboutPage() {
 

  return (
    <>
      <Navbar />
      <About />
      <Recipe />
      <Testimonials />

      <Location />

      <Footer />
    </>
  );
}
