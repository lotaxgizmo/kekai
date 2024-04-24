import React from 'react'
import sitelogo from "../assets/sitelogo.png"
import Buykekai from "../assets/buykekai.png"
import telegram from "../assets/telegram.png"
import twitter from "../assets/twitter.png"


function Header() {
  return (
    <div className=' w-full flex flero  justify-between items-center px-8 fixed top-0 z-30 pt-1 bg-black/20 '>
      <img src={sitelogo} alt="" className='w-32 lg:w-auto'/>
      {/* menupart */}
    

    <div className="right flex items-center">
    <div className="icons flex  lg:mr-10">
     <a href="https://t.me/kekawpsol" target="_blank" rel="noopener noreferrer">
     <img src={telegram} alt="" className='p-1' />
     </a>
     <a href="https://twitter.com/kekawp" target="_blank" rel="noopener noreferrer">
     <img src={twitter} alt="" className='p-1' />
     </a>
     </div>
      <img src={Buykekai} alt="" className='hidden lg:flex'/>
    </div>

    </div>
  )
}

export default Header