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
                className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full shadow-xl"
              >
                <Image
                  src="/images/Des.jpeg"
                  alt="Traditional Chokha Litti preparation"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Zig Zag Connector */}
          <div className="flex justify-center my-12">
            <motion.svg
              width="200"
              height="100"
              viewBox="0 0 200 100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <motion.path
                d="M100,0 L70,20 L130,40 L70,60 L130,80 L100,100"
                stroke="#D97706"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="0 1"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </motion.svg>
          </div>

          {/* Laung Litti Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.div
                whileInView={{ scale: [0.9, 1] }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-full shadow-xl"
              >
                <Image
                  src="/images/laung-litti.jpeg"
                  alt="Sweet Laung Litti"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6">
                The Sweetness of Laung Litti
              </h2>
              <motion.p
                variants={itemVariants}
                className="text-amber-800 mb-4 text-lg"
              >
                Laung Litti is a delectable sweet counterpart to the savory
                Chokha Litti, originating from the same regions of Bihar and
                Uttar Pradesh. This sweet treat features a golden, crispy
                exterior made from wheat flour, with a delicious filling of
                khoya (reduced milk solids), sugar, cardamom, and other aromatic
                spices. The signature touch comes from the laung (clove) that is
                pressed into each litti, giving it both its distinctive name and
                a wonderful aromatic flavor.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-amber-800 text-lg"
              >
                Often served during festive occasions and celebrations, Laung
                Litti represents the sweeter side of traditional Bihar cuisine.
                These sweet dumplings are typically deep-fried to achieve a
                perfect golden-brown color and then soaked in sugar syrup,
                creating a harmonious balance of textures and flavors. The
                contrast between the crispy exterior and the soft, sweet filling
                makes Laung Litti a cherished dessert that has been passed down
                through generations, preserving the rich culinary heritage of
                the region.
              </motion.p>
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
