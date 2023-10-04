import React from 'react'
import Cta from './Cta'

const Searchbar = ({ name, value, placeholder, handleChange, onSubmit }) => {
    return (
        <div className='lg:w-1/2 w-full bg-[#fcfcfc] shadow-lg rounded-lg m-auto relative border border-[#f2f2f2] lg:px-0 px-5'>

            <img src="/icons/search.svg" alt="search" className='absolute top-5 left-3 w-[24px] h-[24px]' />

            <input name={name} value={value} placeholder={placeholder} onChange={handleChange} className='p-5 w-full outline-none bg-transparent border-none pl-12 text-base' />

            <Cta onClick={onSubmit} variant="contained" style="absolute right-2 top-2 w-[132px]" >
                Search
            </Cta>

        </div>
    )
}

export default Searchbar