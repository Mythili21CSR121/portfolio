import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ohvw3zc', 'template_u6qrn38', form.current, 'BcD3Xk_eXf-QmzPkk')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div id="Contact" className="p-4 lg:p-15 flex flex-col bg-green-50 items-center justify-center">
      <h1 data-aos="fade-left" className="text-3xl lg:text-[50px] font-poppins leading-normal uppercase text-green-500" >Contact Me</h1>
      <form data-aos="fade-up" ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 lg:mt-5 lg:w-50%">
        <div className="lg:flex gap-9">
          <input name="user_name" className="w-full h-12 lg:my-3 my-4 rounded-lg bg-green-100 p-4 border-2 border-green-500 b_glow text-[20px] text-black" placeholder="Enter Your Name" type="text" />
          <input name="user_email" className="w-full h-12 lg:my-3 my-4 rounded-lg bg-green-100 p-4 border-2 border-green-500 b_glow text-[20px] text-black" placeholder="Enter Your Email" type="email" />
        </div>
        <textarea name="message" className="w-full my-3 rounded-lg bg-green-100 p-4 border-2 border-green-500 b_glow text-[20px] text-black" placeholder="Write Your Message..." id="" cols="20" rows="5" type="text"></textarea>
        <button className="neno-button shadow-xl hover:shadow-green-500 text-black border-2 border-green-500 hover:bg-green-200 rounded-lg py-4 px-8 my-10 uppercase relative overflow-hidden b_glow text-xl text-bold" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact;