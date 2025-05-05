"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Clock, Phone, Calendar } from "lucide-react"

export default function Location() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const locations = [
    {
      id: 1,
      name: "Chokha Litti Main Branch",
      address: "123 Culinary Street, Bihar Food District, Patna, Bihar 800001",
      hours: "Mon-Sat: 11:00 AM - 10:00 PM, Sun: 12:00 PM - 9:00 PM",
      phone: "+91 9876543210",
      events: "Live folk music every Friday evening",
    },
    {
      id: 2,
      name: "Chokha Litti Express",
      address: "456 Flavor Avenue, Gourmet Plaza, Delhi, 110001",
      hours: "Daily: 10:00 AM - 11:00 PM",
      phone: "+91 9876543211",
      events: "Traditional cooking demonstrations on weekends",
    },
  ]

  return (
    <section id="location" className="py-20 bg-amber-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Visit Us</h2>
            <p className="max-w-2xl mx-auto text-amber-800">
              Experience the authentic taste of Chokha Litti at our locations. We're conveniently located to serve you
              the best traditional flavors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <motion.div
                key={location.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-amber-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-amber-800 text-center p-4">
                      <MapPin size={48} className="mx-auto mb-2" />
                      <h3 className="text-xl font-bold">{location.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-amber-900">{location.address}</p>
                  </div>
                  <div className="flex items-start">
                    <Clock size={20} className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-amber-900">{location.hours}</p>
                  </div>
                  <div className="flex items-start">
                    <Phone size={20} className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-amber-900">{location.phone}</p>
                  </div>
                  <div className="flex items-start">
                    <Calendar size={20} className="text-amber-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-amber-900">{location.events}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video w-full bg-amber-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Interactive Map</h3>
                  <p className="text-amber-800">
                    This is where an interactive map would be displayed, showing the locations of our restaurants.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 text-center">
            <div className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full font-bold">
              We also offer catering services for events and parties!
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
