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
      <div className="fixed top-4 lg:top-10 right-14 z-50">
        <SpeedDial open={open} handler={setOpen}>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <AiOutlineMenu className="h-5 w-5 transition-transform group-hover:rotate-90" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent  className="border border-blue-gray-50 bg-white shadow-xl shadow-black/10 px-4 py-4">
            <Link to="vision" className="text-[#000] cursor-pointer mb-3">Vision</Link>
            <Link to="services" className="text-[#000] cursor-pointer border-t mb-3">Services</Link>
            <Link to='portfolio' className="text-[#000] cursor-pointer border-t mb-3">Portfolio</Link>
            <Link to='contact' className="text-[#000] cursor-pointer border-t">Contact</Link>
          </SpeedDialContent>
        </SpeedDial>
      </div>
  );
}
