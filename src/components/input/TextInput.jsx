import React from 'react'

const TextInput = ({ label, name, value, handleChange }) => {
  return (
    <div className="w-full">
      <input
        name={name}
        value={value}
        placeholder={label}
        onChange={handleChange}
        className="text-input p-3 w-full outline-none text-base placeholder:text-[#808080]"
      />
    </div>
  )
}

export default TextInput
