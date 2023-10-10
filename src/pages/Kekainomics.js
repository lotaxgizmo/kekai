import React from 'react'
import Lpmob from '../assets/lpmob.png'
import Markmob from '../assets/markmob.png'
import Twosign from '../assets/twosign.png'
import Buymob from '../assets/greenbtn.png'
import Spill from '../assets/spill.png'
import Bought from '../assets/boughtt.png'

function Kekainomics() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='snackid text-7xl lg:text-9xl  lg:hidden  text-center'>KEKAI
      NOMICS </p>
      <p className='snackid lg:text-9xl   hidden lg:block text-center'>KEKAINOMICS </p>

      <div className="twosignmob flex flex-col justify-center items-center mt-10 lg:hidden">
      <img src={Lpmob} alt="" className='w-80 ' />
      <img src={Markmob} alt="" className='w-80 ' />
      </div>
      <img src={Twosign} alt="" className='w-[1000px] mt-32 hidden lg:block ' />


      <p className='snackid text-xl text-center p-2 lg:px-96 mb-10'>With KEKAI you get pinged only for contracts that are worth considering a snipe. <br/> You no longer have to monitor all contracts and figure out if the project is worth a shot.</p>

      <img src={Buymob} alt="" className='w-60 lg:w-[500px] ' />
      <img src={Spill} alt="" className='w-96 lg:w-[1500px] ' />
      <img src={Bought} alt="" className='w-96 lg:mt-[-600px]  ' />


    </div>
  )
}

export default Kekainomics