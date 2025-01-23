"use client";

import Image from "next/image";
import HoverButton from "@/components/reuseble/HoverButton";
import CarouselCustomNavigation from "@/components/reuseble/caroucelle";
import { LuArrowUpRight } from "react-icons/lu";

const HeroSection = () => {
  const imagePaths = ["/video1.png", "/video2.png", "/video3.png"];

  const renderImageRow = (styles) => (
    <div className={`flex justify-around ${styles}`}>
      {imagePaths.map((path, index) => (
        <Image
          key={index}
          src={path}
          alt={`Video ${index + 1}`}
          width={300}
          height={200}
          quality={10}
          loading="lazy"
        />
      ))}
    </div>
  );

  return (
    <section className="relative bg-[#28292A] text-white h-[120vh] lg:h-[100dvh] overflow-hidden">
      <div className="absolute white-gradient-black-t top-0 h-[20rem] w-full z-20 opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full z-30">
        <div className="lg:flex lg:h-[50%]">
          <div className="border-b border-[#4d4e50] border-r lg:w-2/3 flex justify-end items-end pr-10">
            <div className="mb-20 lg:mb-0 pt-40 lg:pb-0 lg:pt-0">
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">Zion Reach</h1>
              <p className="mb-4 flex items-center gap-2">
                Empower Your Brand. Expand Your Reach. <LuArrowUpRight />
              </p>
            </div>
          </div>
          <div className="w-0 lg:w-1/3 hidden lg:block"></div>
        </div>
        <div className="lg:flex lg:h-[50%]">
          <div className="lg:w-2/3 flex">
            <div className="border-r border-[#4d4e50] hidden lg:block w-2/6">
              <CarouselCustomNavigation
                images={["/cbt3.png", "/image2.jpeg", "/image3.jpeg", "/cbt3.png"]}
                autoplay={true}
                autoplayDelay={2000}
                transitionDuration={1.5}
              />
            </div>
            <div className="lg:w-4/6 flex justify-center items-center">
              <Image
                src="/zoin3.png"
                alt="Zion Reach Logo"
                width={300}
                height={260}
                quality={70}
                priority
              />
            </div>
          </div>
          <div className="border-l border-t border-[#4d4e50] lg:w-1/3 p-10 bg-[#28292A] relative z-40">
            <p className="text-lg md:text-md leading-relaxed lg:w-5/6 my-10">
              At Zion Reach, we create tailored communication and marketing strategies to help businesses and churches grow, engage, and thrive in the digital age.
            </p>
            <div className="mt-8 lg:w-4/6 relative">
              <HoverButton
                href="contact"
                text="Get Started"
                borderColor="border-[#fff]"
                circleColor="bg-[#FE8C12]"
                aria-label="Get Started"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 w-full h-full auto-scroll-container">
        <div className="auto-scroll-content flex flex-col">
          {renderImageRow("mb-40 opacity-10 mt-40")}
          {renderImageRow("mb-40 opacity-10 -mr-40")}
          {renderImageRow("mb-40 opacity-10 -ml-40")}
        </div>
      </div>

      <div className="absolute bottom-0 white-gradient-black-b w-full h-[20rem] z-20"></div>
    </section>
  );
};

export default HeroSection;
