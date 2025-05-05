import Menu from "@/components/menu/Menu"
import { menuItems, categories } from "@/data/menuItems"

export default function Home() {
  return (
    <div>
      {/* other components */}
      <Menu menuItems={menuItems} categories={categories} />
    </div>
  )
}