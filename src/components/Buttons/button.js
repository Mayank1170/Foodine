import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-gradient-to-r from-pink-500 to-pink-800 text-black font-bold py-2 px-6 rounded-3xl md:ml-8 hover:bg-indigo-400 duration-500 '>
      {props.children}
    </button>
  )
}

export default Button
