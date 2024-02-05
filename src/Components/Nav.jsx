import React, { useState } from 'react'
import { Link } from "react-scroll";
import {FaTimes} from "react-icons/fa";
import {CiMenuFries} from "react-icons/ci";

const Nav = () => {
  const [click,setClick]=useState(false);
  const handleClick = () => setClick(!click);
  
  const content = <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-green-100 transition">
      <ul className="text-center text-xl p-8 bg-green-50">
        <Link spy={true} smooth={true} to="Home" onClick={handleClick} offset={-80}>
          <li className="my-4 py-4 border-slate-800 hover:text-green-500 hover:bg-green-200 hover:rounded font-poppins">Home</li>
        </Link>
        <Link spy={true} smooth={true} to="About" onClick={handleClick} offset={-80}>
          <li className="my-4 py-4 border-slate-800 hover:text-green-500 hover:bg-green-200 hover:rounded font-poppins">About</li>
        </Link>
        <Link spy={true} smooth={true} to="Details" onClick={handleClick} offset={-80}>
          <li className="my-4 py-4 border-slate-800 hover:text-green-500 hover:bg-green-200 hover:rounded font-poppins">Details</li>
        </Link>
        <Link spy={true} smooth={true} to="Projects" onClick={handleClick} offset={-80}>
          <li className="my-4 py-4 border-slate-800 hover:text-green-500 hover:bg-green-200 hover:rounded font-poppins">Projects</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact" onClick={handleClick} offset={-80}>
          <li className="my-4 py-4 border-slate-800 hover:text-green-500 hover:bg-green-200 hover:rounded font-poppins">Contact</li>
        </Link>
      </ul>
    </div>
  </>
  return (
    <nav>
      <div className={`fixed w-full bg-green-200 top-0 z-50 ${click ? 'lg:hidden' : ''}`}>
      <div className="h-10vh flex justify-between z-50 text-black lg:py-5 px-10 py-2 bg-green-200 border-b">
        <div className="flex items-center flex-1">
          <span style={{fontSize: '2rem',fontFamily:'font-poppins',fontWeight: 'bold'}}>MS</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home" offset={-80}>
                <li className="hover:text-green-500 transition border-b-2 border-green-200 hover:border-green-500 cursor-pointer font-poppins">Home</li>
              </Link>
              <Link spy={true} smooth={true} to="About" offset={-80}>
                <li className="hover:text-green-500 transition border-b-2 border-green-200 hover:border-green-500 cursor-pointer font-poppins">About</li>
              </Link>
              <Link spy={true} smooth={true} to="Details" offset={-80}>
                <li className="hover:text-green-500 transition border-b-2 border-green-200 hover:border-green-500 cursor-pointer font-poppins">Details</li>
              </Link>
              <Link spy={true} smooth={true} to="Projects" offset={-80}>
                <li className="hover:text-green-500 transition border-b-2 border-green-200 hover:border-green-500 cursor-pointer font-poppins">Projects</li>
              </Link>
              <Link spy={true} smooth={true} to="Contact" offset={-80}>
                <li className="hover:text-green-500 transition border-b-2 border-green-200 hover:border-green-500 cursor-pointer font-poppins">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className="block sm:hidden transition justify-end" onClick={handleClick}>
          {click ? <FaTimes/> : <CiMenuFries/>}
        </button>
      </div>
      </div>
    </nav>
  )
}

export default Nav