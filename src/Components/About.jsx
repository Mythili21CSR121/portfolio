import img from '../assets/profile.jpg'
import React from 'react';
import resume from '../assets/MYTHILI S.pdf'

const About = () => {
  return (
    <div id='About' className="bg-green-50 lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
      <img data-aos="fade-down" src={img} width={290} height={290} className="rounded border-2 p-1 border-green-500 img_glow aos-init aos-animate" alt="" />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos="fade-right" className="text-3xl lg:text-[50px] font-poppins mb-8 leading-normal text-green-500 uppercase">About me</h1>
        <p data-aos="fade-left" className="font-poppins mb-6 text-justify text-black">Seeking a chance to make the most of my abilities and actively
          contribute to the growth of an organization. Eager to bring my
          skills, dedication, and enthusiasm to a dynamic team,
          supporting both personal and professional development in a
          collaborative work environment.</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href={resume} download><button className="neno-button shadow-x1 hover:shadow-green-100 text-black border-2 hover:bg-green-200 border-green-500 rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resume</button></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About