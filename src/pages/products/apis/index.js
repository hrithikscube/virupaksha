import ContactCard from '@/components/ContactCard'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { Fragment } from 'react'

const Api = () => {
  const detailsList = [
    {
      name: 'Fexofenadine HCl',
      status: 'DMF',
      cas_no: '83799-24-0',
    },
  ]

  return (
    <Fragment>
      <Header />

      <div className="relative">
        <div className="">
          <img
            src="/images/api.webp"
            alt="about-us-image"
            className="w-full h-[527px] object-cover lg:object-fit"
          />
        </div>

        <div className="relative -top-[270px] lg:px-0 px-5">
          <div className="flex flex-col gap-3 items-center justify-center text-center">
            <p className="text-[#232E69] lg:text-xl text-lg font-semibold">
              Active Pharmaceutical Ingredients (APIs)
            </p>
            <p className="text-base font-medium text-[#232E69]">
              *None of the below products will be supplied to the countries in
              which these could <br /> conflict with the existing patents. The
              final responsibility lies exclusively with the buyer.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:px-10 px-5 -mt-40 lg:-mt-20">
        <div className="why-choose-us p-5 mt-5">
          <div className="flex flex-row items-center justify-center lg:justify-between gap-4">
            {React.Children.toArray(
              [
                'Sl.No',
                'Product Name',
                'Status',
                'CAS No.',
                'Action',
              ].map((item, index) => (
                <p className="text-base lg:block hidden font-thin text-white">
                  {item}
                </p>
              )),
            )}

            <p className="text-base font-thin text-white lg:hidden block">
              Product Name
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-5">
          {React.Children.toArray(
            [1, 2, 2, 2, 2, 3, 3, 3, 5, 6, 2, 2, 3, 4, 2, 1, 2, 2, 1, 2].map(
              (item, index) => (
                <div className="flex lg:flex-row items-center justify-between text-center gap-4 text-primaryBlue text-base font-semibold border-b-2 border-[#DDE8F3] py-2">
                  <p className="text-sm lg:block hidden">{index + 1}.</p>
                  <p className="text-sm ">{detailsList[0].name}</p>
                  <p className="text-sm lg:block hidden">
                    {detailsList[0].status}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="w-[150px] text-sm lg:block hidden">
                      {detailsList[0].cas_no}
                    </p>

                    <button className="border border-primaryBlue text-xs lg:text-sm font-medium text-primaryBlue w-[110px] lg:w-[145px] rounded-lg h-[42px] lg:h-[47px]">
                      View
                    </button>

                    <button className="text-white  text-xs lg:text-sm font-medium bg-primaryBlue w-[110px] lg:w-[145px] rounded-lg h-[42px] lg:h-[47px]">
                      Explore Now
                    </button>
                  </div>
                </div>
              ),
            ),
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
