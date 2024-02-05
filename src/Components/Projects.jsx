import React from 'react'
import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
const Projects = () => {
  return (
    <div id="Projects" className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-3xl lg:text-[50px] font-poppins mb-10 leading-normal uppercase text-green-500">Projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-around gap-20 font-poppins lg:px-20 md:px-8">
        <div data-aos="fade-up" className="e-card bg-white flex flex-col justify-center rounded-3xl border-2 shadow-xl w-full">
          <div className="e-card-image">
          <a href="https://github.com/Mythili21CSR121/online-nursery-shopping.git"><img src={proj1} alt="" className="rounded-t-3xl h-40 sm:h-auto" /></a></div>
          <div className="e-card-title font-semibold pt-2 lg:px-4 px-2 uppercase text-left ">Plant Shopping Website</div>
          <div className="e-card-content flex flex-col pb-2 lg:px-4 px-2 h-full text-justify">
          Developed an E-Commerce Website for Online Nursery Plants to explore my HTML, CSS and JavaScript Knowledge
          </div>
        </div>
        <div data-aos="fade-down" className="e-card bg-white flex flex-col justify-center rounded-3xl border-2 shadow-xl">
          <div className="e-card-image">
          <a href="https://github.com/INIKA-N/agile-projects.git"><img src={proj2} alt="" className="rounded-t-3xl h-40 sm:h-auto" /></a></div>
          <div className="e-card-title font-semibold pt-2 lg:px-4 px-2 uppercase text-left">College Event Management System</div>
          <div className="e-card-content flex flex-col pb-2 lg:px-4 px-2 h-full text-justify">
          Designed a College Event MAnagement with React for the front-end and utilized MySQL for the backend
          </div>
        </div>
        <div data-aos="fade-up" className="e-card bg-white flex flex-col justify-center rounded-3xl border-2 shadow-xl">
          <div className="e-card-image">
          <a href="https://github.com/Mythili21CSR121/Online-quiz-website.git"><img src={proj3} alt="" className="rounded-t-3xl h-40 sm:h-auto" /></a></div>
          <div className="e-card-title font-semibold pt-2 lg:px-4 px-2 uppercase text-left">Online Quiz Application</div>
          <div className="e-card-content flex flex-col pb-2 lg:px-4 px-2 h-full text-justify">
          Developed a Online Quiz Application with HTML, CSS and JavaScript, offering an interactive platform for users to take quizzes
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Projects