"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import MenuCategory from "./MenuCategory"
import { MenuItem, MenuCategory as Category } from "./types"

interface MenuProps {
  menuItems: MenuItem[]
  categories: Category[]
}

export default function Menu({ menuItems, categories }: MenuProps) {
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

  return (
    <section id="menu" className="py-20 bg-amber-800 text-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu</h2>
            <p className="max-w-2xl mx-auto text-amber-200">
              Discover our authentic Chokha Litti dishes, prepared with traditional recipes and the finest ingredients.
              Each dish is cooked to perfection to bring you the true taste of Bihar and Uttar Pradesh.
            </p>
          </motion.div>

          <div className="space-y-12">
            {categories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <MenuCategory 
                  category={category} 
                  items={menuItems.filter((item) => item.category === category.id)} 
                />
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <p className="text-amber-200 italic mb-4">
              All dishes are served with a side of fresh green chutney and pickled vegetables.
            </p>
            <div className="inline-block bg-amber-700 text-amber-100 px-4 py-2 rounded-md">
              <span className="font-bold">Special dietary requirements?</span> Please let us know when ordering.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}