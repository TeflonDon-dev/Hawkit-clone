import React from 'react';
import googlePlay from "../imgs/GooglePlay.jpg";
import appStore from "../imgs/App store.png"

const Advertise = () => {
  return (
      <div className=' bg-[#F8F9FA] flex flex-col justify-center items-center gap-1 p-12'>
          <p className=' md:w-2/5 text-center text-2xl font-extrabold'>Advertise and Earn Daily With Your Social Media Account</p>
          <p className=' mb-5 md:w-2/4 text-sm mt-3 text-center'>Join thousands of people using Hawkit to advertise and earn steady income with their social media accounts. Get started today for free.</p>
          
          <div className=' w-[120px]  h-[5px] rounded-md bg-gradient-to-r from-pink-500 to-indigo-700  '>
              
          </div>
          <div className=' mb-3 mt-2 flex'>
              <button className=' hover:bg-[#2f1a75] duration-300 rounded-sm text-sm  text-white px-6 py-3 bg-[#99a29b]'>CREATE FREE ACCOUNT</button>
              <button className='hover:bg-[#2f1a75] hover:text-white ml-2 text-black duration-300 rounded-sm text-sm border-[1px] px-6 py-3'>LOG IN</button>
          </div>
           <div className=' flex gap-2 justify-center items-center'>
              <img className=' w-[170px] cursor-pointer' src={googlePlay} alt="googleplay" />
              <img  className=' w-[170px] cursor-pointer' src={appStore} alt="appstore" />
          </div>
    </div>
  )
}

export default Advertise