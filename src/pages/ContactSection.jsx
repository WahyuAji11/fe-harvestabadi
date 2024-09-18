import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function ContactSection() {
  return (
    <div className="bg-blue-500 h-screen flex items-center justify-center">
      <div className="flex w-3/4 max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 bg-blue-100 flex justify-center items-center p-8">
          <img
              src="/phone.png"
              alt="phone"
              width={700}
              height={466}
              className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <div className="w-1/2 p-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Contact Us</h1>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non nibh vel nunc condimentum maximus. Sed consectetur tellus tellus, ut auctor nulla blandit in. Sed nisi mi, egestas at auctor ac, hendrerit a ex. Nam sodales felis ac nunc luctus tristique. Aenean mollis dapibus turpis, at sodales mauris consequat in. Curabitur eleifend nisi nec erat volutpat, eu lobortis tortor lacinia. Nulla molestie at sem eu volutpat.</p>
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
    </div>
  );
}

export default ContactSection;
