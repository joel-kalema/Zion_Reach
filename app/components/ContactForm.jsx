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
    <section id="contact" className="flex items-center">
      <div className=" h-[100vh] w-1/2 sticky top-0 overflow-hidden p-10">
        <Image src="/contact.png" layout="fill" objectFit="cover" alt="bay" quality={100} />
        {/* <div className="text-border-rotate text-8xl mix-blend-difference -mb-20 -rotate-90 absolute -left-56 top-80">Zion Reach</div> */}
      </div>
      <div className="container mx-auto text-center w-1/2">
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
    </section>
  );
};

export default ContactForm;
