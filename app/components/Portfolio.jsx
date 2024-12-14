"use client"

import Image from "next/image";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const Portfolio = () => {
  return (
    <section className="" id="portfolio">
      <div className="">
        <div className="border-y p-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Portfolio</h2>
          <p className="text-7xl">Explore our best works</p>
        </div>

        <ParallaxProvider>
          <div className="flex overflow-hidden h-[150vh]">
            <div className="w-1/3 flex flex-col -mt-96">
              <Parallax speed={70}>
                <div className="w-full relative ">
                  <Image src="/cbt1.png" layout="responsive" width={200} height={200} alt="bay" quality={100} />
                </div>
                <div className="w-full relative ">
                  <Image src="/cbt2.png" layout="responsive" width={200} height={200} alt="bay" quality={100} />
                </div>
                <div className="w-full relative ">
                  <Image src="/cbt3.png" layout="responsive" width={200} height={200} alt="bay" quality={100} />
                </div>
                <div className="w-full relative ">
                  <Image src="/cbt4.png" layout="responsive" width={200} height={200} alt="bay" quality={100} />
                </div>
                <div className="w-full relative ">
                  <Image src="/cbt5.png" layout="responsive" width={200} height={200} alt="bay" quality={100} />
                </div>
              </Parallax>
            </div>

            <div className="w-1/3 flex flex-col">
              <Parallax speed={0}>
                <div className="w-full relative ">
                  <Image src="/qavah1.png" layout="responsive" width={200} height={200} alt="bay" quality={100} />
                </div>
                <div className="w-full relative ">
                  <Image src="/qavah2.png" layout="responsive" width={200} height={200} alt="bay" quality={100} />
                </div>
                <div className="w-full relative ">
                  <Image src="/qavah3.png" layout="responsive" width={200} height={200} alt="bay" quality={100} />
                </div>
              </Parallax>
            </div>

            <div className="w-1/3 flex flex-col -mt-60">
              <Parallax speed={30}>
                <div className="w-full relative ">
                  <Image src="/cbt1.png" layout="responsive" width={200} height={200} alt="bay" quality={100} />
                </div>
                <div className="w-full relative ">
                  <Image src="/cbt2.png" layout="responsive" width={200} height={200} alt="bay" quality={100} />
                </div>
                <div className="w-full relative ">
                  <Image src="/cbt3.png" layout="responsive" width={200} height={200} alt="bay" quality={100} />
                </div>
                <div className="w-full relative ">
                  <Image src="/cbt4.png" layout="responsive" width={200} height={200} alt="bay" quality={100} />
                </div>
                <div className="w-full relative ">
                  <Image src="/cbt5.png" layout="responsive" width={200} height={200} alt="bay" quality={100} />
                </div>
              </Parallax>
            </div>
          </div>
        </ParallaxProvider>

        <div className="border-y p-16">
          <p className="text-7xl">Resposive Web-sites</p>
        </div>

        <div className="flex">
          <div className="w-1/3 h-[25rem] border">
            <div className="h-[70%] border-b"></div>
            <div className="h-[30%] p-4"> CBT Ministry</div>
          </div>
          <div className="w-1/3 h-[25rem] border">
            <div className="h-[70%] border-b"></div>
            <div className="h-[30%] p-4">Qavah Groupe</div>
          </div>
          <div className="w-1/3 h-[25rem] border">
            <div className="h-[70%] border-b"></div>
            <div className="h-[30%] p-4">RAMAH Institute</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
