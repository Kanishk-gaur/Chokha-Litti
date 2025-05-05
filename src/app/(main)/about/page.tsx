"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Recipe from "@/app/(main)/recipe/page";
import Testimonials from "../reviews/page";
import Contact from "../contact/page";
import Location from "../location/page";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Navbar />

      <section id="about" className="py-20 bg-amber-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                The Story of Chokha Litti
              </h2>
              <motion.p
                variants={itemVariants}
                className="text-amber-800 mb-4 text-lg"
              >
                Originating from the heartlands of Bihar and eastern Uttar
                Pradesh, Chokha Litti is a rustic delicacy that has been a
                staple in rural Indian cuisine for centuries. This wholesome
                dish consists of two main components: the Litti, which is a
                baked wheat ball filled with sattu (roasted gram flour) and
                spices, and the Chokha, a mashed vegetable preparation typically
                made with roasted eggplant, potatoes, and tomatoes.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-amber-800 text-lg"
              >
                Traditionally cooked in cow dung cakes or over open fires, Litti
                Chokha represents the ingenuity of rural cooking methods. The
                dish gained popularity among farmers and laborers due to its
                high nutritional value, long shelf life, and the fact that it
                could be prepared without water – making it ideal for long
                journeys and during times of water scarcity. Today, it stands as
                a symbol of cultural heritage and is celebrated for its unique,
                smoky flavor and rustic charm.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="order-1 md:order-2 flex justify-center"
            >
              <motion.div
                whileInView={{ scale: [0.9, 1] }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative h-[300px] md:h-[400px] w-full max-w-md overflow-hidden rounded-lg shadow-xl"
              >
                <Image
                  src="/images/Des.jpeg"
                  alt="Traditional Chokha Litti preparation"
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Recipe />
      <Testimonials />
      <Contact />
      <Location />

      <Footer />
    </>
  );
}
