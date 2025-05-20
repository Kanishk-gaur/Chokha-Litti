"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import {
  Zap,
  Heart,
  Dumbbell,
  Sprout,
  Flame,
  Sparkles,
  ChevronRight,
  ArrowRight,
  Leaf,
  Shield,
} from "lucide-react";
import Image from "next/image";

const Benefits = () => {
  const router = useRouter();

  const benefits = [
    {
      icon: <Zap className="w-10 h-10" />,
      iconColor: "text-yellow-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-amber-100",
      borderColor: "border-yellow-200",
      shadowColor: "shadow-yellow-100",
      title: "Energizing Goodness",
      description:
        "Packed with a perfect blend of carbohydrates and proteins, Litti Chokha offers sustained energy to keep you active and energized all day.",
    },
    {
      icon: <Heart className="w-10 h-10" />,
      iconColor: "text-red-500",
      bgColor: "bg-gradient-to-br from-red-50 to-rose-100",
      borderColor: "border-red-200",
      shadowColor: "shadow-red-100",
      title: "Heart-Healthy Delight",
      description:
        "Made with natural ingredients like ghee and whole wheat flour, it promotes heart health and supports a balanced diet.",
    },
    {
      icon: <Dumbbell className="w-10 h-10" />,
      iconColor: "text-blue-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
      borderColor: "border-blue-200",
      shadowColor: "shadow-blue-100",
      title: "Muscle & Strength Booster",
      description:
        "Loaded with protein and essential nutrients, Litti Chokha helps in muscle repair, growth, and overall strength.",
    },
    {
      icon: <Sprout className="w-10 h-10" />,
      iconColor: "text-green-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      borderColor: "border-green-200",
      shadowColor: "shadow-green-100",
      title: "Nutrient-Rich & Fiber-Packed",
      description:
        "The combination of roasted wheat, veggies, and spices gives you a rich source of fiber, aiding digestion and promoting gut health.",
    },
    {
      icon: <Flame className="w-10 h-10" />,
      iconColor: "text-orange-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-100",
      borderColor: "border-orange-200",
      shadowColor: "shadow-orange-100",
      title: "Metabolism Kickstart",
      description:
        "Spices like garlic and mustard in the Chokha blend help fire up your metabolism, improving digestion and keeping you feeling light and active.",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      iconColor: "text-purple-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
      borderColor: "border-purple-200",
      shadowColor: "shadow-purple-100",
      title: "Mood-Boosting & Satisfying",
      description:
        "With its rich flavors and satisfying texture, Litti Chokha is not just a meal—it's a happiness booster that leaves you feeling fulfilled and content.",
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
    hover: {
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.7 },
    },
  };

  const decorationVariants = {
    animate: {
      y: [0, 15, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-amber-100 to-orange-50 -z-10"></div>
        <div className="absolute inset-0 opacity-5 -z-10">
          <Image
            src="/images/Litti.jpeg?height=1080&width=1920"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-amber-300 rounded-full opacity-20 -z-5 blur-3xl"
          variants={decorationVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-60 h-60 bg-orange-300 rounded-full opacity-20 -z-5 blur-3xl"
          variants={decorationVariants}
          animate="animate"
          transition={{ delay: 1.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200 rounded-full opacity-10 -z-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header with animated underline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-orange-800 mb-4">
                Why Eat <span className="text-amber-600">Litti Chokha </span>?
              </h2>
              <motion.div
                className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl md:text-2xl text-orange-600 text-center mb-12 max-w-3xl mx-auto mt-6"
            >
              Discover the unique benefits of our traditional Bihari cuisine
            </motion.p>
          </motion.div>

          {/* Benefits cards with enhanced styling */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className={`relative ${benefit.bgColor} p-8 md:p-10 rounded-2xl shadow-xl ${benefit.shadowColor} border ${benefit.borderColor} overflow-hidden group`}
              >
                {/* Decorative corner shapes */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/20 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white/30 rounded-full" />

                <div className="relative z-10">
                  {/* Icon with animated background */}
                  <motion.div
                    className={`w-20 h-20 rounded-2xl ${benefit.iconColor} bg-white flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white opacity-80"
                      whileHover={{ opacity: 0.9 }}
                    />
                    <motion.div className="relative z-10">
                      {benefit.icon}
                    </motion.div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-800 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Learn more link that appears on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="mt-6 flex items-center font-medium text-orange-600"
                  >
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional benefits highlight section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Content section - expanded with more professional elements */}
              <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 text-sm font-semibold text-amber-700 bg-amber-100 rounded-full mb-4">
                    Authentic Bihari Cuisine
                  </span>
                  <h3 className="text-3xl font-bold text-orange-800 mb-6">
                    Traditional Preparation, <br />
                    <span className="text-amber-600">Modern Excellence</span>
                  </h3>
                  <p className="text-lg text-gray-700 mb-8">
                    Our Litti Chokha embodies generations of culinary wisdom,
                    crafted with premium ingredients and traditional techniques
                    for unparalleled authenticity and flavor.
                  </p>
                </div>

                {/* Stats section */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: "100+", label: "Years of Tradition" },
                    { value: "5,000+", label: "Happy Customers" },
                    { value: "12", label: "Natural Ingredients" },
                    { value: "0", label: "Artificial Additives" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="bg-amber-50 p-4 rounded-xl"
                    >
                      <p className="text-2xl font-bold text-amber-700">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Benefits list */}
                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: <Leaf className="w-5 h-5" />,
                      text: "Handmade with 100% Natural Ingredients",
                      desc: "Sourced from local farmers and trusted suppliers",
                    },
                    {
                      icon: <Shield className="w-5 h-5" />,
                      text: "Free from Preservatives & Additives",
                      desc: "Pure, clean eating experience",
                    },
                    {
                      icon: <Flame className="w-5 h-5" />,
                      text: "Wood-fired Traditional Cooking",
                      desc: "Authentic smoky flavor and texture",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.2 }}
                      className="flex items-start"
                    >
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-4 mt-1 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">{item.text}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                  className="bg-orange-50 p-5 rounded-lg border-l-4 border-amber-500"
                >
                  <p className="italic text-gray-700 mb-2">
                    &quot;This tastes just like my grandmother used to make! The
                    authentic flavors take me back to my childhood in
                    Bihar.&quot;
                  </p>
                  <p className="text-gray-600 text-sm">
                    - Kanishk gaur,Vasant Kunj, New Delhi
                  </p>
                </motion.div>
              </div>

              {/* Video section - maintained full height */}
              <div className="md:w-1/2 relative min-h-[400px] md:min-h-[600px] group">
                {/* Video container with elegant border */}
                <div className="absolute inset-0 m-2 md:m-3 overflow-hidden rounded-xl border-4 border-white/20 group-hover:border-amber-200/30 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover scale-[1.01] group-hover:scale-100 transition-transform duration-500"
                    poster="/images/video-poster.jpg"
                  >
                    <source src="/videos/make.mp4" type="video/mp4" />
                    <source
                      src="/videos/litti-preparation.webm"
                      type="video/webm"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Subtle overlay for better contrast */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-black/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA section */}
          <motion.div
            className="mt-20 text-center relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-md opacity-70"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <button
                onClick={() => router.push("/benefits")}
                className="relative px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <span className="flex items-center">
                  Discover More Benefits of Litti Chokha with Pure Ghee
                  <ChevronRight className="ml-2 w-5 h-5" />
                </span>
              </button>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-orange-700 text-lg max-w-2xl mx-auto"
            >
              Learn about the traditional preparation and health benefits of our
              authentic ghee, crafted with care using time-honored techniques.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Benefits;
