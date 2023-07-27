import React from 'react';
import { MdEmail } from "react-icons/md"
import {FaFacebook,FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
      <footer className=' mt-10 pb-10'>
          <div className=' mb-10 flex flex-col md:flex-row gap-4 ml-4 md:justify-around'>
              <div>
                  <p className=' mb-4 text-xl font-semibold'>Company</p>
                  <p>About</p>
                  <p>Careers</p>
                  <p>Terms</p>
                  <p>Refund Policy</p>
                  <p>Privacy Policy</p>
              </div>
              <div>
                  <p className=' mb-4 text-xl font-semibold'>Quick Links</p>
                  <p>Create Account</p>
                  <p>Login</p>
                  <p>Pricing</p>
                  <p>Earnings</p>
                  <p>MarketPlace</p>
                  
              </div>
              <div>
                  <p className=' mb-4 text-xl font-semibold'>Support</p>
                  <p>Contact Support</p>
                  <p>Frequently Asked Questions (FAQ)</p>
                  <p>Knowledgebase</p>
              </div>
              <div>
                  <p className=' mb-4 text-xl font-semibold'>Contact Us</p>
                  <div className=' flex items-center gap-5 mb-6'><MdEmail /><p className=' text-sm'>support@hawkit.ng</p></div>
                  <div className=' flex items-center gap-3'><FaFacebook/><FaInstagram/></div>
              </div>
              
          </div>
          <small className=' ml-4 md:ml-24'>Hawkit clone is created by TeflonDon-dev &copy; {new Date().getFullYear() }. All Rights Reserved</small>
    </footer>
  )
}

export default Footer