import React from 'react'

const Header = () => {
  const menuItems = [
    {
      name: 'HOME',
    },
    {
      name: 'ABOUT US',
    },
    {
      name: 'PRODUCTS',
    },
    {
      name: 'SUSTAINABILITY & ESG',
    },
    {
      name: 'CONTACT',
    },
  ]

  return (
    <div className="w-full lg:p-10 p-5 fixed z-40">
      <div className="flex items-center justify-between lg:p-5 p-4 m-auto header-background lg:px-7">
        <img src="/icons/logo.svg" alt="virupaksha" className='' />

        <div className="lg:flex hidden items-center gap-10">
          {React.Children.toArray(
            menuItems.map((item) => (
              <p className="text-base text-white">{item.name}</p>
            )),
          )}
        </div>

        <div className='lg:hidden block'>
          <img
            src="/icons/menuIcon.svg"
            alt="menuIcon"
            className=" cursor-pointer w-8 h-8"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
