'use client';

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const CarouselCustomNavigation = ({ images, autoplay = true, autoplayDelay = 2000, transitionDuration = 1 }) => {
    return (
        <Carousel
            className=""
            transition={{ duration: transitionDuration }}
            autoplay={autoplay}
            autoplayDelay={autoplayDelay}
            loop={true}
            prevArrow={false}
            nextArrow={false}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            {images.map((imageSrc, index) => (
                <div key={index} className="w-full overflow-hidden">
                    <Image src={imageSrc} layout="fill" objectFit="cover" alt={`carousel-image-${index}`} quality={100} />
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselCustomNavigation;
