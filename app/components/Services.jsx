// import Image from "next/image";
import CarouselCustomNavigation from '@/components/reuseble/caroucelle';
import { PiTiktokLogoLight, PiInstagramLogoLight, PiLinkedinLogoThin, PiFacebookLogoThin, PiSnapchatLogoLight, PiYoutubeLogo, PiThreadsLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";

const socials = [
  {
    name: "Tiktok",
    icon: <PiTiktokLogoLight />
  },
  {
    name: "Instagram",
    icon: <PiInstagramLogoLight />
  },
  {
    name: "Linkedin",
    icon: <PiLinkedinLogoThin />
  },
  {
    name: "Facebook",
    icon: <PiFacebookLogoThin />
  },
  {
    name: "Snapchat",
    icon: <PiSnapchatLogoLight />
  },
  {
    name: "Youtube",
    icon: <PiYoutubeLogo />
  },
  {
    name: "Threads",
    icon: <PiThreadsLogo />
  },
  {
    name: "X",
    icon: <RiTwitterXFill />
  }
]


const Services = () => {
  return (
    <section id="services" className="py-40 relative border-b overflow-hidden">
      <div className="w-[30rem] h-[40rem] bg_1 rounded-full blur-3xl absolute z-10 top-[40%] right-0 opacity-40"></div>
      <div className="w-full h-20"></div>
      <div className="w-5/6 border-x mx-auto h-full relative z-20">

        <div className="border-t -py-2">
          <div className="border-y flex gap-10">
            <p className="font-bold border-t-4 border-[#FE8C12] text-[#FE8C12]">WEBSITES</p>
            <div>
              <h1 className="w-5/6 text-4xl font-bold mb-10">Developing modern, responsive websites to enhance your digital presence.</h1>
              <p>Innovative designs with optimized performance to deliver seamless, responsive interfaces.</p>
            </div>
          </div>
          <div className="h-20 border-b"></div>
          <div className="flex h-80 px-4">
            <div className="h-full relative w-3/5 border-l">
              <CarouselCustomNavigation
                images={["/belekeweb.png", "/beleke4.png", "/qavah.png", "/belekeweb.png"]}
                autoplay={true}
                autoplayDelay={2000}
                transitionDuration={1.5}
              />
              {/* <Image src="/web.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} /> */}
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
            <h1 className="w-3/6  text-4xl font-bold mb-10">Top Social media platforms for marketing</h1>
            <p className="w-4/6">Zion Reach is dedicated to providing creative communication services that make a difference. We help our clients grow through professional content creation, strategic marketing, and building authentic connections with their audiences.</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between my-20 bg-white">
          {
            socials.map((item, index) => (
              <div key={index} className="w-1/4 py-10 border flex items-center flex-col">
                <div className="text-3xl">{item.icon}</div>
                <p className="font-bold">{item.name}</p>
              </div>
            ))
          }
        </div>

        <div className="border-y -py-2 bg-white">
          <div className="border-y flex gap-10">
            <p className="font-bold border-t-4 border-[#FE8C12] text-[#FE8C12]">ABOUT</p>
            <div>
              <h1 className="w-3/6  text-4xl font-bold mb-10">Expert the best marketing services</h1>
              <p className="w-4/6">Zion Reach empowers businesses and churches with creative, impactful communication solutions. Through innovative marketing and professional content creation, we help connect audiences and drive growth.</p>
            </div>
          </div>
          <p className="w-3/6 text-4xl font-bold mb-20"></p>
          <div className="flex">
            <div className="flex items-center w-1/3 gap-4 border-y">
              <div className="border-2 border-[#FE8C12] w-20 h-20 rounded-full flex justify-center items-center">
                <div className="w-8 h-8 bg-[#FE8C12] rounded-full"></div>
              </div>
              <p className="text-xl"><span className="text-6xl">6</span>Years of experience</p>
            </div>

            <div className="flex items-center w-1/3 gap-4 border-y">
              <div className="border-2 border-[#FE8C12] w-20 h-20 rounded-full flex justify-center items-center">
                <div className="w-8 h-8 bg-[#FE8C12] rounded-full"></div>
              </div>
              <p className="text-xl"><span className="text-6xl">82</span>Satisfaction clients</p>
            </div>

            <div className="flex items-center w-1/3 gap-4 border-y">
              <div className="border-2 border-[#FE8C12] w-20 h-20 rounded-full flex justify-center items-center">
                <div className="w-8 h-8 bg-[#FE8C12] rounded-full"></div>
              </div>
              <p className="text-xl"><span className="text-6xl">275</span> Project completed</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


{/* <div className="bg-[#28292A] text-[#fff] relative z-10 w-full">
  <div className="flex">
    <div className="w-1/2 pl-20 pt-16 relative">
      <div className="p-6 pb-28 bg-[#28292A] white-gradient-black-t sticky top-0 mb-20">
        <h2 className="text-3xl font-bold mb-6 text-[#159CED]">Our Services</h2>
        <p className="text-2xl mb-6 w-5/6">
          Zion Reach specializes in branding, website development, social media management,
          online advertising, graphic design, and short video production for businesses and churches.
        </p>
      </div>
      <div>
        <div className="p-6 mb-20">
          <h3 className="text-7xl">Branding</h3>
          <p className="w-3/4">Creating impactful identities that resonate with your audience.</p>
        </div>
        <div className="p-6 mb-20">
          <h3 className="text-7xl">Social Media</h3>
          <p className="w-3/4">Managing and growing your online audience through tailored strategies.</p>
        </div>
        <div className="p-6">
          <h3 className="text-7xl">Websites</h3>
          <p className="w-3/4">Developing modern, responsive websites to enhance your digital presence.</p>
        </div>
        <div className="sticky bottom-0 white-gradient-black-b h-[13rem] z-10"></div>
      </div>
    </div>
    <div className=" h-[100vh] w-1/2 sticky top-0 overflow-hidden p-10">
      <Image src="/service.png" layout="fill" objectFit="cover" alt="bay" quality={100} />
    </div>
  </div>
</div> */}