"use client"

import Image from "next/image";
import HoverButton from "@/components/reuseble/HoverButton";
import CarouselCustomNavigation from '@/components/reuseble/caroucelle';
import { LuArrowUpRight } from "react-icons/lu";

const HeroSection = () => {
  return (
    <section className="relative bg-[#28292A] text-white h-[100vh] overflow-hidden">
      <div className="absolute white-gradient-black-t top-0 h-[20rem] w-full z-20 opacity-30"></div>

      <div className="absolute top-0 left-0 w-full h-full z-30">
        <div className="flex  h-[50%]">
          <div className="border-b border-[#4d4e50] border-r w-2/3 flex justify-end items-end pr-10">
            <div>
              <h1 className="text-5xl md:text-9xl font-bold">
                Zion Reach
              </h1>
              <p className="mb-4 flex items-center gap-2">we bring your imagination to life <LuArrowUpRight /></p>
            </div>
          </div>
          <div className="w-1/3"></div>
        </div>
        <div className="flex h-[50%]">
          <div className="w-2/3 flex">
            <div className="border-r border-[#4d4e50] w-2/6">
              <CarouselCustomNavigation />
            </div>
            <div className=" w-4/6 flex justify-center items-center">
              <Image src="/zoin3.png" alt="Zion Reach Logo" width={300} height={260} quality={70} />
            </div>
          </div>
          <div className="border-l border-t border-[#4d4e50] w-1/3 p-6 bg-[#28292A] relative z-40">
            <p className="text-lg md:text-xl leading-relaxed w-4/5 my-10">
              Empowering communities through sustainable solutions, innovation, and collaboration for a better tomorrow.
            </p>
            <div className="mt-8 w-4/6 relative">
              <HoverButton
                href="#learn-more"
                text="Get Started"
                borderColor="border-[#fff]"
                circleColor="bg-[#FE8C12]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 w-full h-full auto-scroll-container">
        <div className="auto-scroll-content flex flex-col">
          <div className="flex justify-around items-center mb-40 opacity-10">
            <Image src="/video1.png" alt="Video 1" width={300} height={200} quality={10} className="mt-40" />
            <Image src="/video2.png" alt="Video 2" width={300} height={200} quality={10} />
            <Image src="/video3.png" alt="Video 3" width={300} height={200} quality={10} />
          </div>
          <div className="flex justify-around items-center mb-40 opacity-10 -mr-40">
            <Image src="/video1.png" alt="Video 1" width={300} height={200} quality={10} className="mt-40 " />
            <Image src="/video2.png" alt="Video 2" width={300} height={200} quality={10} className="blur-sm" />
            <Image src="/video3.png" alt="Video 3" width={300} height={200} quality={10} />
          </div>

          <div className="flex justify-around mb-40 opacity-10 -ml-40">
            <Image src="/video1.png" alt="Video 1" width={300} height={200} quality={10} />
            <Image src="/video2.png" alt="Video 2" width={300} height={200} quality={10} />
            <Image src="/video3.png" alt="Video 3" width={300} height={200} quality={10} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 white-gradient-black-b w-full h-[20rem] z-20"></div>
    </section>
  );
};

export default HeroSection;