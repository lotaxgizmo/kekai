import React from 'react'
import Trespass from '../assets/trespass.png'
import Containersmob from '../assets/containersmob.png'
import Containermain from '../assets/containermain.png'
import Buykekgroupmob from '../assets/buykekgroupmob.png'
import Buypurple from '../assets/buypurple.png'
import gunleft from '../assets/gunleft.png'
import Circle from '../assets/circle.svg'
import Check from '../assets/CHECKLISTTT.png'

function About() {
  return (
    <div className="total flex">
      <div className="about flex flex-col justify-center items-center lg:items-start lg:w-1/2">
      <img src={gunleft} alt="" className='' />
      <img src={Trespass} alt="" className='w-80 lg:hidden' />
      <p className='snackid text-7xl     text-center lg:text-left mb-10  lg:ml-5 '>ABOUT KEKAWP</p>
      <p className='hachi text-xl text-center lg:text-left lg:ml-5 p-2'>KEKAWP is here and ready to make you no scope on fools or camp in a bush for the win . 
No matter the distance we will guide your shot to the moon. How you may ask?</p>
      <img src={Containersmob} alt="" className='w-80  lg:hidden' />


      <div className="things flex self-start ml-5">
        <div className="circlediv flex align-middle">
          <img src={Circle} alt="" className='w-12 mr-3' />
          <p className='snackid text-3xl lg:text-3xl  text-center '>INTENSE TRAINING</p>
        </div>
      </div>
      <p className='hachi text-xl text-left p-2 ml-5 mb-10'>Our Head of Training specialist KEKSHOT will train you to become the next Simo "White Death' Häyhä.
The underwater training facility situated in center of Dubai is equiped with live influcener dummys so
we can get that headshot % to 100% .</p>

<div className="things flex self-start ml-5">
        <div className="circlediv flex align-middle">
          <img src={Circle} alt="" className='w-12 mr-3' />
          <p className='snackid text-3xl lg:text-3xl  text-center '>WEAPONS</p>
        </div>
      </div>
      <p className='hachi text-xl text-left p-2 ml-5 mb-10'>Here you will also revice the trusty KEKAWP as your main weapon
to get the job done. Forget shaky aim and missed shots ! After your training is done nothing will
see you coming for them.</p>

     

      <img src={Buykekgroupmob} alt="" className='w-80 mr-3 lg:hidden' />
      <img src={Check} alt="" className='w-80 mr-3 lg:hidden' />
      <img src={Buypurple} alt="" className='wobble-ver-left w-[900px] mr-3 lg:flex hidden' />
      
    </div>

    <div className="other hidden lg:flex flex-col justify-center items-center w-1/2 relative">
    <img src={Trespass} alt="" className='signnx buyhero w-96 hidden lg:flex  ' />
<div className="relative flex flex-col justify-center items-center">
<img src={Containermain} alt="" className='w-[900px] hidden lg:flex absoludte bottom-2 left-2 ' />

</div>
    </div>

    </div>
  )
}

export default About