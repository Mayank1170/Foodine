import React from 'react'
import Image_logo from "/home/mayank/foodine/src/images/Foodine.png";
import Button from '../Buttons/button';
const Header = () => {
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-[#101728] py-4 md:px-10 px-7'>
        <div className='font-bold text-4xl cursor-pointer flex item-center font- text-white'>
          <span className='text-3xl text-indigo-600 mr-2 pt-1'>
            <img
              src={Image_logo}
              className="rounded-full w-[90px] "
            />
          </span>
          <div className='pt-7 ml-[-9px]'>
            Foodine
          </div>
        </div>
        <ul className='md:flex md-items-center'>
          <Button>
          Login/SignUp
          </Button>
        </ul>

      </div>
    </div>
  )
}

export default Header
