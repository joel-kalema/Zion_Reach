"use client";
import React from "react";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent
} from "@material-tailwind/react";
import { Link } from 'next-scroll';
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed top-4 lg:top-10 right-5 lg:right-16 z-50">
      <SpeedDial open={open} handler={setOpen}>
        <SpeedDialHandler>
          <IconButton size="lg" className="rounded-none">
            <AiOutlineMenu className="h-5 w-5 transition-transform group-hover:rotate-90" />
          </IconButton>
        </SpeedDialHandler>
        <SpeedDialContent className="bg-white shadow-md shadow-black/10 px-10 py-4">
          <Link to="home" className="text-[#000] hover:text-[#FE8C12] font-semibold hover:font-bold transition-all duration-300 cursor-pointer mb-3">Home</Link>
          <Link to="vision" className="text-[#000] hover:text-[#FE8C12] font-semibold hover:font-bold transition-all duration-300 cursor-pointer mb-3">Vision</Link>
          <Link to="services" className="text-[#000] hover:text-[#FE8C12] font-semibold hover:font-bold transition-all duration-300 cursor-pointer mb-3">Services</Link>
          <Link to='portfolio' className="text-[#000] hover:text-[#FE8C12] font-semibold hover:font-bold transition-all duration-300 cursor-pointer mb-3">Portfolio</Link>
          <Link to='contact' className="text-[#000] hover:text-[#FE8C12] font-semibold hover:font-bold transition-all duration-300 cursor-pointer mb-3">Contact</Link>
        </SpeedDialContent>
      </SpeedDial>
    </div>
  );
}
