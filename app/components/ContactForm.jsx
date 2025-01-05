'use client';

import { useState } from 'react';
import Image from 'next/image';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 mb-4 border-b"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 mb-4 border-b"
            required
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 mb-4 border-b"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>
      </div>
      
      <div className="relative h-[50vh] mx-auto overflow-hidden z-10 flex py-10">
          <div className="absolute left-0 white-gradient-left w-1/6 h-full z-30"></div>
          <div className="absolute right-0 white-gradient-right w-1/6 h-full z-30"></div>
          <div className="flex mx-auto w-1/6">
            <Image src='/zoin1.png' layout="responsive" width={150} height={250} alt='zoin logo' quality={100} className="z-20" />
            <Image src='/zoin2.png' layout="responsive" width={150} height={250} alt='zoin logo' quality={100} />
          </div>
          <div className="absolute top-0 left-0 flex items-center w-full h-full whitespace-nowrap scale-150">
            <div className="flex animate-scroll relative">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="m-0 text-8xl text-[#000] mx-8 transition-all duration-1000 ease-in-out z-10 font-semibold flex items-center gap-5"
                >
                  <p>we bring your imagination to life</p>
                  <div className="relative w-[13rem] h-[6rem] overflow-hidden rounded-full">
                    <Image src='/solution.jpg' layout="fill" objectFit="cover" alt="bay" quality={100} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      {/* <div className='flex flex-col justify-between items-center py-20'>
        <Image src="/zoin3.png" alt="Zion Reach Logo" width={250} height={250} className=""/>
        <h1 className='font-bold text-8xl'>Zoin Reach</h1>
      </div> */}
    </section>
  );
};

export default ContactForm;
