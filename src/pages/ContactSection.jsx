import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    
    // URL mailto:
    const mailtoLink = `mailto:arsayadimas@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section className="flex items-center justify-center min-h-screen pt-10 bg-[#60b4fc]" id='contact'>
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
              <h1 className="text-xl md:text-2xl font-bold text-white">
                Contact Us
              </h1>
              <p className="text-sm mt-2 text-white">
                Fill out the form to send us a message via your email client.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6 flex items-center flex-col md:flex-row">
            <div className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-white mb-8 bg-white text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-white mb-8 bg-white text-black"
              />
              <textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:border-white mb-8 bg-white text-black"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="w-full p-4 text-lg font-bold rounded-xl bg-blue-500 text-white hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
