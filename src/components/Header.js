import React from 'react'
import sitelogo from "../assets/sitelogo.png"
import Buykekai from "../assets/buykekai.png"


function Header() {
  return (
    <div className=' w-full flex flero  justify-between items-center px-8 fixed top-0 z-30 pt-1 bg-black/20 '>
      <img src={sitelogo} alt="" className='w-32 lg:w-auto'/>
      {/* menupart */}
      <img src={Buykekai} alt="" />

    </div>
  )
}

export default Header