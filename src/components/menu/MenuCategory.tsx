"use client"

import { motion } from "framer-motion"
import MenuItemCard from "./MenuItemCard"
import { MenuItem, MenuCategory as Category } from "./types"

interface MenuCategoryProps {
  category: Category
  items: MenuItem[]
}

export default function MenuCategory({ category, items }: MenuCategoryProps) {
  return (
    <motion.div>
      <h3 className="text-2xl font-bold mb-6 text-amber-200 border-b border-amber-700 pb-2">
        {category.name}
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  )
}