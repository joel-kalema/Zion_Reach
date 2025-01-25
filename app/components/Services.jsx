import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import CarouselCustomNavigation from "@/components/reuseble/caroucelle";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const icons = {
  Tiktok: dynamic(() => import("react-icons/pi").then(mod => mod.PiTiktokLogoLight)),
  Instagram: dynamic(() => import("react-icons/pi").then(mod => mod.PiInstagramLogoLight)),
  Linkedin: dynamic(() => import("react-icons/pi").then(mod => mod.PiLinkedinLogoThin)),
  Facebook: dynamic(() => import("react-icons/pi").then(mod => mod.PiFacebookLogoThin)),
  Snapchat: dynamic(() => import("react-icons/pi").then(mod => mod.PiSnapchatLogoLight)),
  Youtube: dynamic(() => import("react-icons/pi").then(mod => mod.PiYoutubeLogo)),
  Threads: dynamic(() => import("react-icons/pi").then(mod => mod.PiThreadsLogo)),
  X: dynamic(() => import("react-icons/ri").then(mod => mod.RiTwitterXFill)),
};

const socials = [
  "Tiktok", "Instagram", "Linkedin", "Facebook",
  "Snapchat", "Youtube", "Threads", "X"
];

const Services = () => {
  const socialItems = useMemo(() =>
    socials.map(name => ({
      name,
      Icon: icons[name]
    })), []);

  return (
    <section id="services" className="lg:py-40 relative border-b">
      <div className="w-5/6 mx-auto sticky top-0 z-30 white-gradient-b pb-20 pt-10">
        <h1 className="text-3xl font-bold mb-6 z-10">Our Services</h1>
        <p>We bring your vision to life with:</p>
      </div>

      <div className="w-[10rem] h-[12rem] lg:w-[30rem] lg:h-[40rem] bg_1 rounded-full blur-3xl absolute z-10 top-[10%] right-0 opacity-40"></div>
      <div className="w-[10rem] h-[12rem] lg:w-[30rem] lg:h-[40rem] bg_1 rounded-full blur-3xl absolute z-10 bottom-[10%] left-0 opacity-40"></div>

      <div className="w-full h-20"></div>
      <div className="w-5/6 border-x mx-auto h-full relative z-20">
        <div className="border-t -py-2">
          <div className="border-y lg:flex gap-10">
            <p className="text-xs lg:text-lg font-bold border-t-4 border-[#FE8C12] text-[#FE8C12]">WEBSITES</p>
            <div>
              <h1 className="w-5/6 text-md lg:text-4xl font-bold mb-4 lg:mb-10">
                We create professional websites that turn your visitors into customers for your business.
              </h1>
              <p>Innovative designs with optimized performance to deliver seamless, responsive interfaces.</p>
            </div>
          </div>
          <div className="h-10 lg:h-20 border-b"></div>
          <div className="lg:flex h-40 lg:h-80 lg:px-4 bg-white">
            <div className="h-full relative lg:w-3/5 border-l">
              <CarouselCustomNavigation
                images={["/belekeweb.png", "/beleke4.png", "/qavah.png", "/belekeweb.png"]}
                autoplay
                autoplayDelay={2000}
                transitionDuration={1.5}
              />
            </div>
            <div className="h-full w-2/5 hidden lg:flex justify-center items-center mb-10">
              <div className="flex w-40 h-40 gap-2 flex-wrap">
                <div className="w-20 h-20 p-4 border-2 border-[#FE8C12]"><div className="bg-[#FE8C12] h-full w-full"></div></div>
                <div className="w-20 h-20 p-4 border"><div className="bg-[#a8a8a8] h-full w-full"></div></div>
                <div className="w-20 h-20 p-4 border-2 border-[#159CED]"><div className="bg-[#159CED] h-full w-full"></div></div>
              </div>
            </div>
          </div>
          <div className="h-10 lg:h-20 border-t"></div>
        </div>

        <div className="border-y lg:flex gap-10">
          <p className="text-xs lg:text-lg font-bold border-t-4 border-[#FE8C12] text-[#FE8C12] uppercase">Social Media</p>
          <div>
            <h1 className="text-md lg:text-4xl font-bold mb-4 lg:mb-10">Creative Content & Social Media Management</h1>
            <p className="lg:w-4/6">
              Engaging social media content, eye-catching graphics, and short videos to boost your online presence.
            </p>
          </div>
        </div>

        <div className="lg:flex flex-row-reverse my-10 lg:my-20 border-y">
          <div className="h-[20vh] lg:h-[50vh] lg:w-1/2 overflow-hidden relative">
            <Image src="/content.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} priority />
          </div>
          <div className="lg:w-1/2 px-4 lg:px-10 py-4 lg:py-14">
            <h1>Boost your brand with dynamic and captivating content:</h1>
            <ul className="pl-5 mt-6">
              <li className="flex items-center gap-3"><IoCheckmarkDoneOutline className="text-[#FE8C12]" />Professional YouTube thumbnails</li>
              <li className="flex items-center gap-3"><IoCheckmarkDoneOutline className="text-[#FE8C12]" />Engaging Social Media Posts</li>
              <li className="flex items-center gap-3"><IoCheckmarkDoneOutline className="text-[#FE8C12]" />Short Promotional Videos</li>
              <li className="flex items-center gap-3"><IoCheckmarkDoneOutline className="text-[#FE8C12]" />Eye-Catching Graphics</li>
              <li className="flex items-center gap-3"><IoCheckmarkDoneOutline className="text-[#FE8C12]" />Custom Content Strategies</li>
            </ul>
          </div>
        </div>


        <div className="border-y lg:flex gap-10">
          <p className="text-xs lg:text-lg font-bold border-t-4 border-[#FE8C12] text-[#FE8C12] uppercase">Elevation</p>
          <div>
            <h1 className="text-md lg:text-4xl font-bold mb-4 lg:mb-10">Digital Strategy & Business Consulting</h1>
            <p className="lg:w-4/6">
              Targeted ad campaigns and tailored growth strategies for businesses and churches to maximize reach and impact.
            </p>
          </div>
        </div>

        <div className="lg:flex my-10 lg:my-20 border-y bg-white">
          <div className="h-[20vh] lg:h-[50vh] lg:w-1/2 overflow-hidden relative">
            <Image src="/analitics.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} priority />
          </div>

          <div className="lg:w-1/2 px-4 lg:px-10 py-4 lg:py-14">
            <h1>Empower your brand with impactful, data-driven strategies:</h1>
            <ul className="pl-5 mt-6">
              <li className="flex items-center gap-3"><IoCheckmarkDoneOutline className="text-[#FE8C12]" />Targeted Digital Ad Campaigns</li>
              <li className="flex items-center gap-3"><IoCheckmarkDoneOutline className="text-[#FE8C12]" />Growth Strategy for Businesses & Churches</li>
              <li className="flex items-center gap-3"><IoCheckmarkDoneOutline className="text-[#FE8C12]" />Brand Identity & Messaging Consultation</li>
              <li className="flex items-center gap-3"><IoCheckmarkDoneOutline className="text-[#FE8C12]" />Market Trend Analysis & Insights</li>
            </ul>
          </div>
        </div>


        <div className="border-y">
          <h1 className="w-5/6 text-md lg:text-4xl font-bold mb-4 lg:mb-10">Top Social media platforms for marketing</h1>
          {/* <p className="lg:w-4/6">
              Zion Reach is dedicated to providing creative communication services that make a difference.
              We help our clients grow through professional content creation, strategic marketing,
              and building authentic connections with their audiences.
            </p> */}
        </div>


        <div className="flex flex-wrap justify-between my-10 lg:my-20 bg-white">
          {socialItems.map(({ name, Icon }) => (
            <div key={name} className="w-1/4 py-2 lg:py-10 border flex items-center flex-col">
              <div className="text-xl lg:text-3xl"><Icon /></div>
              <p className="text-xs lg:font-bold">{name}</p>
            </div>
          ))}
        </div>

        <div className="border-y -py-2 bg-white">
          <div className="border-y lg:flex gap-10">
            <p className="text-xs lg:text-lg font-bold border-t-4 border-[#FE8C12] text-[#FE8C12]">ABOUT</p>
            <div>
              <h1 className="w-5/6 text-md lg:text-4xl font-bold mb-4 lg:mb-10">Expert the best marketing services</h1>
              <p className="lg:w-4/6">
                Zion Reach empowers businesses and churches with creative, impactful communication solutions.
                Through innovative marketing and professional content creation, we help connect audiences and drive growth.
              </p>
            </div>
          </div>
          <p className="w-3/6 text-4xl font-bold mb-20"></p>
          <div className="lg:flex">
            {[
              { count: "6", label: "Years of experience" },
              { count: "82", label: "Satisfaction clients" },
              { count: "275", label: "Project completed" },
            ].map(({ count, label }, idx) => (
              <div key={idx} className="flex items-center lg:w-1/3 gap-4 border-y">
                <div className="border-2 border-[#FE8C12] w-10 h-10 lg:w-20 lg:h-20 rounded-full flex justify-center items-center">
                  <div className="w-4 h-4 lg:w-8 lg:h-8 bg-[#FE8C12] rounded-full"></div>
                </div>
                <p className="text-xl">
                  <span className="text-2xl lg:text-6xl">{count}</span> {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);
