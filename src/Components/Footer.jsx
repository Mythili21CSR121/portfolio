import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className="flex flex-col items-center font-poppins bg-green-200 text-black py-10">
      <span>Copyright &copy; Mythili S</span>
      <div className="mt-2">
        <FontAwesomeIcon icon={faEnvelope} /> mythiliselvaraju2004@gmail.com
      </div>
      <div className="mt-2">
        <FontAwesomeIcon icon={faPhone} /> +91 99446682438
      </div>
    </div>
  );
}
