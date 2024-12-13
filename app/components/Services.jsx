import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="">
      <div className="bg-[#28292A] text-[#fff] relative z-10 w-full">
        <div className="flex">
          <div className="text-border-rotate text-8xl -mb-20 z-20 -rotate-90 absolute -left-52 top-80">Zion Reach</div>
          <div className="w-1/2 pl-40 py-16">
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-6 text-[#FE8C12]">Our Services</h2>
              <p className="text-lg mb-6 w-5/6">
                Zion Reach specializes in branding, website development, social media management,
                online advertising, graphic design, and short video production for businesses and churches.
              </p>
            </div>
            <div>
              <div className="p-6 shadow rounded-lg">
                <h3 className="font-bold text-lg">Branding</h3>
                <p className="w-3/4">Creating impactful identities that resonate with your audience.</p>
              </div>
              <div className="p-6 shadow rounded-lg">
                <h3 className="font-bold text-lg">Social Media</h3>
                <p className="w-3/4">Managing and growing your online audience through tailored strategies.</p>
              </div>
              <div className="p-6  shadow rounded-lg">
                <h3 className="font-bold text-lg">Websites</h3>
                <p className="w-3/4">Developing modern, responsive websites to enhance your digital presence.</p>
              </div>
            </div>
          </div>
          <div className=" h-[100vh] w-1/2 sticky top-0 overflow-hidden">
            <Image src="/service.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
