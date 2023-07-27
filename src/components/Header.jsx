import React from 'react'
import googlePlay from "../imgs/GooglePlay.jpg";
import appStore from "../imgs/App store.png"
const Header = () => {
  return (
      <header className=' md:px-48 p-6 mt-44 md:mt-24 flex flex-col justify-center items-center md:border-t-[1px] border-b-[1px] pb-32'>
          <p className='  md:mt-14 md:text-5xl text-3xl font-extrabold text-center'>Get Paid for posting Adverts</p>
          <p className=' mt-2 md:text-5xl text-3xl font-extrabold text-center '>Daily on Your Social Media</p>
          <p className=' text-center md:w-[75%] my-5'>Earn daily income by reselling products, posting adverts and performing simple social tasks for top businesses and brands on your social media account.</p>
          <button className=' mb-5 bg-[#5F04F6] rounded-3xl text-white px-14 py-4 hover:bg-[#2f1a75] duration-150'>CREATE FREE ACCOUNT</button>
          <p className=' mb-3'>Already a user? <span className=' text-[#5F04F6] hover:underline cursor-pointer'>Login </span>now</p>
          <div className=' flex gap-2 justify-center items-center'>
              <img className=' w-[170px] cursor-pointer' src={googlePlay} alt="googleplay" />
              <img  className=' w-[170px] cursor-pointer' src={appStore} alt="appstore" />
          </div>
    </header>
  )
}

export default Header