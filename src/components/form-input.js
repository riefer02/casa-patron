import React, { useState } from "react"

const Input = ({ name, label, placeholder, type, onBlur, error }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [isValidated, setIsValidated] = useState(false)

  const handleChange = event => {
    setInputValue(event.target.value)
  }

  const handleBlur = () => {
    if (!isValidated) {
      setIsValidated(true)
    }
    if (inputValue === "") {
      console.log(`${name} cannot be empty`)
    }
    onBlur()
  }

  return (
    <div className="flex flex-col items-center">
      <label className="text-left leading-loose font-medium text-grey-neutral py-2 w-full">{label}</label>
      <input
        className={`bg-white focus:border-tertiary focus:outline-none border shadow-md border-secondary rounded-lg py-2 px-4 block w-full appearance-none leading-normal ${
          error && !isFocused ? "border-tertiary" : ""
        } ${!error && isFocused ? "border-tertiary" : ""}`}
        type={type}
        name={name}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={e => handleBlur(e)}
        onChange={e => handleChange(e)}
        value={inputValue}
      />
      {error && !isFocused && <p className="text-tertiary">{error}</p>}
    </div>
  )
}

export default Input
