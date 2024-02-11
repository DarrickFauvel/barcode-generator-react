import { atom } from "nanostores"

export const isMenuOpen = atom(false)

export const activeMenuItemHighlight = atom(null)

export const menuItems = atom([
  {
    name: "Barcode Generator",
    route: "generator",
    icon: "material-symbols-light:barcode-scanner",
  },
  {
    name: "Produce Codes",
    route: "produce",
    icon: "healthicons:fruits-outline",
  },
  {
    name: "About redTool",
    route: "about",
    icon: "material-symbols-light:info-outline",
  },
])
