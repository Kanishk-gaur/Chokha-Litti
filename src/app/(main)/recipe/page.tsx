"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

interface RecipeStep {
  title: string
  description: string
}

interface RecipeIngredient {
  name: string
  quantity: string
}

export default function Recipe() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState<"litti" | "chokha">("litti")
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index)
  }

  const littiIngredients: RecipeIngredient[] = [
    { name: "Whole wheat flour", quantity: "2 cups" },
    { name: "Ghee (clarified butter)", quantity: "2 tablespoons + extra for serving" },
    { name: "Salt", quantity: "1 teaspoon" },
    { name: "Water", quantity: "as needed" },
    { name: "Sattu (roasted gram flour)", quantity: "1 cup" },
    { name: "Green chilies", quantity: "2-3, finely chopped" },
    { name: "Ginger", quantity: "1 inch, grated" },
    { name: "Garlic", quantity: "4-5 cloves, minced" },
    { name: "Onion", quantity: "1 small, finely chopped" },
    { name: "Coriander leaves", quantity: "2 tablespoons, chopped" },
    { name: "Lemon juice", quantity: "1 tablespoon" },
    { name: "Pickle masala", quantity: "1 tablespoon" },
    { name: "Mustard oil", quantity: "1 tablespoon" },
    { name: "Salt", quantity: "to taste" },
  ]

  const chokhaIngredients: RecipeIngredient[] = [
    { name: "Large eggplant", quantity: "1" },
    { name: "Potatoes", quantity: "2 medium" },
    { name: "Tomatoes", quantity: "2 medium" },
    { name: "Green chilies", quantity: "2-3, finely chopped" },
    { name: "Ginger", quantity: "1 inch, grated" },
    { name: "Garlic", quantity: "3-4 cloves, minced" },
    { name: "Onion", quantity: "1 small, finely chopped" },
    { name: "Coriander leaves", quantity: "2 tablespoons, chopped" },
    { name: "Mustard oil", quantity: "2 tablespoons" },
    { name: "Salt", quantity: "to taste" },
    { name: "Red chili powder", quantity: "1/2 teaspoon" },
    { name: "Cumin powder", quantity: "1/2 teaspoon" },
  ]

  const littiSteps: RecipeStep[] = [
    {
      title: "Prepare the dough",
      description:
        "In a large bowl, mix the whole wheat flour with salt. Add ghee and rub it into the flour until it resembles breadcrumbs. Gradually add water and knead to form a smooth, firm dough. Cover with a damp cloth and let it rest for 30 minutes.",
    },
    {
      title: "Prepare the filling",
      description:
        "In another bowl, mix the sattu with chopped green chilies, ginger, garlic, onion, coriander leaves, lemon juice, pickle masala, mustard oil, and salt. Mix well. If the mixture is too dry, add a little water to make it slightly moist but not wet.",
    },
    {
      title: "Shape the litti",
      description:
        "Divide the dough into 8-10 equal portions. Take one portion, flatten it in your palm, and make a cup-like shape. Place about 1-2 tablespoons of the sattu filling in the center. Carefully bring the edges together and seal the dough to enclose the filling completely. Roll between your palms to form a smooth ball. Repeat with the remaining dough and filling.",
    },
    {
      title: "Cook the litti",
      description:
        "Traditional method: Roast the litti balls directly on coal or wood fire, turning occasionally until they are evenly charred and cooked through (about 25-30 minutes). Modern method: Preheat oven to 200°C (400°F). Place the litti balls on a baking tray and bake for 20-25 minutes until golden brown, turning halfway through. Alternatively, you can cook them on a gas stove over medium flame, turning frequently.",
    },
    {
      title: "Finish and serve",
      description:
        "Once cooked, dip the hot littis in ghee or brush generously with ghee. Serve hot with chokha and a side of green chutney.",
    },
  ]

  const chokhaSteps: RecipeStep[] = [
    {
      title: "Roast the vegetables",
      description:
        "Roast the eggplant, potatoes, and tomatoes directly over an open flame, turning occasionally until the skin is charred and the vegetables are soft inside. Alternatively, you can roast them in an oven at 200°C (400°F) for about 30-40 minutes.",
    },
    {
      title: "Peel and mash",
      description:
        "Once cooled slightly, peel off the charred skin from all the vegetables. Mash them separately in different bowls using a fork or potato masher.",
    },
    {
      title: "Prepare the chokha",
      description:
        "In a bowl, combine the mashed vegetables. Add chopped green chilies, ginger, garlic, onion, coriander leaves, mustard oil, salt, red chili powder, and cumin powder. Mix well to combine all the ingredients.",
    },
    {
      title: "Rest and serve",
      description:
        "Let the chokha rest for about 10-15 minutes to allow the flavors to meld together. Serve at room temperature alongside hot littis.",
    },
  ]

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
    <section id="recipe" className="py-20 bg-amber-800 text-amber-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Traditional Recipe</h2>
            <p className="max-w-2xl mx-auto text-amber-200">
              Learn how to prepare authentic Chokha Litti at home with our traditional recipe. Follow these steps to
              create this rustic delicacy in your own kitchen.
            </p>
          </motion.div>

          <div className="bg-amber-900 rounded-lg shadow-xl overflow-hidden">
            <div className="flex border-b border-amber-700">
              <button
                className={`flex-1 py-4 text-center font-bold transition-colors ${
                  activeTab === "litti" ? "bg-amber-700 text-amber-100" : "text-amber-300 hover:bg-amber-800"
                }`}
                onClick={() => setActiveTab("litti")}
              >
                Litti
              </button>
              <button
                className={`flex-1 py-4 text-center font-bold transition-colors ${
                  activeTab === "chokha" ? "bg-amber-700 text-amber-100" : "text-amber-300 hover:bg-amber-800"
                }`}
                onClick={() => setActiveTab("chokha")}
              >
                Chokha
              </button>
            </div>

            <div className="p-6">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-amber-200">Ingredients</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {(activeTab === "litti" ? littiIngredients : chokhaIngredients).map((ingredient, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{ingredient.name}</span>
                      <span className="text-amber-300">{ingredient.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-amber-200">Preparation</h3>
                <div className="space-y-3">
                  {(activeTab === "litti" ? littiSteps : chokhaSteps).map((step, index) => (
                    <motion.div
                      key={index}
                      className="border border-amber-700 rounded-lg overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        className="w-full flex justify-between items-center p-4 text-left font-medium bg-amber-800 hover:bg-amber-700 transition-colors"
                        onClick={() => toggleStep(index)}
                      >
                        <span>
                          <span className="inline-block w-6 h-6 mr-2 rounded-full bg-amber-600 text-white text-center">
                            {index + 1}
                          </span>
                          {step.title}
                        </span>
                        {expandedStep === index ? (
                          <ChevronUp size={20} className="text-amber-300" />
                        ) : (
                          <ChevronDown size={20} className="text-amber-300" />
                        )}
                      </button>
                      {expandedStep === index && (
                        <div className="p-4 bg-amber-900 text-amber-200">{step.description}</div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div variants={itemVariants} className="mt-8 text-center">
            <p className="text-amber-200 italic">
              Tip: For the most authentic flavor, try cooking the litti over a traditional coal or wood fire.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
