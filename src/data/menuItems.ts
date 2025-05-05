import { MenuItem, MenuCategory } from "../components/menu/types"

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Traditional Litti Chokha",
    description: "Wheat balls stuffed with sattu, served with mashed potato, eggplant, and tomato chokha",
    price: "₹120",
    category: "main",
    popular: true,
    image: "/images/litti-chokha.jpg" // Replace with your image path
  },
  {
    id: 2,
    name: "Spicy Litti Chokha",
    description: "Our traditional litti with extra spices and green chili chokha",
    price: "₹140",
    category: "main",
    spicy: true,
    image: "/images/spicy-litti.jpg" // Replace with your image path
  },
  {
    id: 3,
    name: "Paneer Litti",
    description: "Litti stuffed with spiced cottage cheese, served with tomato chutney",
    price: "₹160",
    category: "main",
    vegetarian: true,
    image: "/images/paneer-litti.jpg" // Replace with your image path
  },
  {
    id: 4,
    name: "Mushroom Chokha",
    description: "Roasted mushroom chokha with traditional litti",
    price: "₹150",
    category: "main",
    vegetarian: true,
    image: "/images/mushroom-chokha.jpg" // Replace with your image path
  },
  {
    id: 5,
    name: "Litti Thali",
    description: "Two littis served with chokha, dal, rice, papad, and sweet chutney",
    price: "₹220",
    category: "main",
    popular: true,
    image: "/images/litti-thali.jpg" // Replace with your image path
  },
  {
    id: 6,
    name: "Sattu Paratha",
    description: "Whole wheat flatbread stuffed with spiced sattu (roasted gram flour)",
    price: "₹80",
    category: "sides",
    image: "/images/sattu-paratha.jpg" // Replace with your image path
  },
  {
    id: 7,
    name: "Aloo Chokha",
    description: "Spiced mashed potatoes with mustard oil and green chilies",
    price: "₹60",
    category: "sides",
    vegetarian: true,
    image: "/images/aloo-chokha.jpg" // Replace with your image path
  },
  {
    id: 8,
    name: "Baingan Chokha",
    description: "Smoky roasted eggplant mash with spices and herbs",
    price: "₹70",
    category: "sides",
    vegetarian: true,
    image: "/images/baingan-chokha.jpg" // Replace with your image path
  },
  {
    id: 9,
    name: "Tamatar Chokha",
    description: "Roasted tomato relish with garlic and green chilies",
    price: "₹60",
    category: "sides",
    spicy: true,
    vegetarian: true,
    image: "/images/tamatar-chokha.jpg" // Replace with your image path
  },
  {
    id: 10,
    name: "Sattu Drink",
    description: "Traditional cooling beverage made with roasted gram flour, spices, and lemon",
    price: "₹50",
    category: "beverages",
    image: "/images/sattu-drink.jpg" // Replace with your image path
  },
  {
    id: 11,
    name: "Masala Chaas",
    description: "Spiced buttermilk with mint and cumin",
    price: "₹40",
    category: "beverages",
    image: "/images/masala-chaas.jpg" // Replace with your image path
  },
  {
    id: 12,
    name: "Jaggery Lassi",
    description: "Sweet yogurt drink flavored with jaggery and cardamom",
    price: "₹60",
    category: "beverages",
    popular: true,
    image: "/images/jaggery-lassi.jpg" // Replace with your image path
  }
]

export const categories: MenuCategory[] = [
  { id: "main", name: "Main Dishes" },
  { id: "sides", name: "Side Dishes" },
  { id: "beverages", name: "Beverages" },
]