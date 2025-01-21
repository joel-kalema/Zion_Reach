import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import CarouselCustomNavigation from "@/components/reuseble/caroucelle";
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
    <section id="services" className="lg:py-40 relative border-b overflow-hidden">
      <div className="w-5/6 mx-auto">
        <h1 className="text-3xl font-bold mb-6 sticky top-0 white-gradient-b z-10">Our Services</h1>
        <p>We bring your vision to life with:</p>
      </div>

      <div className="w-[10rem] h-[12rem] lg:w-[30rem] lg:h-[40rem] bg_1 rounded-full blur-3xl absolute z-10 top-[40%] right-0 opacity-40"></div>
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
          <div className="lg:flex h-40 lg:h-80 lg:px-4">
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


        <div className="border-y lg:flex gap-10">
          <p className="text-xs lg:text-lg font-bold border-t-4 border-[#FE8C12] text-[#FE8C12] uppercase w-1/5">Social Media</p>
          <div>
            <h1 className="w-5/6 text-md lg:text-4xl font-bold mb-4 lg:mb-10">Top Social media platforms for marketing</h1>
            <p className="lg:w-4/6">
              Zion Reach is dedicated to providing creative communication services that make a difference.
              We help our clients grow through professional content creation, strategic marketing,
              and building authentic connections with their audiences.
            </p>
          </div>
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
