import React from 'react'
import Rando from '../assets/rando.png'
import Buykekai from '../assets/buykekai.png'


function RandomPic() {
  return (
    <div className='overflow-hidden flex flex-col justify-center items-center '>
       <img src={Rando} alt="" className='max-w-[600px] lg:max-w-[2000px]  ' />
       <img src={Buykekai} alt="" className='w-32 lg:w-52 ' />

    </div>
  )
}

export default RandomPic