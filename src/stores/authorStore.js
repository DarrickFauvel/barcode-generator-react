import { atom } from 'nanostores'

export const authorData = atom({
  name: 'Darrick Fauvel',
  socials: [
    {
      name: 'Website',
      url: 'http://darrickdevelops.com'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/darrickfauvel/'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/DarrickFauvel'
    }
  ]
})
