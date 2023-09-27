import Header from '@/components/Header'
import React, { Fragment } from 'react'
import { SectionTitle } from '..'


const cards = [
    {
        title: 'Regulatory Approvals',
        icon: '/icons/about-us/gear.svg'
    },
    {
        title: 'Vertically Integrated',
        icon: '/icons/about-us/paw.svg'
    },
    {
        title: 'In House Manufacturing',
        icon: '/icons/about-us/garage.svg'
    },
    {
        title: 'Expertise in Handling',
        icon: '/icons/about-us/star.svg'
    },
]

const AboutUs = () => {

    return (
        <Fragment>

            <Header />

            <div className='relative'>
                <div className='about-us-overlay'>
                    <img src="/images/about-us.webp" alt="about-us-image" className='w-full h-[527px] object-cover' />
                </div>

                <div className='relative -top-[270px] lg:px-0 px-5'>
                    <div className='flex items-center justify-center text-center'>
                        <p className='text-inkBlue lg:text-xl text-lg font-semibold'>Innovating Chemical Manufacturing for a <br className='lg:block hidden' /> Sustainable Future</p>
                    </div>
                </div>
            </div>


            {/* Our Story */}

            <div className='lg:p-10 lg:px-20 p-5 grid lg:grid-cols-2 items-center'>
                <div>
                    <img src="/images/globe.webp" alt="globe" className='' />
                </div>

                <div className='flex flex-col gap-2'>
                    <SectionTitle title="Our Story" style="text-[#4EE287]" />
                    <p className="lg:text-xl text-lg font-semibold text-primaryBlue">Delivering Excellence in <br /> Pharmaceutical Manufacturing</p>

                    <p className='text-base font-thin text-primaryBlue leading-7'>Virupaksha was established in 2003, with headquarters in hyderabad, India by G. Chandra Mouliswar Reddy. His vision was to deliver quality products without compromising on the quality of his employees life. Through his sheer perseveranc, he expanded Virupaksha from a single manufacturing unit to four units with over 1000+ employees. Today we take pride in stating that we have a large customer base of over 300 customers with a presence in over 70+ countries.</p>

                    <p className='text-base font-thin text-primaryBlue leading-7'>Virupaksha, today has 4 manufacturing units at Kazipally, Pashamylaram, Humnabad & Gandhi Nagar. At all our units, a lot of emphases is laid on maintaining high standards in quality. This is further confirmed by the fact that our plant is FDA Certified.</p>
                </div>

            </div>

            {/* Our Expertise */}
            <div className='lg:p-10 lg:px-20 p-5'>

                <div className='why-choose-us w-full lg:h-[450px] flex flex-col text-center gap-3 items-center lg:p-0 p-5 justify-center'>
                    <SectionTitle title="Our Expertise" style="text-[#4EE287]" />
                    <p className='lg:text-2xl text-lg font-semibold text-white'>Unleashing the <br /> Power of Expertise</p>

                    <div className='grid lg:grid-cols-4 gap-4'>

                        {React.Children.toArray(cards.map(item => (
                            <div className='choose-card rounded-lg p-5 flex h-[170px] flex-col items-center justify-center gap-3'>
                                <img src={item.icon} alt={item.icon} className='w-[40px] h-[40px]' />
                                <p className='text-base font-medium text-white'>{item.title}</p>
                            </div>
                        )))}
                    </div>

                </div>

            </div>

            {/* Our Strength */}

            <div className='lg:p-10 lg:px-20 p-5 h-screen bg-[#C0FFD8]'>

                <div className='flex flex-col items-center  justify-center gap-3'>
                <SectionTitle title="Our Strength" style="text-inkBlue" />


                </div>


            </div>


        </Fragment>
    )
}

export default AboutUs