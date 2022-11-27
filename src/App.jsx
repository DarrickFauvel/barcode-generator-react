import { useState } from 'react'

import Barcode from 'react-jsbarcode'
import Footer from './components/Footer'
import Header from './components/Header'
import LocationButtons from './components/LocationButtons'

function App() {
  const [state, setState] = useState({
    inputText: '',
    barcodeValue: '',
    location: '',
    subLocation: '',
    subLocationNumber: 1
  })

  const locations = ['01A', '99A', 'SHP', 'MC']

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value?.toUpperCase()
    }))
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   const { name, value } = e.target
  //   setState((prevState) => ({
  //     ...prevState,
  //     [name]: value
  //   }))
  // }

  const changeLocation = (e) => {
    const { name, textContent } = e.target

    setState((prevState) => ({ ...prevState, [name]: textContent }))
  }

  const renderSubLocationNumber = () => {
    if (state.subLocationNumber.length === 1) {
      return '00' + state.subLocationNumber
    } else if (state.subLocationNumber.length === 2) {
      return '0' + state.subLocationNumber
    }
  }

  return (
    <div className='App'>
      <Header />

      <LocationButtons
        state={state}
        locations={locations}
        changeLocation={changeLocation}
      />

      <section className='sublocation'>
        <input
          type='number'
          name='subLocationNumber'
          min='1'
          max='999'
          value={state.subLocationNumber}
          onChange={handleChange}
        />
      </section>

      <section className='parts'>
        <div className='part'>{state.location ? state.location : '01A'}</div>
        <div className='part'>{renderSubLocationNumber()}</div>
      </section>

      <form>
        <label htmlFor='textInput'>Enter text</label>
        <input
          type='text'
          id='textInput'
          value={`${state.location} ${state.subLocation}`}
          onChange={handleChange}
        />
        <button className='btn' type='submit'>
          GENERATE
        </button>
      </form>

      {/* {barcodeValue && <Barcode value={barcodeValue} />} */}

      <Footer />
    </div>
  )
}

export default App
