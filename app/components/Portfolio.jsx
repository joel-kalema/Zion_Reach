"use client";
import { useEffect } from 'react';
import AOS from "aos";
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

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section id="portfolio">
      <div className="">
        <div className="h-[100vh] relative flex flex-wrap">
          <div className="w-1/2 h-[50%] border-b border-r overflow-hidden">
            <div className="font-bold text-[#28292a11] text-[12rem] pl-20 p-10 mt-[20%]">Reach</div>
          </div>
          <div className="w-1/2 h-[50%] border-b border-r"></div>
          <div className="w-1/2 h-[50%] border-b border-r"></div>
          <div className="w-1/2 h-[50%] border-b border-r overflow-hidden">
            <div className="font-bold text-[#28292a11] text-[12rem] pl-20 p-10 mt-[20%]">Zion</div>
          </div>

          <div className="absolute top-0 w-full left-0">
            <div className="w-4/6 relative font-semibold z-30 text-7xl text-center mx-auto my-40">
              Revolutionize   <span data-aos="zoom-in-down">creative work</span> for companies<span className='mx-10'></span> with <span data-aos="zoom-in-down">style</span> and <span data-aos="zoom-in-down">substance</span>
            </div>

            <div className="px-20 py-10 flex justify-between z-50">
              <p className="w-2/6 text-lg mix-blend-difference" data-aos="zoom-in">From bold ideas to stunning realities,
                we design, develop, and deliver
                experiences that inspire and captivate.</p>
              <div className="w-2/6 pl-28 relative z-40">
                <HoverButton
                  href="#learn-more"
                  text="Get Started"
                  borderColor="border-[#000]"
                  circleColor="bg-[#055DE2]"
                />
              </div>
            </div>
          </div>

          <div className="absolute top-0 h-full w-full overflow-hidden z-20 group">
            <div className="slow-scroll-container h-full">
              <div className="slow-scroll-content h-full w-5/6 flex items-center justify-between">
                <div className="h-[25rem] w-[20rem] relative overflow-hidden rotate-6 hover:w-[30rem] hover:h-[35rem] transition-all duration-3000">
                  <Image
                    src="/girl.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="bay"
                    quality={50}
                    className=" group-hover:z-40"
                  />
                </div>

                <div className="h-[15rem] mt-52 blur-lg w-[15rem] relative hover:z-40 hover:blur-0 overflow-hidden -rotate-6 hover:w-[15rem] hover:h-[20rem] transition-all duration-3000">
                  <Image
                    src="/girlart.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="bay"
                    quality={50}
                    className=" group-hover:z-40"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-y px-16 py-20">
          <h2 className="text-3xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-lg text-[#8e8e8e]">Explore our best works</p>
        </div>

        <ParallaxProvider>
          <div className="flex overflow-hidden h-[120vh] relative w-5/6 mx-auto">
            <ParallaxImageSection images={cbtImages} speed={60} marginTop="-mt-96" />
            <ParallaxImageSection images={qavahImages} speed={0} />
            <ParallaxImageSection images={cbtImages} speed={30} marginTop="-mt-60" />
          </div>
        </ParallaxProvider>

        <div className="border-y py-16 w-5/6 mx-auto">
          <p className="text-7xl text-[#8e8e8e]">Responsive Web-sites</p>
        </div>

        <div className="flex flex-wrap">
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
