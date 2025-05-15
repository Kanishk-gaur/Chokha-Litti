"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone} from "lucide-react";

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const locations = [
    {
      id: 1,
      name: "Chokha Litti Main Branch",
      address: "Budha Vihar ,Munirika,New Delhi, Delhi 110067",
      hours: "Sunday to Saturday: 6 PM - 2 AM",
      phone: "+91 9560323141",
      
    },
  ];

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
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Visit Us
            </h2>
            <p className="max-w-2xl mx-auto text-amber-800">
              Experience the authentic taste of Chokha Litti at our locations.
              We are conveniently located to serve you the best traditional
              flavors.
            </p>
          </motion.div>

          {/* Map moved to the top */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Chokha Litti Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6223623099927!2d77.16806227594641!3d28.551068487774554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d005a2edae1%3A0x3220f0ec9ac41e26!2sBudh%20vihar%20munirka!5e0!3m2!1sen!2sin!4v1746441327804!5m2!1sen!2sin" 
                className="w-full aspect-video border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Centered single location card */}
          <div className="flex justify-center">
            <motion.div variants={itemVariants} className="w-full max-w-2xl">
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
                      <MapPin
                        size={20}
                        className="text-amber-600 mt-1 mr-3 flex-shrink-0"
                      />
                      <p className="text-amber-900">{location.address}</p>
                    </div>
                    <div className="flex items-start">
                      <Clock
                        size={20}
                        className="text-amber-600 mt-1 mr-3 flex-shrink-0"
                      />
                      <p className="text-amber-900">{location.hours}</p>
                    </div>
                    <div className="flex items-start">
                      <Phone
                        size={20}
                        className="text-amber-600 mt-1 mr-3 flex-shrink-0"
                      />
                      <p className="text-amber-900">{location.phone}</p>
                    </div>
                   
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          
        </motion.div>
      </div>
    </section>
  );
}