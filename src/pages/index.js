import Cta from '@/components/Cta'
import Header from '@/components/Header'
import React, { Fragment } from 'react'

const statsInfo = [
  {
    title: 'Year Founded',
    icon: '/icons/stats/rocket.svg',
    description: '2003',
  },
  {
    title: 'Team',
    icon: '/icons/stats/team.svg',
    description: '1200+',
  },
  {
    title: 'Countries',
    icon: '/icons/stats/globe.svg',
    description: '100+',
  },
  {
    title: 'Customers',
    icon: '/icons/stats/customers.svg',
    description: '300+',
  },
]

const index = () => {
  return (
    <Fragment>
      <Header />
      <div>
        {/* Hero section */}
        <div className="w-full h-screen flex flex-col relative">
          <img
            src="/images/heroBg.png"
            alt="hero background"
            className="z-5 object-cover h-full"
          />

          <div className="absolute top-1/3 lg:left-20 z-10 mx-5">
            <p className="lg:text-2xl text-lg font-semibold lg:w-[900px] leading-7 text-primaryBlue">
              {' '}
              We, at <span className="text-vomitGreen">Virupaksha</span> strive
              constantly to supply the highest quality products to our customers
              with sustainable best practices in all our operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 absolute bottom-0 w-full">
            <div className="bg-[#333186] p-7 lg:h-[289px] hidden lg:flex flex-col items-start justify-center">
              <div className="flex items-start gap-5">
                <img src="/shapes/chemistry1.svg" alt="shape1" />
                <div className="lg:flex hidden flex-col gap-2 items-start justify-center">
                  <p className="text-vomitGreen uppercase text-sm font-medium">
                    Active Pharmaceutical Ingredients
                  </p>
                  <p className="text-base font-thin text-white">
                    Active substances that provide <br /> pharmacological
                    activity in <br /> medications.
                  </p>

                  <Cta>Know more</Cta>
                </div>
              </div>
            </div>

            <div className="bg-[#232E69] p-7 lg:h-[289px] hidden lg:flex flex-col items-start justify-center">
              <div className="flex items-start gap-5">
                <img src="/shapes/chemistry2.svg" alt="shape2" />
                <div className="lg:flex hidden flex-col gap-2 items-start justify-center">
                  <p className="text-vomitGreen uppercase text-sm font-medium">
                    Intermediates
                  </p>
                  <p className="text-base font-thin text-white">
                    Pharmaceutical intermediates play <br /> a crucial role in
                    the production of <br /> life-saving medications.
                  </p>

                  <Cta>Know more</Cta>
                </div>
              </div>
            </div>

            <div className="blur-card-bg lg:p-7 p-4 lg:h-[289px] flex flex-col gap-1 lg:gap-2 items-start justify-center">
              <p className="text-primaryBlue uppercase text-sm font-medium">
                What we do
              </p>
              <p className="lg:text-xl text-lg font-semibold text-primaryBlue">
                Sustainability & Quality Products
              </p>
              <div className="">
                <p className="text-base font-thin text-primaryBlue ">
                  We make high-quality APIs and intermediates, which are the
                  backbone of the pharmaceutical industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Who we are */}
        <div className="w-full bg-paleGreen">
          <div className="flex lg:flex-row flex-col-reverse items-start w-full">
            <div className="lg:w-1/2 flex flex-col gap-2 lg:p-20 p-5">
              <p className="text-base uppercase font-medium text-primaryBlue">
                who are we
              </p>
              <p className="lg:text-xl text-lg font-semibold text-primaryBlue">
                Empowering Lives with Sustainability <br /> & Quality
              </p>
              <p className="text-base font-thin text-primaryBlue">
                We at Virupaksha Organics Ltd. are committed to protecting{' '}
                <br /> what matters – People, Planet , Prosperity, Peace &{' '}
                <br /> Partnership.
              </p>

              <div className="grid grid-cols-2">
                {React.Children.toArray(
                  statsInfo.map((item) => (
                    <div className="flex items-center gap-2">
                      <img src={item.icon} alt={item.icon} />
                      <div>
                        <p className="text-xs text-gray-400">{item.title}</p>
                        <p className="text-base font-semibold text-primaryBlue">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )),
                )}
              </div>
            </div>

            <div className='who-we-are'> 
              {/* <img src="/images/who-we-are.png" alt="who-we-are" /> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default index
