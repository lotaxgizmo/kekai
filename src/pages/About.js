import React from 'react'
import Trespass from '../assets/trespass.png'
import Containersmob from '../assets/containersmob.png'
import Containermain from '../assets/containermain.png'
import Buykekgroupmob from '../assets/buykekgroupmob.png'
import Buypurple from '../assets/buypurple.png'
import Circle from '../assets/circle.svg'
import Check from '../assets/CHECKLISTTT.png'

function About() {
  return (
    <div className="total flex">
      <div className="about flex flex-col justify-center items-center lg:w-1/2">
      <img src={Trespass} alt="" className='w-80 lg:hidden' />
      <p className='snackid text-7xl     text-center mb-10  '>ABOUT KEKAWAP</p>
      <p className='hachi text-xl text-center lg:text-left lg:ml-5 p-2'>KEKAWAP AI is here to make sure you don`t miss any good snipes. You get pinged in time to setup and start winning</p>
      <img src={Containersmob} alt="" className='w-80  lg:hidden' />


      <div className="things flex self-start ml-5">
        <div className="circlediv flex align-middle">
          <img src={Circle} alt="" className='w-12 mr-3' />
          <p className='snackid text-3xl lg:text-3xl  text-center '>COMMUNITY</p>
        </div>
      </div>
      <p className='hachi text-xl text-left p-2 ml-5 mb-10'>KEK AI is here to make sure you don`t miss any good snipes. You get pinged in time to setup and start winning</p>

      <div className="things flex self-start ml-5 mb-10">

        <div className="circlediv flex align-middle">
          <img src={Circle} alt="" className='w-12 mr-3' />
          <p className='snackid text-3xl lg:text-3xl  text-center '>BOT</p>
        </div>
      </div>

      <div className="things flex self-start ml-5">
        <div className="circlediv flex align-middle">
          <img src={Circle} alt="" className='w-12 mr-3' />
          <p className='snackid text-3xl lg:text-3xl  text-left '>IS SAFU STILL A THING???</p>
        </div>
      </div>

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