import { atom } from 'nanostores'

export const menuItems = atom([
  {
    name: 'Barcode Generator',
    route: 'generator'
  },
  {
    name: 'Produce Codes',
    route: 'produce'
  },
  {
    name: 'About myTools',
    route: 'about'
  }
])

export const isMenuOpen = atom(false)
