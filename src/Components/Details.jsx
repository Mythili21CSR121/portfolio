// Details.jsx
import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const Details = () => {
  return (
    <div>
      {/* First container */}
      <div id="Details" className="p-6 mt-10 rounded-xl overflow-visible mx-auto max-w-5xl font-poppins">
        <h1 data-aos="fade-left" className="text-3xl lg:text-[50px] mb-10 text-green-500 text-center mt-20 uppercase">
          Details
        </h1>
        <section data-aos="fade-up" className="flex img_glow shadow-lg flex-col lg:flex-row p-4 lg:p-10 space-y-4 lg:space-y-10 rounded-xl bg-white">
          <div className='w-full'>
            <div className='p-3 text-lg overflow-visible'>
              <div className='scrolling-container md:text-lg tabs_text sm:text-xs'>
                <div className='flex justify-center items max-h-fit'>
                  <ul className='list-disc text-[18px]'>
                    <div className='md:grid md:grid-cols-[5fr_1fr]'>
                      <li className="mb-6">
                        <span className='font-semibold mb-4 block'>Kongu Engineering College, Erode</span>
                        <p className="mb-4">Secured CGPA - 8.85 (till 5th sem)</p>
                        <div className='flex ml-2'>
                          <p className='flex items-center rounded-full w-fit px-4'>2021-2025</p>
                        </div>
                      </li>
                    </div>
                    <div className='md:grid md:grid-cols-[5fr_1fr]'>
                      <li className="square-bullet mb-6">
                        <span className='font-semibold mb-4 block'>Kongu National Matriculation Higher Secondary School, Erode</span>
                        <p className="mb-4">Higher Secondary School - 93.955%</p>
                        <div className='flex ml-2'>
                          <p className='flex item-center rounded-full w-fit px-4'>2020-2021</p>
                        </div>
                      </li>
                    </div>
                    <div className='md:grid md:grid-cols-[5fr_1fr]'>
                      <li className="square-bullet mb-4">
                        <span className='font-semibold mb-4 block'>Kongu National Matriculation Higher Secondary School, Erode</span>
                        <p className="mb-4">Secondary School Leaving Certificate - 95%</p>
                        <div className='flex ml-2'>
                          <p className='flex item-center rounded-full w-fit px-4'>2018-2019</p>
                        </div>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Skills container */}
      <div id="skills" className="p-6 mt-20 rounded-xl font-poppins overflow-visible mx-auto max-w-5xl">
        <h1 data-aos="fade-left" className="text-3xl lg:text-[50px] text-green-500 mb-10 text-center uppercase">
          Skills
    
        </h1>
        <div data-aos="fade-up" className='p-2 shadow-lg img_glow text-lg overflow-hidden rounded-xl bg-white'>
          <div className='scrolling-container md:text-lg tabs_text sm:text-xs p-3'>
            <ul className='ml-2'>
              <li className="mb-4">
                <span className='font-bold text-[18px]'>Java Programming</span>
                <div className='flex items-center mt-1'>
                  <div className='w-full'>
                    <LinearProgress color="primary" variant="determinate" value={80} />
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <span className='font-bold text-[18px]'>C Programming</span>
                <div className='flex items-center mt-1'>
                  <div className='w-full'>
                    <LinearProgress color="primary" variant="determinate" value={50} />
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <span className='font-bold text-[18px]'>HTML, CSS, JavaScript</span>
                <div className='flex items-center mt-1'>
                  <div className='w-full'>
                    <LinearProgress color="primary" variant="determinate" value={70} />
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <span className='font-bold text-[18px]'>React</span>
                <div className='flex items-center mt-1'>
                  <div className='w-full'>
                    <LinearProgress color="primary" variant="determinate" value={80} />
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <span className='font-bold text-[18px]'>MYSQL</span>
                <div className='flex items-center mt-1'>
                  <div className='w-full'>
                    <LinearProgress color="primary" variant="determinate" value={50} />
                  </div>
                </div>
              </li>
              <li className="mb-4">
                <span className='font-bold text-[18px]'>Figma</span>
                <div className='flex items-center mt-1'>
                  <div className='w-full'>
                    <LinearProgress color="primary" variant="determinate" value={49} />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
