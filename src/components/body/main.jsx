import React from 'react'
import Home_Img from "/home/mayank/foodine/src/images/HomeImage.png"

const Main = () => {
  return (
    <div className="w-full py-16 px-5 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">

        <div className="flex flex-col justify-center">
          <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">

            <h1 className="md:text-[90px]  sm:text-6xl text-8xl font-[Poppins] md:py-8 text-white ">
              Your Food On Your Table
            </h1>
            <ul className='md:flex md-items-center w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
              <button className="bg-gradient-to-r from-pink-800 to-pink-500 text-black font-bold text-lg py-2 px-6 rounded-3xl md:ml-8 hover:bg-indigo-400 duration-500 w-96 h-14">
                Learn More
              </button>
            </ul>
          </div>
        </div>
        <div className="max-w-[800px] mt-[-96px] w-96 h-screen mx-auto text-center flex flex-col justify-center">
          <img
            src={Home_Img}
            className="rounded-t-full rounded-b-full mr-8"
          />
        </div>
      </div>
    </div >
  )
}
export default Main
