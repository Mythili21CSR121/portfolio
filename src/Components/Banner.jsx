import React, { useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';
import img from '../assets/profile.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <div id="Home"className="lg:px-56 px-10 lg:py-10 py-20 text-center bg-green-50 gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 mt-20 flex flex-col justify-center lg:items-start items-center text-white">
        <p data-aos="fade-right" className="font-poppins ml-2 mb-8 text-4xl text-green-500 ">I am Mythili</p>
        <p data-aos="fade-left"className="font-poppins ml-2 mb-8 text-4xl text-green-500 relative">
          <TypeAnimation
            sequence={[
              'Programmer',
              1000,
              'Web Developer',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href="" className="text-black hover:text-green-500 rounded-full glow p-2">
                <AiFillGithub className="text-[28px]" />
              </a>
              <a href="" className="text-black hover:text-green-500 rounded-full glow p-2">
                <FaLinkedinIn className="text-[28px]" />
              </a>
              <a href="" className="text-black hover:text-green-500 rounded-full glow p-2">
                <FaInstagram className="text-[28px]" />
              </a>
              <a href="" className="text-black hover:text-green-500 rounded-full glow p-2">
                <SiLeetcode className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img data-aos="fade-up" src={img} width={290} height={290} className="rounded-full border-2 p-1 border-green-500 img_glow sm:mt-20" alt="" />
    </div>
  );
};

export default Banner;
