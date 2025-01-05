import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="">
      <div className="bg-[#28292A] text-[#fff] relative z-10 w-full">
        <div className="flex">
          <div className="w-1/2 pl-20 py-16 relative">
            <div className="p-6 pb-28 bg-[#28292A] white-gradient-black-t sticky top-0 mb-20">
              <h2 className="text-3xl font-bold mb-6 text-[#159CED]">Our Services</h2>
              <p className="text-lg mb-6 w-5/6">
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
              <div className="sticky bottom-0 white-gradient-black-b h-[20rem] z-10"></div>
            </div>
          </div>
          <div className=" h-[100vh] w-1/2 sticky top-0 overflow-hidden">
            <Image src="/service.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
            <div className="text-border-rotate text-8xl mix-blend-difference -mb-20 -rotate-90 absolute -left-56 top-80">Zion Reach</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
