import React, { useState, useEffect, useRef } from "react"
import { camelToTitleCase } from "../utils/helpers"

const Input = ({
  name,
  label,
  placeholder,
  type,
  onBlur,
  error,
  value,
  onChange,
  required = false,
}) => {
  const ref = useRef()
  const [isFocused, setFocus] = useState(false)
  const [inputValue, setInputValue] = useState(value || "")
  const [isValidated, setIsValidated] = useState(false)

  const handleChange = event => {
    setInputValue(event.target.value)
    onChange(event)
  }

  const handleBlur = e => {
    if (!isValidated) {
      setIsValidated(true)
    }
    if (inputValue === "") {
      console.log(`${name} cannot be empty`)
    }

    setFocus(false)
    if (required) onBlur(e)
  }

  useEffect(() => {
    if (ref.current) {
      if (document.hasFocus() && ref.current.contains(document.activeElement)) {
        setFocus(true)
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <label className="text-left leading-loose font-medium text-grey-neutral py-2 w-full">
        {label}
      </label>
      <input
        className={`bg-white focus:border-tertiary focus:outline-none border shadow-md border-grey-neutral rounded-lg py-2 px-4 block w-full appearance-none leading-normal ${
          error && !isFocused ? "!border-tertiary" : ""
        } ${!error && isFocused ? "!border-secondary" : ""}
        ${isFocused ? "!border-secondary" : ""}`}
        type={type}
        name={name}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
      />
      <div className="p-2 h-8">
        {error && !isFocused && (
          <p className="text-tertiary">{camelToTitleCase(error)}</p>
        )}
      </div>
    </div>
  )
}

export default Input
