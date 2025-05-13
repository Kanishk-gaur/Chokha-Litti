"use client"
import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Utensils, Clock, Award, MapPin, Sparkles} from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  // const fadeInVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1, transition: { duration: 1.2 } },
  // }

  const highlightFeatures = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Traditional Recipe",
      description: "Authentic preparation methods passed down through generations",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Centuries Old",
      description: "A culinary tradition dating back hundreds of years",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Cultural Heritage",
      description: "Recognized as an important part of Bihar's food culture",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Regional Specialty",
      description: "Originating from Bihar and eastern Uttar Pradesh",
    },
  ]

  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <section id="about" className="py-24 relative" ref={scrollRef}>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Hero section with animated title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-amber-900 mb-6 relative inline-block">
              Our Heritage
              <motion.div
                className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </h1>
            <p className="text-xl md:text-2xl text-amber-700 max-w-3xl mx-auto">
              Discover the rich history and tradition behind our authentic Bihari cuisine
            </p>
          </motion.div>

          {/* First section with enhanced styling */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ opacity, scale }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24"
          >
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -left-6 -top-6 w-16 h-16 bg-amber-400 rounded-full opacity-20"
                />
                <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-8 relative">
                  The Story of{" "}
                  <span className="text-orange-600 relative">
                    Chokha Litti
                    <motion.svg
                      width="100%"
                      height="8"
                      viewBox="0 0 100 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute -bottom-2 left-0"
                    >
                      <motion.path
                        d="M1 5.5C20 0.5 50 0.5 99 5.5"
                        stroke="#F97316"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                      />
                    </motion.svg>
                  </span>
                </h2>

                <motion.div variants={containerVariants} className="space-y-6 text-lg text-amber-800">
                  <motion.p variants={itemVariants} className="leading-relaxed">
                    Originating from the heartlands of Bihar and eastern Uttar Pradesh, Chokha Litti is a rustic
                    delicacy that has been a staple in rural Indian cuisine for centuries. This wholesome dish consists
                    of two main components: the Litti, which is a baked wheat ball filled with sattu (roasted gram
                    flour) and spices, and the Chokha, a mashed vegetable preparation typically made with roasted
                    eggplant, potatoes, and tomatoes.
                  </motion.p>
                  <motion.p variants={itemVariants} className="leading-relaxed">
                    Traditionally cooked in cow dung cakes or over open fires, Litti Chokha represents the ingenuity of
                    rural cooking methods. The dish gained popularity among farmers and laborers due to its high
                    nutritional value, long shelf life, and the fact that it could be prepared without water – making it
                    ideal for long journeys and during times of water scarcity.
                  </motion.p>
                  <motion.p variants={itemVariants} className="leading-relaxed">
                    Today, it stands as a symbol of cultural heritage and is celebrated for its unique, smoky flavor and
                    rustic charm.
                  </motion.p>
                </motion.div>

                {/* Feature highlights */}
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-2 gap-6 mt-10"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {highlightFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-start space-x-3"
                      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    >
                      <div className="mt-1 bg-amber-100 p-2 rounded-full text-amber-600">{feature.icon}</div>
                      <div>
                        <h4 className="font-semibold text-amber-900">{feature.title}</h4>
                        <p className="text-sm text-amber-700">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 md:order-2">
              <div className="relative">
                {/* Decorative elements */}
                <motion.div
                  className="absolute -z-10 w-full h-full rounded-full bg-gradient-to-br from-amber-200 to-orange-200 blur-xl opacity-70"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  whileInView={{ scale: [0.9, 1] }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] mx-auto overflow-hidden rounded-full shadow-2xl border-8 border-white"
                >
                  <Image
                    src="/images/Des.jpeg"
                    alt="Traditional Chokha Litti preparation"
                    fill
                    className="object-cover"
                  />

                  {/* Circular gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent" />

                  {/* Decorative dots */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-white rounded-full shadow-md"
                      style={{
                        top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
                        left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>

                {/* Image caption */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg text-amber-800 font-medium"
                >
                  Traditional preparation
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative divider */}
          <div className="relative flex justify-center my-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center"
            >
              <div className="w-full border-t border-amber-300" />
            </motion.div>

            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative flex items-center justify-center bg-gradient-to-r from-amber-400 to-orange-400 text-white p-4 rounded-full shadow-lg"
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
          </div>

          {/* Second section with enhanced styling */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={itemVariants} className="relative">
              {/* Decorative elements */}
              <motion.div
                className="absolute -z-10 w-full h-full rounded-full bg-gradient-to-br from-orange-200 to-amber-200 blur-xl opacity-70"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              <motion.div
                whileInView={{ scale: [0.9, 1] }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px] mx-auto overflow-hidden rounded-full shadow-2xl border-8 border-white"
              >
                <Image src="/images/Laungtatta.jpeg" alt="Sweet Laung Litti" fill className="object-cover" />

                {/* Circular gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent" />

                {/* Decorative elements */}
                <motion.div
                  className="absolute inset-0 border-8 border-dashed border-white/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </motion.div>

              {/* Image caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg text-amber-800 font-medium"
              >
                Sweet delicacy
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -right-6 -top-6 w-16 h-16 bg-orange-400 rounded-full opacity-20"
                />
                <h2 className="text-3xl md:text-5xl font-bold text-amber-900 mb-8 relative">
                  The Sweetness of{" "}
                  <span className="text-orange-600 relative">
                    Laung Litti
                    <motion.svg
                      width="100%"
                      height="8"
                      viewBox="0 0 100 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute -bottom-2 left-0"
                    >
                      <motion.path
                        d="M1 5.5C20 0.5 50 0.5 99 5.5"
                        stroke="#F97316"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                      />
                    </motion.svg>
                  </span>
                </h2>

                <motion.div variants={containerVariants} className="space-y-6 text-lg text-amber-800">
                  <motion.p variants={itemVariants} className="leading-relaxed">
                    Laung Litti is a delectable sweet counterpart to the savory Chokha Litti, originating from the same
                    regions of Bihar and Uttar Pradesh. This sweet treat features a golden, crispy exterior made from
                    wheat flour, with a delicious filling of khoya (reduced milk solids), sugar, cardamom, and other
                    aromatic spices.
                  </motion.p>
                  <motion.p variants={itemVariants} className="leading-relaxed">
                    The signature touch comes from the laung (clove) that is pressed into each litti, giving it both its
                    distinctive name and a wonderful aromatic flavor.
                  </motion.p>
                  <motion.p variants={itemVariants} className="leading-relaxed">
                    Often served during festive occasions and celebrations, Laung Litti represents the sweeter side of
                    traditional Bihar cuisine. These sweet dumplings are typically deep-fried to achieve a perfect
                    golden-brown color and then soaked in sugar syrup, creating a harmonious balance of textures and
                    flavors.
                  </motion.p>
                  <motion.p variants={itemVariants} className="leading-relaxed">
                    The contrast between the crispy exterior and the soft, sweet filling makes Laung Litti a cherished
                    dessert that has been passed down through generations, preserving the rich culinary heritage of the
                    region.
                  </motion.p>
                </motion.div>

                {/* Ingredients tags */}
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-3 mt-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {["Wheat Flour", "Khoya", "Cardamom", "Cloves", "Sugar Syrup", "Ghee"].map((ingredient, index) => (
                    <motion.span
                      key={index}
                      variants={itemVariants}
                      className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium border border-amber-200"
                      whileHover={{ scale: 1.05, backgroundColor: "#FEF3C7" }}
                    >
                      {ingredient}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to action */}
          
        </div>
      </section>

      {/* Timeline section */}
     
    </div>
  )
}
