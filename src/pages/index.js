import Cta from '@/components/Cta'
import Header from '@/components/Header'
import TextArea from '@/components/input/TextArea'
import TextInput from '@/components/input/TextInput'
import React, { Fragment, useState } from 'react'

const addressInfo = [
  {
    title: 'Sy.No.10, Gaddapotharam Village, Jinnaram Mandal, Sangareddy Dist.',
    icon: '/icons/addressPin.svg',
  },
  {
    title: 'Year of Commencement: 2003 Area: Ac.6.15',
    icon: '/icons/building.svg',
  },
  {
    title: 'Current Capacity: 400 KL',
    icon: '/icons/capacity.svg',
  },
]

const UnitsTabs = () => {
  const [active, setActive] = useState('Unit 1')

  return (
    <Fragment>
      <div className='my-5'> 
        <div className="flex items-center border-b border-primaryBlue lg:w-[564px] w-[336px]">
          {React.Children.toArray(
            ['Unit 1', 'Unit 2', 'Unit 3'].map((item) => (
              <button
                onClick={() => setActive(item)}
                className={`${
                  active === item
                    ? 'bg-primaryBlue text-white'
                    : 'bg-none text-primaryBlue opacity-[0.5]'
                } text-sm lg:w-[188px] w-[112px] h-[46px] flex items-center justify-center`}
              >
                {item}
              </button>
            )),
          )}
        </div>
      </div>
      <div className="lg:w-[350px]">
        {React.Children.toArray(
          addressInfo.map(({ icon, title }) => (
            <div className="flex items-center gap-4">
              <img src={icon} />
              <p className="text-primaryBlue text-base font-thin">{title}</p>
            </div>
          )),
        )}
      </div>
    </Fragment>
  )
}

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
            <div className="lg:w-1/2 m-auto flex flex-col gap-2 lg:p-20 p-5 items-start justify-start">
              <p className="text-base uppercase font-semibold text-primaryBlue">
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

              <div className="grid grid-cols-2 gap-5">
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

              <div className="relative lg:left-[100px]">
                <Cta variant="contained">Know More</Cta>
              </div>
            </div>

            <div className="who-we-are"></div>
          </div>
        </div>

        {/* Why choose us */}
        <div className="w-full bg-white lg:p-20 p-5">
          <div className="why-choose-us w-full h-[574px]" />
        </div>

        {/* Unit Details */}
        <div className="flex lg:flex-row flex-col items-start w-full h-[646px]">
          {/* Tabs & Info */}
          <div className="lg:w-[55%] w-full lg:p-20 p-10 bg-paleGreen h-full">
            <p className="text-base uppercase font-semibold text-primaryBlue">
              Unit details
            </p>
            <p className="lg:text-xl text-lg font-semibold text-primaryBlue">
              Hubs of Quality Production
            </p>

            <UnitsTabs />

            <p className="lg:text-xl text-lg font-semibold text-primaryBlue">
              Certifications
            </p>
          </div>

          {/* Contact Form */}
          <div className="lg:w-[45%] w-full lg:p-20 p-10 bg-grayLight h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2 lg:w-[417px]">
              <h2 className="text-primaryBlue lg:text-2xl text-lg font-semibold">
                For Enquiry - Please Contact Us
              </h2>
              <p className="text-base lg:text-lg text-gray-500 font-thin">
                Get in touch by writing to us
              </p>

              <div className="flex flex-col gap-4 w-full">
                <TextInput label="Your Name*" />
                <TextInput label="Email ID*" />
                <TextInput label="Contact Number*" />
                <TextArea label="Write a message*" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default index
