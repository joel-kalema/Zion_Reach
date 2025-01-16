"use client";
import { useEffect, memo } from "react";
import AOS from "aos";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const ParallaxImageSection = memo(({ images, speed, marginTop }) => (
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
            quality={80}
            loading="lazy"
          />
        </div>
      ))}
    </Parallax>
  </div>
));

ParallaxImageSection.displayName = 'ParallaxImageSection';

const Portfolio = () => {
  const cbtImages = ["/cbt1.png", "/cbt2.png", "/cbt3.png", "/cbt4.png", "/cbt5.png"];
  const qavahImages = ["/qavah1.png", "/qavah3.png", "/qavah3.png"];

  useEffect(() => {
    AOS.init();
  }, []);

  const projectWeb = [
    {
      title: "CBT Ministry",
      link: "https://christopherbeleke.com/",
      image: "/belekeweb.png"
    },
    {
      title: "Qavah Groupe",
      link: "https://christopherbeleke.com/",
      image: "/qavah.png"
    },
    {
      title: "RAMAH Institute",
      link: "https://christopherbeleke.com/",
      image: "/beleke4.png"
    }
  ]

  return (
    <section id="portfolio">
      <div>
        <div className="h-[90vh] lg:h-[120vh] relative flex flex-wrap">
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className={`w-1/2 h-[50%] border-b border-r ${i % 2 === 0 ? "overflow-hidden" : ""}`}></div>
          ))}

          <ParallaxProvider>
            <div className="absolute top-0 w-full left-0">
              <div className="w-5/6 lg:w-3/6 relative z-30 text-2xl lg:text-5xl mx-auto my-60">
                <Parallax speed={-15}>
                  <p className='font-semibold'>
                    Revolutionize <span data-aos="zoom-in-down">creative work</span> for companies with
                    <span data-aos="zoom-in-down"> style</span> and
                    <span data-aos="zoom-in-down"> substance</span>
                  </p>
                </Parallax>
                <Parallax speed={-15}>
                  <p className="w-4/6 text-xs lg:text-lg mt-28 lg:mt-20">
                    From bold ideas to stunning realities, we design, develop, and deliver experiences that inspire and captivate.
                  </p>
                </Parallax>
              </div>
            </div>
          </ParallaxProvider>

          <div className="absolute top-0 h-full w-full overflow-hidden z-20 group">
            <div className="slow-scroll-container h-full">
              <div className="slow-scroll-content h-full w-5/6 flex items-center justify-between">
                <div className="h-[10rem] w-[7rem] lg:h-[25rem] lg:w-[20rem] relative overflow-hidden rotate-6 hover:w-[30rem] hover:h-[35rem] transition-all duration-[1s]">
                  <Image
                    src="/girl.jpeg"
                    layout="fill"
                    objectFit="cover"
                    alt="bay"
                    priority
                    className="group-hover:z-40"
                  />
                </div>
                <div className="mt-52 blur-lg h-[7rem] lg:h-[15rem] w-[5rem] lg:w-[15rem] relative hover:z-40 hover:blur-0 overflow-hidden -rotate-6 hover:w-[15rem] hover:h-[20rem] transition-all duration-[1s]">
                  <Image
                    className=""
                    src="/girlart.jpeg"
                    layout="fill"
                    objectFit="cover"
                    alt="bay"
                    quality={50}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[40vh] mx-auto overflow-hidden z-10 flex py-10">
          <div className="absolute left-0 white-gradient-left w-1/6 h-full z-30"></div>
          <div className="absolute right-0 white-gradient-right w-1/6 h-full z-30"></div>
          <div className="flex mx-auto w-1/6">
            <Image src='/zoin1.png' layout="responsive" width={100} height={200} alt='zoin logo' quality={100} className="relative z-30" />
            <Image src='/zoin2.png' layout="responsive" width={100} height={200} alt='zoin logo' />
          </div>
          <div className="absolute top-0 left-0 flex items-center w-full h-full whitespace-nowrap scale-150">
            <div className="flex animate-scroll relative">
              {Array(5).fill("we bring your imagination to life").map((text, i) => (
                <div key={i} className="m-0 text-3xl text-[#000] mx-8 transition-all duration-1000 ease-in-out z-10 font-semibold flex items-center gap-5">
                  <p>{text}</p>
                  <div className="relative w-[8rem] h-[4rem] overflow-hidden rounded-full">
                    <Image src='/solution.jpeg' layout="fill" objectFit="cover" alt="bay" loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-y px-28 py-20">
          <h2 className="text-3xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-xl text-[#8e8e8e]">Explore our best works</p>
        </div>

        <ParallaxProvider>
          <div className="flex overflow-hidden h-[120vh] relative w-5/6 mx-auto">
            <ParallaxImageSection images={cbtImages} speed={60} marginTop="-mt-96" />
            <ParallaxImageSection images={qavahImages} speed={0} />
            <ParallaxImageSection images={cbtImages} speed={30} marginTop="-mt-60" />
          </div>
        </ParallaxProvider>

        <div className="border-y py-16 w-5/6 mx-auto">
          <p className="text-xl text-[#8e8e8e]">Responsive Websites</p>
        </div>

        <div className="flex pb-20">
          {projectWeb.map((item, index) => (
            <div key={index} className="w-1/3 h-[25rem] border" data-aos="fade-up" data-aos-duration={`${index}000`}>
              <div className="h-[70%] border-b flex justify-end items-end relative overflow-hidden">
                <div className="w-[15rem] h-[15rem] bg_1 rounded-full blur-3xl absolute z-10 -top-10 -left-10 opacity-60"></div>
                <div className="h-[80%] w-[90%] relative z-20">
                  <Image src={item.image} layout="fill" objectFit="cover" alt="project" quality={100} />
                </div>
              </div>
              <div className="h-[30%] pl-14 py-4">
                <div className="flex gap-4 items-center mb-6 text-xl font-bold">
                  <div className="w-[10px] h-[10px] bg-[#FE8C12]"></div>
                  {item.title}
                </div>
                <Link href={item.link} className="flex items-center gap-2">SEE DETAILS <BsArrowRight /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
