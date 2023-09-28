import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { Fragment } from 'react'

const Api = () => {
  return (
    <Fragment>
      <Header />

      <div className="relative">
        <div className="about-us-overlay">
          <img
            src="/images/api.webp"
            alt="about-us-image"
            className="w-full h-[527px] object-fit"
          />
        </div>

        <div className="relative -top-[270px] lg:px-0 px-5">
          <div className="flex flex-col gap-3 items-center justify-center text-center">
            <p className="text-[#232E69] lg:text-xl text-lg font-semibold">
              Active Pharmaceutical Ingredients (APIs)
            </p>
            <p className='text-base font-medium text-[#232E69]'>
              *None of the below products will be supplied to the countries in which these could <br /> conflict with the existing patents. The final responsibility lies exclusively with the buyer.
            </p>
          </div>
        </div>
        
      </div>

      <div className='w-full lg:p-10 p-5 -mt-20'>

        <div className='why-choose-us p-5 lg:px-10'>

        </div>

      </div>


      <Footer />
    </Fragment>
  )
}

export default Api
