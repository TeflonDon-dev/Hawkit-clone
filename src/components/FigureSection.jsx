import React from 'react';
import { BsAlarm, BsPersonCheck } from "react-icons/bs";
import { FaUsersViewfinder } from 'react-icons/fa6'
import { FiDownload } from "react-icons/fi";
import ladyImg from "../imgs/lady img.jpg";
import { AiFillPlayCircle } from "react-icons/ai"
import { GiHumanTarget } from "react-icons/gi";
import phoneImg from "../imgs/phone shot.jpg";
import { FaHandHoldingDollar } from "react-icons/fa6";




const FigureSection = () => {
  return (
      <div className=' mt-9'>
          <div className=' grid gap-9 sm:grid-cols-2 md:grid-cols-4 justify-around items-center'>
              <div className=' flex relative flex-col justify-center items-center'>
              <div className=' border-dotted rounded-full border-black h-16 w-16 border-[6px]'>
                     
                  </div>
             <GiHumanTarget className=' absolute top-4 w-6 h-6'/>
                   <p className=' mt-3 text-2xl font-bold'>200,000+</p>
                      <p>members</p>
                  </div>
              <div className=' flex relative flex-col justify-center items-center'>
              <div className=' border-dotted rounded-full border-black h-16 w-16 border-[6px]'>
                     
                  </div>
             <BsPersonCheck className=' absolute top-4 w-6 h-6'/>
                   <p className=' mt-3 text-2xl font-bold'>50,000+</p>
                      <p>Advertisers</p>
                  </div>
              <div className=' flex relative flex-col justify-center items-center'>
              <div className=' border-dotted rounded-full border-black h-16 w-16 border-[6px]'>
                     
                  </div>
             <FaUsersViewfinder className=' absolute top-4 w-6 h-6'/>
                   <p className=' mt-3 text-2xl font-bold'>10,000,000+</p>
                      <p>Advert Views</p>
                  </div>
              <div className=' flex relative flex-col justify-center items-center'>
              <div className=' border-dotted rounded-full border-black h-16 w-16 border-[6px]'>
                     
                  </div>
             <FiDownload className=' absolute top-4 w-6 h-6'/>
                   <p className=' mt-3 text-2xl font-bold'>300,000+</p>
                      <p>App Downloads</p>
                  </div>
             
          </div>

          <section className=' md:justify-start md:items-start md:flex-row m-16 flex flex-col items-center justify-center gap-4 md:gap-6 md:p-9'>
              <div>
                  <img src={ladyImg} className='max-w-sm  md:max-w-sm' alt="" />
              </div>
              <div className=' md:mt-0 mt-10 text-justify md:p-8 md:self-center'>
                  <p className=' text-xs'>For Advertisers</p>  
                  <h2 className=' text-lg font-bold mt-3 text-start'>Get People to Post Your Adverts on their Social Media</h2>
                  <p className=' text-sm mt-3'>Get people with aleast 1,000 followers to post your adverts and perform social tasks for you on their social media account.</p>
                  <div className=' flex items-center gap-2 mt-3'>
                      <button className=' rounded-sm text-white text-xs px-3 py-2 hover: bg-[#5F04F6] hover:bg-[#2f1a75] duration-300'>SIGN UP TODAY</button>
                      <p className=' text-xs items-center flex  gap-1'><span><AiFillPlayCircle className=' text-[#5F04F6]'/></span >See Pricing</p>
                  </div>
              </div>
              <div className=' mt-4 md:mt-0 md:p-8 md:self-center'>
                  <p className=' text-xs'>For Earners</p>  
                  <h2 className=' mt-3 font-bold text-lg'>Get Paid for Posting Adverts on Your Social Media</h2>
                  <p className=' text-sm mt-3'>Earn steady income by reselling products, posting adverts and performing social tasks for businesses and top brands on your social media account.

 </p>
                  <div className=' flex items-center gap-2 mt-3'>
                      <button className=' text-xs rounded-sm text-white px-3 py-2 hover: bg-[#5F04F6] hover:bg-[#2f1a75] duration-300'>SIGN UP TODAY</button>
                      <p className=' text-xs items-center flex  gap-1'><span><AiFillPlayCircle className=' text-[#5F04F6]'/></span>See Earning</p>
                  </div>
              </div>
          </section>
         
          <section className=' m-16 flex flex-col md:flex-row md:w-4/5 md:mx-auto'>
              <div>
                  <img className=' md:w-4/5 md:mx-auto' src={phoneImg} alt="" />
              </div>
              <div className='md:w-3/5'>
                  <p className=' text-4xl font-extrabold  text-center md:w-2/3 md:text-start'>Experience the Power of Viral Advertising</p>
                  <p className=' text-sm text-center md:text-justify'>Imagine what happens when you get thousands of people with atleast 1,000 followers each to post your advert on their social media accounts. Now, that is true power.</p>
                  <div className=' mt-6 grid gap-8 grid-flow-col justify-start items-start'>
                      <div className='relative '>
                          <div className='  h-14 w-14 rounded-full border-solid border-[1px] border-gray-200'></div>
                          <GiHumanTarget className=' text-[#5F04F6] w-7 h-7 absolute top-4 left-3.5' />
                      
                      </div>
                      <div className=' grid-cols-2'>
                          <p className=' text-md font-medium'>Massive Advert Views</p>
                          <p className=' mt-2 text-xs'>Each person that repost your advert on their social media account has atleast 1,000 followers with active engagements. This will give your advert massive views within the shortest possible time thereby increasing your conversion and revenue.</p>
                      <p className=' text-xs items-center flex  gap-1 mt-2'><span><AiFillPlayCircle className=' text-[#5F04F6]'/></span >Get started</p>
                  
                      </div>
                  </div>
                  <div className=' mt-6 grid gap-8 grid-flow-col justify-start items-start'>
                      <div className='relative '>
                          <div className='  h-14 w-14 rounded-full border-solid border-[1px] border-gray-200'></div>
                          <FaHandHoldingDollar className=' text-[#5F04F6] w-7 h-7 absolute top-4 left-3.5' />
                      
                      </div>
                      <div className=' grid-cols-2'>
                          <p className=' text-md font-medium'>Affordable Pricing</p>
                          <p className=' mt-2 text-xs'>You don't have to break the bank to get people to repost your advert for you. With as low as ₦150 you can get people with atleast 1,000 followers each to repost your advert on their social media.

</p>
                      <p className=' text-xs items-center flex  gap-1 mt-2'><span><AiFillPlayCircle className=' text-[#5F04F6]'/></span >See Pricing</p>
                  
                      </div>
                  </div>
                  <div className=' mt-6 grid gap-8 grid-flow-col justify-start items-start'>
                      <div className='relative '>
                          <div className='  h-14 w-14 rounded-full border-solid border-[1px] border-gray-200'></div>
                          <BsAlarm className=' text-[#5F04F6] w-7 h-7 absolute top-4 left-3.5' />
                      
                      </div>
                      <div className=' grid-cols-2'>
                          <p className=' text-md font-medium'>Fast Posting Time</p>
                          <p className=' mt-2 text-xs'>After making payment and uploading your advert media, the people are readily available to post your adverts within minutes.</p>
                      <p className=' text-xs items-center flex  gap-1 mt-2'><span><AiFillPlayCircle className=' text-[#5F04F6]'/></span >Get started</p>
                  
                      </div>
                  </div>
                  <div className=' mt-6 grid gap-8 grid-flow-col justify-start items-start'>
                      <div className='relative '>
                          <div className='  h-14 w-14 rounded-full border-solid border-[1px] border-gray-200'></div>
                          <BsPersonCheck className=' text-[#5F04F6] w-7 h-7 absolute top-4 left-3.5' />
                      
                      </div>
                      <div className=' grid-cols-2'>
                          <p className=' text-md font-medium'>Earn Steady Income Daily</p>
                          <p className=' mt-2 text-xs'>You can also join Hawkit today and start earning daily income by posting adverts of businesses and brands on your social media account. Get started within minutes and earn steady income on Hawkit.</p>
                      <p className=' text-xs items-center flex  gap-1 mt-2'><span><AiFillPlayCircle className=' text-[#5F04F6]'/></span >See Earnings</p>
                  
                      </div>
                  </div>
              </div>
          </section>
       
          
    </div>
  )
}

export default FigureSection