"use client"

import React, { useState } from "react";
import { IoHappyOutline } from "react-icons/io5";
import { GrClose } from "react-icons/gr";
import Image from 'next/image';

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({ Name: "", Email: "", Message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.Name || !formData.Email || !formData.Message) {
      setStatusMessage("Please fill in all fields before submitting.");
      setOpen(true);
      return;
    }

    const formElement = e.target;
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw6mnDPO5my-0urRMy86p0jRTDI9fRUDZLw4L7IeTe7LoKB0TMtDMtNSrJX6egeGbd1/exec",
        {
          method: "POST",
          body: new FormData(formElement),
        }
      );

      if (response.ok) {
        setStatusMessage("Thanks for getting in touch! Let's create something amazing together! 🎉");
        formElement.reset();
        setFormData({ Name: "", Email: "", Message: "" });
      } else {
        setStatusMessage("Error submitting form. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again later.");
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
      setOpen(true);
    }
  };

  const closePopup = () => {
    setOpen(false);
    setStatusMessage("");
  };

  const handleLoading = () => setIsLoading(isLoading);

  return (
    <section id="contact" className="flex items-center">
      <div className=" h-[100vh] w-1/2 sticky top-0 hidden lg:block overflow-hidden p-10">
        <Image src="/service.png" layout="fill" objectFit="cover" alt="bay" quality={100} />
      </div>
      <div className="container mx-auto text-center lg:w-1/2 py-10 px-4 lg:py-0 lg:px-0">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="lg:max-w-xl mx-auto">
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            value={formData.Name}
              onChange={handleChange}
            className="w-full p-4 mb-4 border-b"
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            value={formData.Email}
              onChange={handleChange}
            className="w-full p-4 mb-4 border-b"
            required
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            value={formData.Message}
              onChange={handleChange}
            className="w-full p-4 mb-4 border-b"
            required
          />
          <button type="submit" onClick={handleLoading} className="bg-[#159CED] text-white px-6 py-3 rounded hover:bg-blue-600">
            Send Message
          </button>
        </form>

        {isLoading && (<div className="fixed top-0 left-0 w-full h-full bg-[#159CED] flex items-center justify-center z-50">
          <div className="flex items-center justify-center">
          <div class="loader"></div>
          </div>
        </div>
        )}

        {open && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#ffffffe6] flex items-center justify-center z-50">
            <div className="p-6 bg-[#ffffff] rounded shadow-md text-center">
              <div className="flex flex-col justify-center items-center">
                <IoHappyOutline className="text-4xl" />
                <p className="text-lg w-4/6  bg-[#ffffff] my-10">{statusMessage}</p>
                <button
                  className="border gap-4 flex items-center justify-between py-1 px-4 rounded-3xl w-3/6 lg:w-1/5 cursor-pointer"
                  onClick={closePopup}
                >
                  Close <GrClose className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
