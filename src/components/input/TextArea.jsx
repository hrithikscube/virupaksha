import React from 'react'

const TextArea = ({ label, name, value, handleChange, rows = 4 }) => {
  return (
    <div className="w-full">
      <textarea
        rows={rows}
        name={name}
        value={value}
        placeholder={label}
        onChange={handleChange}
        className="text-input p-3 resize-none w-full outline-none text-sm placeholder:text-[#808080]"
      />
    </div>
  )
}

export default TextArea
