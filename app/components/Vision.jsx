import Image from "next/image";
import { BiAward } from "react-icons/bi";
const Vision = () => {
  return (
    <section id="vision" className="border mx-auto flex">
      <div className="h-[100vh] w-1/2 hidden lg:block sticky top-0 overflow-hidden">
        <Image src="/vision.jpg" layout="fill" objectFit="cover" alt="bay" quality={100} priority />
      </div>
      <div className="px-8 lg:pl-16 lg:w-1/2">
        <h3 className="text-3xl font-bold mb-6 sticky top-0 white-gradient-b py-20 lg:py-40 z-10">Our Vision</h3>
        <ul className=" text-lg  mb-10 lg:mb-0 overflow-y-auto">
          <li className="lg:my-28 my-10 flex items-start gap-2">
            <BiAward className="text-6xl text-[#FE8C12]" />
            <div>
              <h1 className="text-4xl lg:text-7xl">Excellence</h1>
              <p className="text-xl lg:w-4/6">Delivering top-quality results with every project.</p>
            </div>
          </li>
          <li className="lg:my-28 my-10 flex items-start gap-2">
            <BiAward className="text-6xl text-[#FE8C12]" />
            <div>
              <h1 className="text-4xl lg:text-8xl">Love</h1>
              <p className="text-xl lg:w-4/6">Caring deeply about our clients and the communities we serve.</p>
            </div>
          </li>
          <li className="lg:my-28 my-10 flex items-start gap-2">
            <BiAward className="text-6xl text-[#FE8C12]" />
            <div>
              <h1 className="text-4xl lg:text-8xl">Creativity</h1>
              <p className="text-xl lg:w-4/6">Innovating unique and engaging content that stands out.</p>
            </div>
          </li>
          <li className="lg:my-28 my-10 flex items-start gap-2">
            <BiAward className="text-6xl text-[#FE8C12]" />
            <div>
              <h1 className="text-4xl lg:text-8xl">Impact</h1>
              <p className="text-xl lg:w-4/6">Making a meaningful difference through powerful, purpose-driven communication.</p>
            </div>
          </li>
        </ul>
        <div className="sticky hidden lg:block bottom-0 white-gradient-t pb-0 pt-40 z-10"></div>
      </div>
    </section>
  );
};

export default Vision;
