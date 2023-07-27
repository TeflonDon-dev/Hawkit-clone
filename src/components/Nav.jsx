import React, { useState } from 'react'
import Button from './Button';
import HawkitLogo from "../imgs/Hawkit logo.png";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const Nav = () => {
  let Links = [
    { name: "Home", link: '/' },
    { name: "Selling", link: '/selling' },
    { name: "About", link: '/about' },
    { name: "blog", link: '/' },
    { name: "contact", link: '/' },
  ];

  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (location.pathname === route) {
      return true;
   }
   
  }


  const [open, setOpen] = useState(false);
  return (
    <nav className=' w-full fixed top-0 left-0 z-50'>
      <div className=' md:flex items-center justify-around bg-white py-4 md:px-10 px-7'>
        <div className=' font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
        <span className=' text-3x mr-1 pt-2'>
            <img  src={HawkitLogo} className=' w-28' alt="" />
         </span>   
        </div>
        <div onClick={()=>setOpen(!open)} className=' hover:text-[#5F04F6] duration-500 text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open?'close':'menu'}></ion-icon>
       </div>
        <ul  onClick={()=>setOpen(false)} className={` pl-9 md:flex transition-all ease-in duration-500 md:items-center md:pb-0 pb-12 md:w-auto md:pl-0 md:z-auto z-[-1] left-0 w-full bg-white absolute md:static ${open?'top-10 opacity-100 h-screen flex flex-col justify-start mt-10 items-center':' top-[-490px] opacity-0'} md:opacity-100 `}>
            {Links.map((link) => (
              <li key={link.name} className=' md:ml-8 text-xl md:my-0 my-7'>
                {/* <a className=' text-gray-800 hover:text-gray-400 duration-500' href={link.link}>{link.name}</a> */}
                <Link to={link.link} className={` hover:text-purple-700 duration-500 ${pathMatchRoute(link.link)&& ' text-purple-700'}`}>{link.name}</Link>
            </li>
            ))}
         <Button>Read more</Button>
        </ul>
        <div className=' gap-6 flex items-center justify-center'>
          <p className=' hidden md:flex'>login</p>
  <button className=' rounded-3xl text-white py-4 px-6 duration-300 bg-[#5F04F6] hidden md:flex hover:bg-[#2f1a75]'>Create Account</button>
        </div>
               </div>
    </nav>
  )
}

export default Nav