import { atom } from 'nanostores'

export const appData = atom({
  title: 'redTool',
  icon: 'mobile.svg',
  techStack: [
    {
      name: 'React',
      url: 'https://reactjs.org/',
      description: 'A JavaScript library for building user interfaces'
    },
    {
      name: 'Nanostores',
      url: 'https://github.com/nanostores/nanostores',
      description: 'A tiny state manager'
    },
    {
      name: 'AWS Amplify',
      url: 'https://aws.amazon.com/amplify/',
      description: 'CI/CD and web hosting'
    },
    {
      name: 'Namecheap',
      url: 'https://www.namecheap.com/',
      description: 'Domain name service'
    }
  ]
})
