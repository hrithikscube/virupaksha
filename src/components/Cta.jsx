import React, { Fragment } from 'react'

const Cta = (props) => {
  return (
    <Fragment>
      {props.variant === 'contained' ? (
        <button
          onClick={props.onClick}
          className="contained-btn flex items-center justify-center text-primaryBlue text-sm font-medium capitalize w-[156px] h-[47px]"
        >
          {props.children}
        </button>
      ) : (
        <button
          onClick={props.onClick}
          className="know-more-btn flex items-center justify-center text-white text-sm font-medium capitalize w-[156px] h-[47px]"
        >
          {props.children}
        </button>
      )}
    </Fragment>
  )
}

export default Cta
