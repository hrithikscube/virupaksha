import React from 'react'

const Cta = (props) => {
  return (
    <button onClick={props.onClick} className="know-more-btn flex items-center justify-center text-white text-sm font-medium capitalize w-[156px] h-[47px]">
      {props.children}
    </button>
  )
}

export default Cta
