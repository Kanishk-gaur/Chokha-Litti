"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "The most authentic Litti Chokha I&apos;ve had outside of Bihar. The smoky flavor of the litti and the spicy chokha took me back to my childhood. Absolutely delicious!",
    },
    {
      id: 2,
      name: "Priya Singh",
      location: "Mumbai",
      rating: 5,
      text: "I tried Litti Chokha for the first time here and was blown away by the flavors. The combination of the wheat balls with the mashed vegetables is simply divine. Will definitely come back!",
    },
    {
      id: 3,
      name: "Amit Sharma",
      location: "Patna",
      rating: 4,
      text: "Being from Bihar, I&apos;m very particular about my Litti Chokha. This place does justice to the traditional recipe. The sattu filling was perfectly spiced and the chokha had the right amount of tanginess.",
    },
    {
      id: 4,
      name: "Meera Patel",
      location: "Bangalore",
      rating: 5,
      text: "The Litti Thali is a must-try! It gives you a complete experience of this rustic cuisine. The staff was also very helpful in explaining the dish to first-timers like me.",
    },
  ]
  

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="testimonials" className="py-20 bg-amber-100">  
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">What Our Customers Say</h2>
            <p className="max-w-2xl mx-auto text-amber-800">
              Don&apos;t just take our word for it. Here&apos;s what our customers have to say about their Chokha Litti
              experience.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-amber-200 hover:bg-amber-300 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-amber-900" />
              </button>
            </div>

            <div className="overflow-hidden px-10">
              <div className="relative h-[300px] md:h-[250px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-bold text-xl text-amber-900">{testimonials[activeIndex].name}</h3>
                            <p className="text-amber-700">{testimonials[activeIndex].location}</p>
                          </div>
                          <Quote size={32} className="text-amber-300" />
                        </div>
                        <p className="text-amber-800 italic">{testimonials[activeIndex].text}</p>
                      </div>
                      <div className="flex mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={i < testimonials[activeIndex].rating ? "text-amber-500" : "text-gray-300"}
                            fill={i < testimonials[activeIndex].rating ? "#f59e0b" : "none"}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-amber-200 hover:bg-amber-300 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-amber-900" />
              </button>
            </div>
          </div>

          <motion.div variants={itemVariants} className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? "bg-amber-600" : "bg-amber-300"
                } transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
