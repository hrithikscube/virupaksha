import Cta from '@/components/Cta'
import Header from '@/components/Header'
import Marquee from 'react-fast-marquee'
import React, { Fragment, useState } from 'react'
import TextArea from '@/components/input/TextArea'
import TextInput from '@/components/input/TextInput'
import Footer from '@/components/Footer'
import ScaleAnimation from '@/components/animations/ScaleAnimation'

export const SectionTitle = ({ title, style }) => {
  return (
    <p
      className={`text-base uppercase font-semibold ${style ? style : 'text-primaryBlue'
        }`}
    >
      {title}
    </p>
  )
}

const cards = [
  {
    title: 'Regulatory Approvals',
    icon: '/icons/cards/settings.svg',
  },
  {
    title: 'Safe & Sustainable Operations',
    icon: '/icons/cards/paw.svg',
  },
  {
    title: 'Operational Excellence',
    icon: '/icons/cards/shield.svg',
  },
  {
    title: 'Manufacturing Capability',
    icon: '/icons/cards/manufacture.svg',
  },
]

const addressInfo1 = [
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

const addressInfo2 = [
  {
    title: 'Plot no 30 to 33 IDA Pashamylaram Patancheru, Sangareddy Dist.',
    icon: '/icons/addressPin.svg',
  },
  {
    title: 'Year of Commencement: 2010 Area: Ac.5.00',
    icon: '/icons/building.svg',
  },
  {
    title: 'Current Capacity: 300 KL',
    icon: '/icons/capacity.svg',
  },
]

const addressInfo3 = [
  {
    title: 'Plot no 100 (P2) & (P3), Gadwanthi vil, Humnabad, Bidar, Karnataka',
    icon: '/icons/addressPin.svg',
  },
  {
    title: 'Year of Commencement: 2019 Area: Ac.6.15',
    icon: '/icons/building.svg',
  },
  {
    title: 'Current Capacity: 40 KL',
    icon: '/icons/capacity.svg',
  },
]

const unitAddresses = [addressInfo1, addressInfo2, addressInfo3]

const UnitsTabs = () => {
  const [active, setActive] = useState(0)

  return (
    <Fragment>
      <div className="my-5">
        <div className="flex items-center border-b border-primaryBlue lg:w-[564px] w-full">
          {React.Children.toArray(
            ['Unit 1', 'Unit 2', 'Unit 3'].map((item, index) => (
              <button
                onClick={() => setActive(index)}
                className={`${active === index
                  ? 'bg-primaryBlue text-white transitions-all opacity-100 duration-500'
                  : 'bg-none text-primaryBlue opacity-50 transitions-all duration-500'
                  } text-sm lg:w-[188px] w-[112px] h-[46px] flex items-center justify-center`}
              >
                {item}
              </button>
            )),
          )}
        </div>
      </div>
      <div className="lg:w-[350px] mb-5">
        {React.Children.toArray(
          unitAddresses[active].map(({ icon, title }) => (
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

const certInfo = [
  {
    name: 'fda',
    icon: '/icons/certifications/fda.svg',
  },
  {
    name: 'edom',
    icon: '/icons/certifications/edom.svg',
  },
  {
    name: 'cofepris',
    icon: '/icons/certifications/cofepris.svg',
  },
  {
    name: 'iso1',
    icon: '/icons/certifications/iso1.svg',
  },
  {
    name: 'iso2',
    icon: '/icons/certifications/iso2.svg',
  },
  {
    name: 'iso3',
    icon: '/icons/certifications/iso3.svg',
  },
  {
    name: 'iso4',
    icon: '/icons/certifications/iso4.svg',
  },
  {
    name: 'iso5',
    icon: '/icons/certifications/iso5.svg',
  },
]

const Certifications = () => {
  return (
    <div>
      <p className="lg:text-xl text-lg font-semibold text-primaryBlue">
        Certifications
      </p>

      <div className="my-5">
        <Marquee>
          {React.Children.toArray(
            certInfo.map((item) => (
              <div className="mx-5">
                <img src={item.icon} alt={item.icon} />
              </div>
            )),
          )}
        </Marquee>
      </div>
    </div>
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
            src="/images/heroBg.webp"
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

          <div className="grid lg:grid-cols-3 md:grid-cols-3 absolute bottom-0 w-full">
            <div className="bg-[#333186] p-7 lg:h-[289px] hidden lg:flex md:flex flex-col items-start justify-center">
              <div className="flex items-start gap-5">
                <img
                  src="/shapes/chemistry1.svg"
                  alt="shape1"
                  className="lg:w-20 lg:h-20 w-10 h-10"
                />
                <div className="lg:flex flex-col gap-2 items-start justify-center">
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

            <div className="bg-[#232E69] p-7 lg:h-[289px] hidden lg:flex md:flex flex-col items-start justify-center">
              <div className="flex items-start gap-5">
                <img
                  src="/shapes/chemistry2.svg"
                  alt="shape2"
                  className="lg:w-20 lg:h-20 w-10 h-10"
                />
                <div className="lg:flex flex-col gap-2 items-start justify-center">
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
          <div className="flex lg:flex-row md:flex-row flex-col-reverse items-start w-full">
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

              <div className="grid grid-cols-2 lg:gap-5 gap-4">
                {React.Children.toArray(
                  statsInfo.map((item) => (
                    <div className="flex items-center gap-2">
                      <img src={item.icon} alt={item.icon} />
                      <div>
                        <p className="text-sm text-gray-400">{item.title}</p>
                        <p className="text-lg font-semibold text-primaryBlue">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )),
                )}
              </div>

              <div className="relative lg:left-[100px] lg:block hidden">
                <Cta variant="outlined">Know More</Cta>
              </div>

              <div className="lg:hidden flex items-center justify-center">
                <Cta variant="outlined">Know More</Cta>
              </div>


            </div>

            <div className="who-we-are"></div>
          </div>
        </div>

        {/* Why choose us */}
        <div className="w-full bg-white lg:p-20 p-5 md:hidden block">
          <div className="why-choose-us w-full flex lg:flex-row flex-col lg:justify-between justify-center items-center">
            <div className="w-[55%] p-5 lg:block hidden">
              <div className="w-full rounded-lg  h-full"></div>
            </div>

            <div className="lg:p-10 p-5 flex flex-col gap-3 w-full lg:w-[45%]">
              <SectionTitle title="Why Choose us" style="text-[#4EE287]" />
              <h2 className="lg:text-xl text-lg font-semibold text-white">
                Delivering Excellence in <br /> Pharmaceutical Manufacturing
              </h2>
              <p className="text-white text-base font-thin">
                Trust us for pharma excellence: quality, expertise, customer-
                <br />
                centricity.
              </p>

              <div className="choose-card w-full lg:p-10 p-5 rounded-lg lg:flex hidden flex-col items-start justify-center">
                <p className="text-white font-medium lg:text-xl text-lg">
                  Regulatory Approvals
                </p>
                <p className="font-thin text-base text-white">
                  Following the ICH guidelines have become bread and butter for
                  our employees.
                </p>
              </div>

              <div className="lg:hidden flex flex-col items-start justify-start">
                <div className="grid grid-cols-2 gap-5 mt-5">
                  {React.Children.toArray(
                    cards.map((item) => (
                      <div className="choose-card p-5 flex items-center gap-4 w-full h-[140px] flex-col justify-center">
                        <img src={item.icon} alt={item.icon} />
                        <p className="text-center text-white text-xs font-medium">
                          {item.title}
                        </p>
                      </div>
                    )),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why choose us animation frame */}
        <div className='md:block hidden'>
          <ScaleAnimation />
        </div>

        {/* Unit Details */}
        <div className="flex lg:flex-row flex-col items-start w-full lg:h-[646px]">
          {/* Tabs & Info */}
          <div className="lg:w-[55%] w-full lg:p-20 p-5 bg-paleGreen h-full">
            <p className="text-base uppercase font-semibold text-primaryBlue">
              Unit details
            </p>
            <p className="lg:text-xl text-lg font-semibold text-primaryBlue">
              Hubs of Quality Production
            </p>

            <UnitsTabs />

            <Certifications />
          </div>

          {/* Contact Form */}
          <div className="lg:w-[45%] w-full lg:p-20 p-5 bg-grayLight h-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-2 lg:w-[417px] w-full">
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
                <Cta variant="contained">Submit</Cta>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  )
}

export default index
