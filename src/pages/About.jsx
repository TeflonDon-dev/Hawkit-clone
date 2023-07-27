import React from 'react';
import googlePlay from "../imgs/GooglePlay.jpg";
import appStore from "../imgs/App store.png";
import { TfiTarget } from "react-icons/tfi";
import { RxEyeOpen } from "react-icons/rx";
import {FaRegHandshake} from "react-icons/fa"

const About = () => {
  return (
      <div className=' mb-20' >
          <div className=' w-2/3 flex flex-col gap-4 md:w-1/2 mx-auto mt-44 items-center justify-center'>
              <p className=' md:text-4xl font-bold text-2xl'>Perform Social Tasks and Earn</p>
              <p className='text-orange-400'>Turn Your Social Media Account into a Money Making Machine</p>
              <div className=' text-orange-400'>&#10003;</div>
              <p>Earn daily income of up to ₦5,000 by following, liking, commenting, sharing, retweeting or posting adverts for businesses on your social media.</p>
              <div className='text-orange-400'>&#10003;</div>
              <p>Earn an Instant Referral Commission of ₦500 when you refer someone to become a member on Hawkit. The more you refer, the more you earn.</p>
              <div className='text-orange-400'>&#10003;</div>
              <p>Sell Faster on Hawkit. Let your products be seen by thousands of buyers and resellers daily.</p>
              <div className='text-orange-400'>&#10003;</div>
              <p>Start Your Airtime/Data Business on Hawkit. Buy Airtime or Data on Hawkit at up to 10% - 50% Discount and Sell to friends and family at normal prices.</p>
                <div className='flex-col md:flex-row flex gap-2 justify-center items-center'>
              <img className=' w-[170px] cursor-pointer' src={googlePlay} alt="googleplay" />
              <img  className=' w-[170px] cursor-pointer' src={appStore} alt="appstore" />
              </div>
              <div>
              <button className=' duration-300 border-solid border-[1px] border-blue-400 px-6 py-3 bg-[#28A745] text-white rounded-md hover:bg-white hover:text-black'>Create Free Account</button>
              <p className=' mt-4'>Already Signed Up? <span className=' cursor-pointer hover:underline text-orange-600 hover:text-orange-800'>Log in</span></p>
              </div>
          </div>

          <section className=' mt-20'>
              <div className=' justify-center items-center md:w-2/5 md:mx-auto mt-10 flex flex-col gap-6 mb-20'>
                  <p className=' text-3xl font-bold'>Who we Are</p>
                  <p className=' text-sm text-center'>Hawkit is a platform developed by <span className=' font-bold'>Tech Champions Services</span> , a Web and Mobile App Development Company located in Lagos. With Hawkit, you can easily advertise your products and services and also earn daily income by reposting adverts on your social media accounts.</p>
                     <div className=' w-[120px]  h-[5px] rounded-md bg-gradient-to-r from-pink-500 to-indigo-700  '></div>
              </div>
            <div className='w-[90%] flex flex-col items-center  md:flex-row gap-10 p-6 mx-auto justify-between'>
              <div className=' self-start flex-1 relative flex flex-col justify-center items-center'>
                  <div className=' w-24 h-24 border-dotted border-4 border-black rounded-full'></div>
                      <RxEyeOpen className=' top-6 left-30 absolute w-12 h-12' />
                      <p className=' text-2xl font-semibold my-5'>Our Vision</p>
                      <p className=' text-center text-sm'>Is to become the largest online retail of foodstuffs and groceries in the world.</p>
                  </div>
              <div className=' self-start flex-1 relative flex flex-col justify-center items-center'>
                  <div className=' w-24 h-24 border-dotted border-4 border-black rounded-full'></div>
                      <TfiTarget className=' top-6 left-30 absolute w-12 h-12' />
                      <p className=' text-2xl font-semibold my-5'>Our Mission</p>
                      <p className=' text-center text-sm'>Is to connect consumers to foodstuffs and groceries at far below market prices with no additional delivery cost.</p>
                  </div>
              <div className='flex-1 relative flex flex-col justify-center items-center self-start'>
                  <div className=' w-24 h-24 border-dotted border-4 border-black rounded-full'></div>
                      <FaRegHandshake className=' top-6 left-30 absolute w-12 h-12' />
                      <p className=' text-2xl font-semibold my-5'>Our Values</p>
                      <p className=' text-center text-sm '>Our values define our culture and they are captured in the acronym - H.A.W.K.I.T which stands for Honesty, Affordability, Work-Ethic, Kindness, Integrity and Timeliness</p>
                  </div>
        </div>
          </section>
    </div>
  )
}

export default About