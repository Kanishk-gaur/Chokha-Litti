"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from 'react';
import {
  ChevronRight,
  Award,
  Heart,
  Shield,
  Flame,
  Brain,
  Sparkles,
  Leaf,
} from "lucide-react";

const BenefitsPage = () => {
  const router = useRouter();
  const [showOrderOptions, setShowOrderOptions] = useState(false);

  const gheeBenefits = [
    {
      title: "Rich in Healthy Fats",
      description:
        "Contains CLA (Conjugated Linoleic Acid) which supports heart health and may help reduce body fat.",
      icon: <Heart className="w-8 h-8 text-red-500" />,
      color: "bg-red-50",
      borderColor: "border-red-200",
      iconBg: "bg-red-100",
    },
    {
      title: "Boosts Digestion",
      description:
        "Stimulates digestive enzymes and helps in proper absorption of nutrients from food.",
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      color: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100",
    },
    {
      title: "Enhances Immunity",
      description:
        "Packed with fat-soluble vitamins A, D, E, and K that strengthen the immune system.",
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
    },
    {
      title: "Anti-inflammatory",
      description:
        "Contains butyric acid which reduces inflammation in the body and supports gut health.",
      icon: <Flame className="w-8 h-8 text-orange-500" />,
      color: "bg-orange-50",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100",
    },
    {
      title: "Brain Nourishment",
      description:
        "Healthy fats in ghee support brain function and nervous system development.",
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
    },
    {
      title: "Skin & Hair Health",
      description:
        "Nourishes skin from within and promotes shiny, healthy hair when consumed regularly.",
      icon: <Sparkles className="w-8 h-8 text-amber-500" />,
      color: "bg-amber-50",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-100",
    },
  ];

  const preparationSteps = [
    {
      step: 1,
      title: "Fresh Cow Milk",
      description:
        "We start with fresh, organic milk from grass-fed cows raised in natural environments.",
      image: "/images/Cow.jpg?height=150&width=120",
    },
    {
      step: 2,
      title: "Culturing the Cream",
      description:
        "The milk is set aside to naturally culture, developing beneficial probiotics.",
      image: "/images/Cow2.png?height=150&width=120",
    },
    {
      step: 3,
      title: "Churning Butter",
      description:
        "Cultured cream is churned to separate golden butter from buttermilk.",
      image: "/images/Cow3.png?height=150&width=120",
    },

    {
      step: 4,
      title: "Clarification",
      description:
        "Pure golden ghee is carefully strained to remove all milk solids.",
      image: "/images/Cow4.jpeg?height=150&width=120",
    },
    {
      step: 5,
      title: "Aged to Perfection",
      description:
        "Our ghee is aged for enhanced flavor and nutritional properties.",
      image: "/images/Cow5.jpeg?height=150&width=120",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-300 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <Image
          src="/Cow.jpg"
          alt="Cow background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Header Section with animated underline */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block relative">
            <h1 className="text-5xl md:text-6xl font-bold text-orange-900 mb-4">
              Litti Chokha with{" "}
              <span className="text-amber-600">Pure Desi Ghee</span>
            </h1>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 bg-amber-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1 }}
            ></motion.div>
          </div>
          <motion.p
            className="text-xl md:text-2xl text-orange-700 max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Experience the authentic taste and health benefits of traditional
            Bihari cuisine prepared with handcrafted desi ghee
          </motion.p>
        </motion.div>

        {/* Ghee Preparation Section with timeline */}
        <section className="mb-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-2">
              The Art of{" "}
              <span className="text-amber-600">Traditional Ghee</span> Making
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-center text-orange-700 max-w-4xl mx-auto">
              Our desi ghee is prepared using centuries-old Vedic methods that
              preserve its nutritional integrity and rich flavor
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-300 to-amber-500 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-16 md:space-y-0">
              {preparationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center md:mb-24`}
                >
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    } mb-6 md:mb-0`}
                  >
                    <div
                      className={`inline-block ${
                        index % 2 === 0 ? "md:ml-auto" : ""
                      }`}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg mx-auto md:mx-0">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600">{step.description}</p>
                  </div>

                  <div className="md:w-1/2 relative">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-amber-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden md:block z-10 border-4 border-white shadow-md"></div>

                    <div
                      className={`bg-white p-4 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                        index % 2 === 0 ? "md:ml-16" : "md:mr-16"
                      }`}
                    >
                      <div className="relative h-48 w-full rounded-lg overflow-hidden">
                        <Image
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Ghee Benefits Section with colorful cards */}
        <section className="mb-28">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-800 mb-2">
              Health Benefits of{" "}
              <span className="text-amber-600">Pure Desi Ghee</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-center text-orange-700 max-w-4xl mx-auto">
              When combined with Litti Chokha, our ghee transforms this
              traditional dish into a superfood
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {gheeBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                className={`${benefit.color} p-8 rounded-2xl shadow-lg border ${benefit.borderColor} hover:shadow-2xl transition-all duration-300`}
              >
                <div
                  className={`${benefit.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Litti Chokha with Ghee Section with glass morphism */}
        <section className="relative mb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-200 to-orange-200 rounded-3xl"></div>
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30"></div>

          <div className="relative p-8 md:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-8">
                  Why Our <span className="text-amber-600">Litti Chokha</span>{" "}
                  Stands Out
                </h2>
                <ul className="space-y-6">
                  {[
                    "Prepared with fresh, hand-pounded wheat flour",
                    "Stuffed with authentic sattu mix and spices",
                    "Slow-roasted over charcoal for authentic flavor",
                    "Served with generous portions of homemade ghee",
                    "Chokha made from fresh, seasonal vegetables",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="flex items-start bg-white/70 p-4 rounded-xl shadow-sm"
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <p className="text-lg text-orange-900 font-medium">
                        {item}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                  <Image
                    src="/images/Litti4.png" // Replace with your image
                    alt="Litti Chokha with Ghee"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">
                      Authentic Bihari Flavors
                    </h3>
                    <p className="text-xl">Just like grandma used to make</p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 border-4 border-white/30 rounded-full"></div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-amber-500/30 rounded-full backdrop-blur-sm"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-white rounded-3xl shadow-xl p-12 border border-amber-100 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-amber-200 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-200 rounded-full opacity-30 translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-orange-800 mb-6">
              Ready to Taste Authentic Litti Chokha?
            </h2>
            <p className="text-xl md:text-2xl text-orange-700 mb-10 max-w-3xl mx-auto">
              Order now or learn more about our traditional preparation methods
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {/* Order Now Button with Dropdown */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowOrderOptions(!showOrderOptions);
                  }}
                  className="px-10 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center group"
                >
                  <span className="relative flex items-center justify-center">
                    Order Now
                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <AnimatePresence>
                  {showOrderOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-10 mt-3 w-64 right-0 sm:left-0 sm:right-auto origin-top rounded-lg bg-white shadow-xl border border-amber-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="p-2 space-y-1">
                        <a
                          href="https://zomato.onelink.me/xqzv/6nmthhe9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-3 text-gray-800 hover:bg-amber-50 rounded-md transition-colors"
                        >
                          <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                            <Image 
                              src="/images/1080px-Zomato_logo.png" 
                              alt="Zomato" 
                              width={20} 
                              height={20}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <div className="font-medium">Order via Zomato</div>
                            <div className="text-xs text-gray-500">30-45 mins delivery</div>
                          </div>
                        </a>
                        <a
                          href="https://www.swiggy.com/menu/1072365?source=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-3 text-gray-800 hover:bg-amber-50 rounded-md transition-colors"
                        >
                          <div className="bg-orange-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                            <Image 
                              src="/images/Swiggy_logo_PNG2.png" 
                              alt="Swiggy" 
                              width={20} 
                              height={20}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <div className="font-medium">Order via Swiggy</div>
                            <div className="text-xs text-gray-500">25-40 mins delivery</div>
                          </div>
                        </a>
                        <a
                          href="https://wa.me/9289700931"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-3 text-gray-800 hover:bg-amber-50 rounded-md transition-colors"
                        >
                          <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                            <Image 
                              src="/images/whatsapp-logo.png" 
                              alt="WhatsApp" 
                              width={20} 
                              height={20}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <div className="font-medium">Order via WhatsApp</div>
                            <div className="text-xs text-gray-500">Direct message</div>
                          </div>
                        </a>
                      </div>
                      <div className="px-4 py-2 bg-amber-50 text-xs text-amber-800 rounded-b-lg">
                        Use code <span className="font-bold">LITTI10</span> for 10% off
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Learn About Tradition Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/about")}
                className="px-10 py-4 bg-white text-amber-700 border-2 border-amber-300 text-lg font-semibold rounded-full shadow-lg transition-all hover:bg-amber-50 hover:border-amber-400 flex items-center"
              >
                Learn About Our Tradition
                <ChevronRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>

            {/* Delivery info */}
            <div className="mt-8 flex items-center justify-center space-x-2 text-orange-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">Fast Delivery | 30-45 mins</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BenefitsPage;