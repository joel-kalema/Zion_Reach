import Image from "next/image";
import HoverButton from "@/components/reuseble/HoverButton";
import { BsArrowRight } from "react-icons/bs";

const HeroSection = () => {
  return (
    <section className="relative bg-[#055DE2] text-white h-[100vh] flex items-center justify-center">
      <div className="w-4/6 flex gap-10">
        <Image src="/home.png" alt="Zion Reach Logo" width={400} height={400} />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-8xl font-bold mb-4">
            Zion Reach
          </h1>
          <p className="text-lg md:text-xl leading-relaxed w-4/5 my-10">
            Empowering communities through sustainable solutions, innovation, and collaboration for a better tomorrow.
          </p>
          <div className="mt-8">
            <HoverButton
              href="#learn-more"
              text="Learn More"
              borderColor="border-[#fff]"
              circleColor="bg-[#FE8C12]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
