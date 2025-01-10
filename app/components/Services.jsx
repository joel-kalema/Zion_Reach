import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import CarouselCustomNavigation from "@/components/reuseble/caroucelle";

// Dynamic import for icons to optimize bundle size
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
    <section id="services" className="py-40 relative border-b overflow-hidden">
      <div className="w-[30rem] h-[40rem] bg_1 rounded-full blur-3xl absolute z-10 top-[40%] right-0 opacity-40"></div>
      <div className="w-full h-20"></div>
      <div className="w-5/6 border-x mx-auto h-full relative z-20">
        <div className="border-t -py-2">
          <div className="border-y flex gap-10">
            <p className="font-bold border-t-4 border-[#FE8C12] text-[#FE8C12]">WEBSITES</p>
            <div>
              <h1 className="w-5/6 text-4xl font-bold mb-10">
                Developing modern, responsive websites to enhance your digital presence.
              </h1>
              <p>Innovative designs with optimized performance to deliver seamless, responsive interfaces.</p>
            </div>
          </div>
          <div className="h-20 border-b"></div>
          <div className="flex h-80 px-4">
            <div className="h-full relative w-3/5 border-l">
              <CarouselCustomNavigation
                images={["/belekeweb.png", "/beleke4.png", "/qavah.png", "/belekeweb.png"]}
                autoplay
                autoplayDelay={2000}
                transitionDuration={1.5}
              />
            </div>
            <div className="h-full w-2/5 flex justify-center items-center">
              <div className="flex w-40 h-40 gap-2 flex-wrap">
                <div className="w-20 h-20 p-4 border"><div className="bg-[#a8a8a8] h-full w-full"></div></div>
                <div className="w-20 h-20 p-4 border-2 border-[#FE8C12]"><div className="bg-[#FE8C12] h-full w-full"></div></div>
                <div className="w-20 h-20 p-4 border"><div className="bg-[#a8a8a8] h-full w-full"></div></div>
                <div className="w-20 h-20 p-4 border-2 border-[#159CED]"><div className="bg-[#159CED] h-full w-full"></div></div>
              </div>
            </div>
          </div>
          <div className="h-40 border-t"></div>
        </div>

        <div className="border-y flex gap-10">
          <p className="font-bold border-t-4 border-[#FE8C12] text-[#FE8C12]">SOCIALS</p>
          <div>
            <h1 className="w-3/6 text-4xl font-bold mb-10">Top Social media platforms for marketing</h1>
            <p className="w-4/6">
              Zion Reach is dedicated to providing creative communication services that make a difference. 
              We help our clients grow through professional content creation, strategic marketing, 
              and building authentic connections with their audiences.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between my-20 bg-white">
          {socialItems.map(({ name, Icon }) => (
            <div key={name} className="w-1/4 py-10 border flex items-center flex-col">
              <div className="text-3xl"><Icon /></div>
              <p className="font-bold">{name}</p>
            </div>
          ))}
        </div>

        <div className="border-y -py-2 bg-white">
          <div className="border-y flex gap-10">
            <p className="font-bold border-t-4 border-[#FE8C12] text-[#FE8C12]">ABOUT</p>
            <div>
              <h1 className="w-3/6 text-4xl font-bold mb-10">Expert the best marketing services</h1>
              <p className="w-4/6">
                Zion Reach empowers businesses and churches with creative, impactful communication solutions. 
                Through innovative marketing and professional content creation, we help connect audiences and drive growth.
              </p>
            </div>
          </div>
          <p className="w-3/6 text-4xl font-bold mb-20"></p>
          <div className="flex">
            {[
              { count: "6", label: "Years of experience" },
              { count: "82", label: "Satisfaction clients" },
              { count: "275", label: "Project completed" },
            ].map(({ count, label }, idx) => (
              <div key={idx} className="flex items-center w-1/3 gap-4 border-y">
                <div className="border-2 border-[#FE8C12] w-20 h-20 rounded-full flex justify-center items-center">
                  <div className="w-8 h-8 bg-[#FE8C12] rounded-full"></div>
                </div>
                <p className="text-xl">
                  <span className="text-6xl">{count}</span> {label}
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
