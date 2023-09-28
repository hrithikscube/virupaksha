import Cta from '@/components/Cta'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { Fragment } from 'react'

const Api = () => {

  const detailsList = [
    {
      name: 'Fexofenadine HCl',
      status: 'DMF',
      cas_no: '83799-24-0'
    },
  ]

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
          <div className='grid grid-cols-4 items-center gap-10'>
            {React.Children.toArray(["Sl.No", "Product Name", "Status", "CAS No."].map((item, index) => (
              <p className='text-base font-thin text-white'>
                {item}
              </p>
            )))}
          </div>
        </div>

        <div className='lg:px-10 p-5 flex flex-col gap-3'>
          {React.Children.toArray([1, 2, 2, 2, 2, 3, 3, 3, 5, 6, 2, 2, 3, 4, 2, 1, 2, 2, 1, 2].map((item, index) => (
            <div className='grid grid-cols-4 items-center gap-10 text-primaryBlue text-base font-semibold border-b-2 border-[#DDE8F3] py-2'>
              <p>{index + 1}.</p>
              <p>{detailsList[0].name}</p>
              <p>{detailsList[0].status}</p>
              <div className='flex items-center gap-2'>
                <span className='w-[150px]'>{detailsList[0].cas_no}</span>
                <Cta variant="outlined" >View</Cta>
                <Cta variant="contained">Enquire Now</Cta>
              </div>
            </div>
          )))}
        </div>

      </div>


      <Footer />
    </Fragment>
  )
}

export default Api
