import React from 'react'
import Navbar from './Navbar'
import Main from './Main'
import Products from './Products'

const MainSection = () => {
  return (
    <div className='bg-primary rounded-2xl w-4/6 px-6 py-2 mt-6  h-fit  '>
        <Navbar/>
        <Main/>
        <Products/>
    </div>
  )
}

export default MainSection