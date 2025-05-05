export interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  category: string
  popular?: boolean
  spicy?: boolean
  vegetarian?: boolean
  image: string
}

export interface MenuCategory {
  id: string
  name: string
}