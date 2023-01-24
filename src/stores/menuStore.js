import { atom } from 'nanostores'

export const isMenuOpen = atom(false)

export const activeMenuItemHighlight = atom(null)

export const menuItems = atom([
  {
    name: 'Barcode Generator',
    route: 'generator',
    icon: 'barcode.svg'
  },
  {
    name: 'Produce Codes',
    route: 'produce',
    icon: 'fruits.svg'
  },
  {
    name: 'About redTool',
    route: 'about',
    icon: 'info.svg'
  }
])
