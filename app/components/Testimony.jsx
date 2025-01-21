"use client";
import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
const Testimony = () => {
  useEffect(() => {
      AOS.init();
    }, []);
  const testimonials = [
    {
      name: "Jérémy Sourdril",
      role: "Co-founder of Emci tv, Canada.",
      message: "Zion Reach transformed the way we communicate with our online audience at Emci tv. The videos they created for us were not only visually stunning but also conveyed our message perfectly. Thanks to their guidance, our outreach has grown tremendously, and we’ve seen more engagement than ever before.",
      picture: '/Jeremy.JPG'
    },
    {
      name: "Christopher Beleke",
      role: "Founder of TFC Dallas",
      message: "Zion Reach has been a blessing to our ministry. Their team created high-quality videos and graphics that perfectly aligned with our mission. Since working with them, our church has experienced a significant increase in attendance and online engagement. Their dedication and attention to detail are unmatched!",
      picture: '/beleke.png'
    },
    {
      name: "Damaris",
      role: "Founder, Startup Inc.",
      message: "Their branding expertise gave our company a fresh new look. Truly a pleasure to work with!",
      picture: '/damaris.JPG'
    },
  ];

  return (
    <section className="bg-[#28292A] py-40 px-4 lg:px-20" id="testimonials">
      <h2 className="text-3xl font-bold text-[#fff] mb-6">Client Testimonials</h2>
      <h1 className="mb-16 text-xl text-[#fff]">What Customers Says?</h1>
      <div className="lg:flex gap-10 justify-between">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#2e2f30] p-4 shadow-lg mb-6 lg:mb-0"
            data-aos="fade-up" data-aos-duration={`${index}000`}
          >
            <div className="p-4">
              <p className="text-gray-300 italic mb-4">&quot;{testimonial.message}&quot;</p>
              <h3 className="text-lg font-semibold text-[#fff]">{testimonial.name}</h3>
              <p className="text-sm text-gray-500 mb-6">{testimonial.role}</p>

              <div className="relative w-[8rem] h-[8rem] overflow-hidden">
                <Image src={testimonial.picture} layout="fill" objectFit="cover" alt="bay" quality={100} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimony;
