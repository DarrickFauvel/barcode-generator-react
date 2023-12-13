import { useStore } from "@nanostores/react"
import { generatorFormData } from "../../../../stores/barcodeGeneratorStore"

import classes from "./form.module.css"

const Form = () => {
  const $generatorFormData = useStore(generatorFormData)

  const handleChange = (e) => {
    const { name, value } = e.target
    generatorFormData.set({
      ...$generatorFormData,
      [name]: value?.toUpperCase(),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!textInput) {
      return
    }
    generatorFormData.set({
      ...$generatorFormData,
      barcodeValue: $generatorFormData.textInput,
    })
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className={classes.controlGroup}>
        <input
          type="search"
          id="textInput"
          name="textInput"
          value={$generatorFormData.textInput}
          onChange={handleChange}
          placeholder="Enter location identifier..."
          autoComplete="off"
        />
        <label htmlFor="textInput">
          <span>example:</span> 01A035M02, 99B106A05, etc.
        </label>
      </div>
      <button className="btn" type="submit">
        GENERATE
      </button>
    </form>
  )
}

export default Form
