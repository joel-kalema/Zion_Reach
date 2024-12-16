"use client";

import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import HoverButton from "@/components/reuseble/HoverButton";
import { BsArrowRight } from 'react-icons/bs';
import Link from "next/link";

const ParallaxImageSection = ({ images, speed, marginTop = "" }) => (
  <div className={`w-1/3 flex flex-col ${marginTop}`}>
    <Parallax speed={speed}>
      {images.map((src, index) => (
        <div key={index} className="w-full relative">
          <Image
            src={src}
            layout="responsive"
            width={200}
            height={200}
            alt={`Portfolio Image ${index}`}
            quality={100}
          />
        </div>
      ))}
    </Parallax>
  </div>
);

const Portfolio = () => {
  const cbtImages = ["/cbt1.png", "/cbt2.png", "/cbt3.png", "/cbt4.png", "/cbt5.png"];
  const qavahImages = ["/qavah1.png", "/qavah2.png", "/qavah3.png"];

  return (
    <section id="portfolio">
      <div className="">

        <div className="relative h-[50vh] mx-auto overflow-hidden z-10 flex py-10">
          <div className="absolute left-0 white-gradient-left w-1/6 h-full z-30"></div>
          <div className="absolute right-0 white-gradient-right w-1/6 h-full z-30"></div>
          <div className="flex mx-auto">
            <Image src='/zoin1.png' layout="responsive" width={150} height={300} alt='zoin logo' quality={100} className="z-20" />
            <Image src='/zoin2.png' layout="responsive" width={150} height={300} alt='zoin logo' quality={100} />
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
        <div className="px-20 py-10 flex justify-between ">
          <p className="w-2/6 text-lg">From bold ideas to stunning realities,
            we design, develop, and deliver
            experiences that inspire and captivate.</p>
          <div className="w-2/6 pl-28">
            <HoverButton
              href="#learn-more"
              text="Get Started"
              borderColor="border-[#000]"
              circleColor="bg-[#159CED]"
            />
          </div>
        </div>
        <div className="border-y px-16 py-20">
          <h2 className="text-3xl font-bold text-[#159CED] mb-6">Our Portfolio</h2>
          <p className="text-7xl text-[#8e8e8e]">Explore our best works</p>
        </div>

        <ParallaxProvider>
          <div className="flex overflow-hidden h-[150vh]">
            <ParallaxImageSection images={cbtImages} speed={60} marginTop="-mt-96" />
            <ParallaxImageSection images={qavahImages} speed={0} />
            <ParallaxImageSection images={cbtImages} speed={30} marginTop="-mt-60" />
          </div>
        </ParallaxProvider>

        <div className="border-y p-16">
          <p className="text-7xl text-[#8e8e8e]">Responsive Web-sites</p>
        </div>

        <div className="flex">
          {["CBT Ministry", "Qavah Group", "RAMAH Institute"].map((title, index) => (
            <div key={index} className="w-1/3 h-[25rem] border">
              <div className="h-[70%] border-b"></div>
              <div className="h-[30%] p-4">
                <div className="flex gap-4 items-center mb-6">
                  <div className="w-[10px] h-[10px] bg-[#FE8C12]"></div>
                  {title}
                </div>
                <Link href='#' className="flex items-center gap-2">SEE DETAILS <BsArrowRight /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
