import React from 'react'
import RM1 from '../assets/RM1.png'
import RM2 from '../assets/RM2.png'
import broken from '../assets/broken.png'

function Roadmap() {
  return (
    <div className='flex flex-col justify-center items-center p-2'>
      
            <div className="topic flex relative">
            <p className='snackid text-6xl lg:text-9xl     text-center mb-10 lg:mr-24 '>ROADMAP</p>
            <img src={broken} alt="" className='lg:w-40 mr-3 absolute lg:right-1 right-[-60px] w-24 ' />
            </div>
            <img src={RM1} alt="" className='w-[900px] mr-3 ' />
            <img src={RM2} alt="" className='w-[900px] mr-3 ' />

    </div>
  )
}

export default Roadmap