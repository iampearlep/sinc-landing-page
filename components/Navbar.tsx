"use client";
import React from "react";
import { useState } from "react";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Images/Logo.svg";
import { motion } from "framer-motion";


const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <motion.div className="bg-[#F9F9F9] shadow-sm">
      <div className=" mx-auto flex justify-between px-6 md:px-0 w-full md:11/12 lg:w-10/12 xl:w-10/12 xxl:w-9/12 pt-6 pb-4 ">
        <div className="flex flex-row gap-x-8">
          <div className="flex justify-center items-center cursor-pointer">
            <Link href="/">
              <Image
                src={Logo}
                height={64}
                width={114.94}
                priority={true}
                alt="Logo image"
                className="bg-no-repeat bg-cover hidden md:block"
              />
              <Image
                src={Logo}
                height={40}
                width={71.84}
                priority={true}
                alt="Logo image"
                className="no-repeat bg-cover md:hidden block"
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-start font-semibold  gap-x-6 xl:text-sm xxl:text-md py-0 my-0">
            <Link href="/" className="cursor-pointer">
             About
            </Link>
            <Link href="/" className="cursor-pointer">
             SIP
             </Link>
             <Link href="/" className="cursor-pointer">
             Studio
             </Link>
             <Link href="/" className="cursor-pointer">
             SEEQ
             </Link>
             <Link href="/" className="cursor-pointer">
             Platforms
             </Link>
             <Link href="/" className="cursor-pointer">
             Initiatives
             </Link>
             <Link href="/" className="cursor-pointer">
             More
             </Link>
          </div>
        </div>
        <div className="flex flex-row gap-x-4 items-center xl:text-sm xxl:text-md justify-center">
          <button className="hidden bg-[#20888F] cursor-pointer lg:flex items-center px-6 py-3 capitalize text-white text-left rounded-full">
            <Link href="">SINC with us</Link>
          </button>
          <button className="bg-[#303030] cursor-pointer hidden lg:flex items-center px-6 py-3  text-white rounded-full">
            <Link href="">
             Apply to SIP 1.0
            </Link>
          </button>
        </div>
        {/* Mobile Screens */}
        <div className="lg:hidden block">
          <div className="flex flex-row gap-x-6">
            <button onClick={handleToggle}>
              {isToggle ? (
                <IoCloseSharp className="text-3xl" />
              ) : (
                <IoMenuOutline className="text-3xl" />
              )}
            </button>
          </div>
          {isToggle && (
            <motion.div
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="fixed top-0 right-0 h-full  w-full bg-white z-10 flex flex-col justify-start items-start "
            >
              <button onClick={handleToggle} className="absolute top-5 right-5">
                <IoCloseSharp className="text-3xl" />
              </button>
              <div className="mt-20 max-h-screen overflow-y-auto w-full">
                <div className="flex flex-col gap-10 items-start justify-start font-semibold text-xl px-5">
                  <Link
                    href="/"
                    onClick={handleToggle}
                    className="cursor-pointer"
                  >
                    About
                  </Link>
                  <Link
                    href="/"
                    onClick={handleToggle}
                    className="cursor-pointer"
                  >
                    SIP
                  </Link>
                  <Link
                    href="/"
                    onClick={handleToggle}
                    className="cursor-pointer"
                  >
                    Studio
                  </Link>
                  <Link
                    href="/"
                    onClick={handleToggle}
                    className="cursor-pointer"
                  >
                    SEEQ
                  </Link>
                  <Link
                    href="/"
                    onClick={handleToggle}
                    className="cursor-pointer"
                  >
                    Platforms
                  </Link>
                  <Link
                    href="/"
                    onClick={handleToggle}
                    className="cursor-pointer"
                  >
                    Initiatives
                  </Link>
                  <Link
                    href="/"
                    onClick={handleToggle}
                    className="cursor-pointer"
                  >
                    More
                  </Link>
                </div>
                <div className="mx-auto flex flex-row justify-center items-center mt-14 gap-x-4">
                  <button className="flex items-center cursor-pointer bg-[#20888F]  text-base px-5 py-3 text-white rounded-md">
                    <Link
                      href=""
                      onClick={handleToggle}
                    >
                     SINC with us
                    </Link>
                  </button>
                  <button className="flex items-center bg-[#303030] text-base px-5 py-3 text-white rounded-md cursor-pointer">
                    <Link
                      href=""
                      onClick={handleToggle}
                    >
                      Apply to SIP 1.0
                    </Link>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
