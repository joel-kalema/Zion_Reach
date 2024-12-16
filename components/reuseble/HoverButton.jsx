import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const HoverButton = ({ href, text, borderColor, circleColor }) => {
  return (
    <a
      href={href}
      className={`group px-3 py-3 text-2xl rounded-full flex items-center justify-between border ${borderColor}`}
    >
      <p className="ml-6">{text}</p>
      <div
        className={`h-[4rem] w-[4rem] rounded-full flex items-center transition-all duration-300 ${circleColor}`}
      >
        <BsArrowRight className="mix-blend-difference text-4xl transition-all duration-300 group-hover:ml-0 -ml-4" />
      </div>
    </a>
  );
};

export default HoverButton;
