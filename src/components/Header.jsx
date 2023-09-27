import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
  const menuItems = [
    {
      name: 'HOME',
      link: '/',
    },
    {
      name: 'ABOUT US',
      link: '/about-us',
    },
    {
      name: 'PRODUCTS',
      link: '/',
    },
    {
      name: 'SUSTAINABILITY & ESG',
      link: '/',
    },
    {
      name: 'CONTACT',
      link: '/',
    },
  ]

  const [showMenu, setShowMenu] = useState(false)
  console.log('showMenu', showMenu)
  return (
    <div className="w-full lg:p-6 p-5 fixed z-40">
      <div className="flex items-center justify-between lg:p-5 p-4 m-auto header-background lg:px-7">
        <img src="/icons/logo.svg" alt="virupaksha" className="" />

        <div className="lg:flex hidden items-center gap-10">
          {React.Children.toArray(
            menuItems.map((item) => (
              <Link href={item.link}>
                <p className="text-base text-white hover:text-vomitGreen cursor-pointer">
                  {item.name}
                </p>
              </Link>
            )),
          )}
        </div>

        <div className="lg:hidden block">
          <img
            onClick={() => setShowMenu(!showMenu)}
            src="/icons/menuIcon.svg"
            alt="menuIcon"
            className=" cursor-pointer w-8 h-8"
          />
        </div>
      </div>

      {showMenu && (
          <div className="w-full relative -top-3 z-20">
            <div className="bg-primaryBlue rounded-bl-xl rounded-br-xl w-full p-5">
              <div className="flex flex-col gap-4">
                {React.Children.toArray(
                  menuItems.map((item) => (
                    <Link href={item.link}>
                      <p className="text-base text-white hover:text-vomitGreen cursor-pointer">
                        {item.name}
                      </p>
                    </Link>
                  )),
                )}
              </div>
            </div>
          </div>
      )}
    </div>
  )
}

export default Header
