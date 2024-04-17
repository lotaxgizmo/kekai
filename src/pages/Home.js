import React from 'react'
import Hero from '../assets/kekailogo.png'
import Gunsmall from '../assets/gunsmallmob.png'
import Buymob from '../assets/buykekaimob.png'
import Never from '../assets/never.png'
import Botpack from '../assets/botpack.png'
import Gunbig from '../assets/gunbig.png'
import Bushes from '../assets/bushes.svg'
import Mainbuykekai from '../assets/mainbuykekai.svg'



function Home() {
  return (
    <div className='hero flex flex-col justify-center items-center overflow-hidden relative'>
      
      <img src={Hero} alt="" className='w-96 mt-20' />
      <p className='snackid text-7xl lg:text-[300px] lg:mt-[-69px]'>KEKAWAP</p>
      <p className='snackid text-xl'>Biggest cook you ever touched</p>
      <img src={Gunsmall} alt="" className='gunbig w-80 lg:hidden' />
      <img src={Buymob} alt="" className='buyhero w-60 lg:hidden' />
     
     <div className="  gun flex flex-col justify-center items-center relative">
     <img src={Gunbig} alt="" className='gunbig w-[3000px] lg:flex hidden' />
      <img src={Mainbuykekai} alt="" className='buyhero w-[400px] lg:flex hidden absolute' />
     </div>


<div className="pack flex flex-col lg:flex-row justify-center items-center mt-20">
      <img src={Botpack} alt="" className='botpack w-80 lg:w-[700px] ' />
      <img src={Never} alt="" className='w-80 lg:w-[500px]' />

</div>

      <div className="bush relative flex justify-center items-center mt-28 lg:mt-52 mb-40 lg:mb-96">
        
      <img src={Bushes} alt="" className='w-[900px] lg:w-[2000px] max-w-[4000px] absolute top-2d   ' />

      </div>
    </div>
  )
}

export default Home