import { useState, createContext } from 'react'
import produceData from './data/produceData.json'

const Context = createContext()

const ContextProvider = (props) => {
  const [state, setState] = useState({
    author: 'Darrick Fauvel',
    urlWebsite: 'http://darrickdevelops.com',
    urlLinkedIn: 'https://www.linkedin.com/in/darrickfauvel/',
    urlGitHub: 'https://github.com/DarrickFauvel',
    textInput: '',
    location: '',
    subLocation: '',
    subLocationNumber: '',
    barcodeValue: '',
    locations: ['01A', '99A', 'SHP', 'MC']
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value?.toUpperCase()
    }))
  }

  return (
    <Context.Provider value={{ state, setState, handleChange, produceData }}>
      {props.children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
