import React from 'react';
import sellers from '../imgs/sellers.jpg';
import { RxEyeOpen } from "react-icons/rx";

const Selling = () => {
  return (
      <div className=' mt-16'>
          <section className=' flex flex-col md:flex-row bg-[#F8F9FA] gap-10'>
              <div className=' flex-1'>
                  <img className=' max-w-full' src={sellers} alt="" />
              </div>
              <div className=' flex-1 md:ml-0 mx-10 md:my-14'>
                  <div>
                      <p className=' text-sm'>Reach More Customers Online</p>
                      <p className=' text-4xl font-medium text-gray-500 mb-8'>Sell Faster On Hawkit</p>
                      <p className=' text-sm'>You are here because you know you need to reach more customers online. More than 60% businesses moved their businesses online and over 50% reached more customers using ecommerce platforms.</p>

                     <p className=' text-sm mt-3'>Hawkit is a social marketplace geared at helping you as a seller reach more customers online with unlimited access to product listing and over a thousand resellers available to resell your products without you worrying about the commission.</p>
                      <p className='text-sm mt-3'>Benefits you get as a seller include:</p>
                  </div>
                <div className='  flex flex-wrap items-center md:gap-10'>
                      <div className=' w-full mt-6 grid gap-8 grid-flow-col justify-start items-start md:basis-2/5'>
                      <div className='relative '>
                          <div className='  h-14 w-14 rounded-full border-solid border-[1px] border-gray-200'></div>
                          <RxEyeOpen className=' text-[#5F04F6] w-7 h-7 absolute top-4 left-3.5' />
                      
                      </div>
                      <div className=' grid-cols-2'>
                          <p className=' text-md font-medium'>High Product Views</p>
                          <p className=' mt-2 text-xs'>We have thousands of resellers available to share your products to their contacts, followers and people within their location. This gives you massive product views within a small period of time thereby increasing your sale faster.</p>
                     
                      </div>
                  </div>
                      <div className=' mt-6 grid gap-8 grid-flow-col justify-start items-start md:basis-2/5 '>
                      <div className='relative '>
                          <div className='  h-14 w-14 rounded-full border-solid border-[1px] border-gray-200'></div>
                          <RxEyeOpen className=' text-[#5F04F6] w-7 h-7 absolute top-4 left-3.5' />
                      
                      </div>
                      <div className=' grid-cols-2'>
                          <p className=' text-md font-medium'>High Product Views</p>
                          <p className=' mt-2 text-xs'>We have thousands of resellers available to share your products to their contacts, followers and people within their location. This gives you massive product views within a small period of time thereby increasing your sale faster.</p>
                     
                      </div>
                 </div>
                    <div className=' mt-6 grid gap-8 grid-flow-col justify-start items-start md:basis-2/5'>
                          <div className='relative '>
                          <div className='  h-14 w-14 rounded-full border-solid border-[1px] border-gray-200'></div>
                          <RxEyeOpen className=' text-[#5F04F6] w-7 h-7 absolute top-4 left-3.5' /> 
                          </div>
                        <div className=' grid-cols-2'>
                          <p className=' text-md font-medium'>High Product Views</p>
                          <p className=' mt-2 text-xs'>We have thousands of resellers available to share your products to their contacts, followers and people within their location. This gives you massive product views within a small period of time thereby increasing your sale faster.</p>
                     
                      </div>
                  </div>
                      <div className=' mt-6 grid gap-8 grid-flow-col justify-start items-start md:basis-2/5'>
                      <div className='relative '>
                          <div className='  h-14 w-14 rounded-full border-solid border-[1px] border-gray-200'></div>
                          <RxEyeOpen className=' text-[#5F04F6] w-7 h-7 absolute top-4 left-3.5' />
                      
                      </div>
                      <div className=' grid-cols-2'>
                          <p className=' text-md font-medium'>High Product Views</p>
                          <p className=' mt-2 text-xs'>We have thousands of resellers available to share your products to their contacts, followers and people within their location. This gives you massive product views within a small period of time thereby increasing your sale faster.</p>
                     
                      </div>
                  </div>
                  </div>
              </div>
          </section>
          
    </div>
  )
}

export default Selling