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
      message: "Zion Reach revolutionized our online communication at Emci TV with visually stunning videos that perfectly conveyed our message. Their guidance boosted our outreach and engagement like never before.",
      picture: '/Jeremy.JPG'
    },
    {
      name: "Christopher Beleke",
      role: "Founder of TFC Dallas",
      message: "Zion Reach has been a blessing to our ministry, creating high-quality videos and graphics that boosted our attendance and online engagement. Their dedication and attention to detail are unmatched!",
      picture: '/beleke.png'
    },
    {
      name: "Damaris NYAMABO",
      role: "CEO, QAVAH GROUP",
      message: "Working with Zion Reach was a game-changer. Their creative social media campaigns doubled our online following in three months—highly recommend!",
      picture: '/damaris.JPG'
    },
  ];

  return (
    <section className="bg-[#28292A] flex px-4 lg:px-0" id="testimonials">
      <div className="w-1/2 py-20 px-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={index == 1 ? "p-4 shadow-md -mr-36 bg-[#28292A] ml-36 mb-6 lg:mb-0 z-20 relative" : "p-4 shadow-md mb-6 lg:mb-0"}
            data-aos="fade-up" data-aos-duration={`${index}000`}
          >
            <div className="p-4">
              <p className="text-gray-300 italic mb-4">&quot;{testimonial.message}&quot;</p>
              <div className="flex gap-10">
                <div className="relative w-[4rem] h-[4rem] rounded-full overflow-hidden">
                  <Image src={testimonial.picture} layout="fill" objectFit="cover" alt="bay" quality={100} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#fff]">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-6">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/2 relative">
        <div className="absolute z-20 py-16 px-10">
          <h2 className="text-5xl font-bold text-[#fff] mb-6">Client Testimonials</h2>
          <h1 className="text-xl text-[#fff]">What Customers Says?</h1>
        </div>

        <div className="absolute bottom-0 left-0 z-20 py-16 px-10">
          <h2 className="text-5xl font-bold text-[#fff] mb-6">Client Testimonials</h2>
          <h1 className="text-xl text-[#fff]">What Customers Says?</h1>
        </div>
        <div className="relative w-full h-full overflow-hidden">
          <Image src='/testimony.jpg' layout="fill" objectFit="cover" alt="bay" quality={100} />
        </div>
      </div>
    </section>
  );
};

export default Testimony;
