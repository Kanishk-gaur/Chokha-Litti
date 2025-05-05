"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MenuItem } from "./types"

interface MenuItemCardProps {
  item: MenuItem
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-amber-900 rounded-lg overflow-hidden shadow-lg relative"
    >
      {item.popular && (
        <span className="absolute top-2 right-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full z-10">
          Popular
        </span>
      )}
      <div className="h-48 relative">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-bold text-amber-100">{item.name}</h4>
          <span className="text-lg font-bold text-amber-300">{item.price}</span>
        </div>
        <p className="text-amber-200 text-sm mb-3">{item.description}</p>
        <div className="flex space-x-2">
          {item.vegetarian && (
            <span className="bg-green-700 text-white text-xs px-2 py-1 rounded-full">Veg</span>
          )}
          {item.spicy && (
            <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full">Spicy</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}