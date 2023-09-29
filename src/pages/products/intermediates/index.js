import ContactCard from '@/components/ContactCard'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { Fragment } from 'react'

const Tab = () => {
  return (
    <div className="why-choose-us p-5 w-full grid grid-cols-2">
      <p className="text-base font-medium text-white">Product Information</p>
      <p className="lg:text-lg text-base font-medium text-white">CAS No.</p>
    </div>
  )
}

const detailsList = [
  {
    name: '3-(1-Piperazinyl)-1,2-benzisothiazole',
    cas_no: '83799-24-0',
  },
]

const Api = () => {
  return (
    <Fragment>
      <Header />

      <div className="relative">
        <div className="">
          <img
            src="/images/intermediates.webp"
            alt="intermediates"
            className="w-full h-[527px] object-cover lg:object-fit"
          />
        </div>

        <div className="relative -top-[270px] lg:px-0 px-5">
          <div className="flex flex-col gap-3 items-center justify-center text-center">
            <p className="text-[#232E69] lg:text-xl text-lg font-semibold">
              Intermediates
            </p>
            <p className="text-base font-medium text-[#232E69]">
              *None of the below products will be supplied to the countries in
              which these could <br /> conflict with the existing patents. The
              final responsibility lies exclusively with the buyer.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:px-10 px-5 ">
        <p className="lg:text-lg text-base font-semibold text-primaryBlue text-center my-5">
          Anti Depressant/ Anti Psychotic
        </p>

        <div className="border-2 border-[#F7F7F7] rounded-[20px] p-5 flex flex-col">
          <Tab />

          {React.Children.toArray(
            [11, 2, 1, 1, 2, 1].map((item) => (
              <div className="grid grid-cols-2 lg:gap-10 py-2 px-5 mt-3">
                <div className=''>
                  <p className="text-base font-medium text-primaryBlue">
                    {detailsList[0].name}
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <h1 className="text-base font-medium text-primaryBlue">
                    {detailsList[0].cas_no}
                  </h1>
                  <button className="border border-primaryBlue text-xs lg:text-sm font-medium text-primaryBlue w-[110px] lg:w-[145px] rounded-lg h-[42px] lg:h-[47px]">
                    View
                  </button>

                  <button className="text-white  text-xs lg:text-sm font-medium bg-primaryBlue w-[110px] lg:w-[145px] rounded-lg h-[42px] lg:h-[47px]">
                    Explore Now
                  </button>
                </div>
              </div>
            )),
          )}
        </div>
      </div>

      {/* Contact Card */}
      <ContactCard />

      <Footer />
    </Fragment>
  )
}

export default Api
