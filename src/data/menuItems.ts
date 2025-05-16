import { MenuItem, MenuCategory } from "../components/menu/types"

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "2 Litti Chokha (Plain)",
    description: "Traditional wheat balls stuffed with sattu, served with a classic trio of mashed potato, brinjal, and tomato chokha. A simple and satisfying Bihari delicacy.",
    price: "₹169",
    category: "Litti Chokha",
    spicy: true,
    vegetarian: true,
    image: "/images/Des.jpeg"
  },
  {
    id: 2,
    name: "2 Litti Chokha with Amul/Gowardhan Ghee",
    description: "Flavorful sattu-stuffed litti enriched with Amul or Gowardhan ghee, paired with spicy green chili-infused chokha. A fiery twist to the traditional favorite.",
    price: "₹189",
    category: "Litti Chokha",
    spicy: true,
    vegetarian: true,
    image: "/images/Litti-chockha.jpeg"
  },
  {
    id: 3,
    name: "2 Litti Chokha with A2 Cow Ghee (Desi Ghee)",
    description: "Premium A2 cow ghee poured over hot littis for an authentic taste, served with fresh tomato chutney and hearty chokha. Pure, wholesome, and vegetarian.",
    price: "₹229",
    category: "Litti Chokha",
    vegetarian: true,
    popular: true,
    spicy: true,
    image: "/images/Front.jpeg"
  },
  {
    id: 4,
    name: "Laung Latta [1 piece]",
    description: "A crispy, deep-fried sweet stuffed with khoya and dry fruits, coated with sugar syrup. A traditional Bihari dessert to end your meal on a sweet note.",
    price: "₹39",
    category: "Desserts",
    vegetarian: true,
    image: "/images/Laungtatta.jpeg"
  },
  {
    id: 5,
    name: "Litti Chokha [3 pieces] with Laung Latta",
    description: "A festive combo featuring three littis, assorted chokha, dal, rice, papad, and sweet chutney, served with a delicious Laung Latta for dessert.",
    price: "₹429",
    category: "Combos",
    popular: true,
    vegetarian: true,
    spicy: true,
    image: "/images/combo.avif"
  }
]

export const categories: MenuCategory[] = [
  { id: "Litti Chokha", name: "Litti Chokha" },
  { id: "Desserts", name: "Desserts" },
  { id: "Combos", name: "Combos" },
]
