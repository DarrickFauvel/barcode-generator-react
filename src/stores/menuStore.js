import { atom } from 'nanostores'

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
    name: 'About myTools',
    route: 'about',
    icon: 'info.svg'
  }
])

export const isMenuOpen = atom(false)
