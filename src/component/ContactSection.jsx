import React, { useContext } from 'react';
import { DarkModeContext } from './DarkModeContext';

function ContactSection() {
  const { checked } = useContext(DarkModeContext);

  return (
    <section className={`flex items-center justify-center min-h-screen pt-10 
      ${checked ? 'bg-gray-800' : 'bg-[#60b4fc]'}`} id='contact'>
      <div className="flex flex-col md:flex-row w-3/4 max-w-6xl overflow-hidden">
        <div className="w-full md:w-2/5 flex justify-center items-center">
          <img
            src="/phone.png"
            alt="phone"
            className="rounded-lg w-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className={`text-xl md:text-2xl font-bold 
                ${checked ? 'text-white' : 'text-white'}`}>
                Contact Us
              </h1>
              <p className={`text-sm mt-2 
                ${checked ? 'text-gray-300' : 'text-white'}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nibh vel nunc condimentum maximus. Sed consectetur tellus tellus, ut auctor nulla blandit in. Sed nisi mi, egestas at auctor ac, hendrerit a ex. Nam sodales felis ac nunc luctus tristique. Aenean mollis dapibus turpis, at sodales mauris consequat in. Curabitur eleifend nisi nec erat volutpat, eu lobortis tortor lacinia. Nulla molestie at sem eu volutpat.
              </p>
            </div>
          </div>
          <div className="mt-8 space-y-6 flex items-center flex-col md:flex-row">
            <div className="w-full">
              <input
                type="text"
                placeholder="Your name"
                className={`w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-white mb-8 
                  ${checked ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white text-black'}`}
              />
              <input
                type="email"
                placeholder="Your email"
                className={`w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-white mb-8 
                  ${checked ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white text-black'}`}
              />
              <textarea
                placeholder="Your message"
                className={`w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-white mb-8 
                  ${checked ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white text-black'}`}
                rows="4"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
