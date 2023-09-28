import Link from 'next/link'
import React, { Fragment } from 'react'

const footerLinks = [
  {
    name: 'Quick Links',
    subItems: [
      {
        name: 'About us',
        link: '#',
      },
      {
        name: 'Facilities',
        link: '#',
      },
      {
        name: 'Contact Us',
        link: '#',
      },
      {
        name: 'Careers',
        link: '#',
      },
    ],
  },
  {
    name: 'Products',
    subItems: [
      {
        name: 'API',
        link: '/products/apis',
      },
      {
        name: 'Intermediates',
        link: '/products/intermediates',
      },
    ],
  },
]

const locationInfo = [
  {
    icon: '/icons/footer/pin.svg',
    text: 'IDA Industrial Area, Gandhi Nagar, Hyderabad',
  },
  {
    icon: '/icons/footer/call.svg',
    text: '+91 40 23075816',
  },
  {
    icon: '/icons/footer/mail.svg',
    text: 'info@virupaksha.com',
  },
]

const socials = [
  {
    icon: '/icons/footer/x.svg',
    link: 'https://x.com',
  },
  {
    icon: '/icons/footer/facebook.svg',
    link: 'https://facebook.com',
  },
  {
    icon: '/icons/footer/instagram.svg',
    link: 'https://instagram.com',
  },
  {
    icon: '/icons/footer/linkedin.svg',
    link: 'https://linkedin.com',
  },
  {
    icon: '/icons/footer/youtube.svg',
    link: 'https://youtube.com',
  },
]

const Footer = () => {
  return (
    <Fragment>
      <div className="bg-[#1C3F67] text-white lg:p-10 lg:px-20 p-5">
        <div className="grid lg:grid-cols-3 lg:gap-0 gap-7 lg:items-start">
          {/* Logo & Information */}
          <div className="">
            <img
              src="/icons/logo.svg"
              alt="brand logo"
              className="cursor-pointer"
            />
            <p className="text-white text-sm leading-6 font-thin mt-4">
              Having the highest quality is the best <br /> marketing strategy
              that can be ever <br /> followed.
            </p>
          </div>

          {/* Quick Links & Products */}
          <div className="grid grid-cols-2">
            {React.Children.toArray(
              footerLinks.map((item) => (
                <div className="flex flex-col gap-4">
                  <h1 className="text-base font-semibold">{item.name}</h1>
                  {React.Children.toArray(
                    item.subItems.map((x) => (
                      <Link href={x.link}>
                        <p className="text-sm text-white hover:underline cursor-pointer">
                          {x.name}
                        </p>
                      </Link>
                    )),
                  )}
                </div>
              )),
            )}
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col gap-4">
            <h1 className="text-base font-semibold">Get in Touch</h1>
            {React.Children.toArray(
              locationInfo.map(({ icon, text }) => (
                <div className="flex items-center gap-2">
                  <img src={icon} alt={icon} />
                  <p className="text-sm text-white">{text}</p>
                </div>
              )),
            )}

            <div className="flex items-center gap-4">
              {React.Children.toArray(
                socials.map(({ icon, link }) => (
                  <div>
                    <a href={link}>
                      <img
                        src={icon}
                        alt={icon}
                        className="cursor-pointer"
                      />
                    </a>
                  </div>
                )),
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#0F2946] p-5 w-full lg:px-20 px-5 flex lg:flex-row flex-col lg:justify-between lg:gap-0 gap-2 items-start lg:items-center">
        <p className="text-white font-thin lg:text-sm text-xs">
          Copyright &copy; 2023 Virupaksha. All Rights Reserved
        </p>
        <span className="text-white font-thin flex items-end gap-2">
          <p className="lg:text-sm text-xs">Made with ♥️ from</p>
          <img
            src="/icons/scube.svg"
            alt="scube"
            className="relative lg:-top-[6px] -top-1"
          />
        </span>
      </div>
    </Fragment>
  )
}

export default Footer
