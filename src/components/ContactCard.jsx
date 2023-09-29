import React from 'react'
import Cta from './Cta'

const ContactCard = () => {
  return (
    <div className="lg:p-10 my-5 lg:my-10 p-5 lg:w-[80%] w-full m-auto">
      <div className="why-choose-us lg:p-10 p-5 flex flex-col items-center justify-center gap-4 h-[40vh]">
        <h2 className="text-center text-white lg:text-2xl text-lg font-medium">
          See how we are raising the benchmark in the <br className='lg:block hidden' /> pharmaceutical
          industry.
        </h2>

        <Cta>Contact us</Cta>
      </div>
    </div>
  )
}

export default ContactCard
