import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function ContactSection() {
  return (
    <section className="bg-[#60b4fc] min-h-screen flex items-center justify-center" id='contact'>
      <div className="flex flex-col md:flex-row w-3/4 max-w-6xl overflow-hidden">
        <div className="w-full md:w-2/5 flex justify-center items-center">
          <img
            src="/phone.png"
            alt="phone"
            className="rounded-lg object-cover w-full h-full max-h-80"
          />
      </div>

        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">Contact Us</h1>
              <p className="text-sm text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nibh vel nunc condimentum maximus. Sed consectetur tellus tellus, ut auctor nulla blandit in.
              </p>
            </div>
            <div className="bg-blue-600 p-3 rounded-full">
              <FaWhatsapp className="text-white text-2xl" />
            </div>
          </div>
          <div className="mt-8 space-y-6">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Your message"
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
              rows="4"
            ></textarea>
            <button className="w-full bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
