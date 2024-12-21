'use client'

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export default function CarouselCustomNavigation() {
    return (
        <Carousel
            className=""
            transition={{ duration: 1 }}
            autoplay={true}
            autoplayDelay={2000}
            loop={true}
            prevArrow={false}
            nextArrow={false}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <div className=" w-full overflow-hidden">
                <Image src="/image1.JPEG" layout="fill" objectFit="cover" alt="bay" quality={100} />
            </div>
            <div className=" w-full overflow-hidden">
                <Image src="/image2.PNG" layout="fill" objectFit="cover" alt="bay" quality={100} />
            </div>
            <div className=" w-full overflow-hidden">
                <Image src="/image3.PNG" layout="fill" objectFit="cover" alt="bay" quality={100} />
            </div>
            <div className=" w-full overflow-hidden">
                <Image src="/image1.JPEG" layout="fill" objectFit="cover" alt="bay" quality={100} />
            </div>
        </Carousel>
    );
}