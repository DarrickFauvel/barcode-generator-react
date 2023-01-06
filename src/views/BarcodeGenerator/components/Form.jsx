import { useContext } from 'react'
import { Context } from '../../../context'

const Form = () => {
  const { state, setState, handleChange } = useContext(Context)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!textInput) {
      return
    }
    setState((prevState) => ({
      ...prevState,
      barcodeValue: state.textInput
    }))
  }

  return (
    <form id='form' onSubmit={handleSubmit}>
      <div className='control-group'>
        <input
          type='text'
          id='textInput'
          name='textInput'
          value={state.textInput}
          onChange={handleChange}
          placeholder='Enter location identifier...'
          autoComplete='off'
        />
        <label htmlFor='textInput'>
          <span>example:</span> 01A035M02, 99B106A05, etc.
        </label>
      </div>
      <button className='btn' type='submit'>
        GENERATE
      </button>
    </form>
  )
}

export default Form
