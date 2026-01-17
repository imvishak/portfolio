/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import react, { useState } from "react";
import HambugerMenu from "../components/menu";
import { motion } from "framer-motion";

const PageHeader = (props) => {
  const [open, setOpen] = useState(false);
  const openMobileMenuView = (state) => {
    setOpen(state);
  };

  const variants = {
    open: { width: 250 },
    closed: { width: 0 },
  };

  return (
    <header>
      <nav className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 border-b flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white lg:mr-6">
          <a
            href="/"
            className="cursor-pointer pacifico-regular text-5xl"
            title="Stecome Home"
            aria-label="Stecome Home"
          >
            <img src="assets/images/logo/logo.svg" className="w-[120px]"></img>
          </a>
        </div>
        <div className="block lg:hidden">
          <HambugerMenu openMobileMenuView={openMobileMenuView} />
        </div>
        <motion.div
          animate={open ? "open" : "closed"}
          variants={variants}
          className="lg:bg-black bg-orange  mobilenav lg:regularnav flex-grow lg:flex lg:items-center"
        >
          <div className="text-base pt-24 lg:pt-0 lg:text-right text-center lg:flex-grow">
            <ul>
              <li className="block mt-4 lg:inline-block overflow-hidden lg:mt-0">
                <button
                  href="javascript:void(0)"
                  className="block mt-4 lg:inline-block lg:mt-0 text-black w-[100%] lg:text-cream cardo-bold p-2  hover:bg-black hover:text-orange lg:mr-4"
                  title="About Us"
                  aria-label="About Us"
                  onClick={(e) => {                   
                    props.view('#about');
                  }}
                >
                  About
                </button>
              </li>
              <li className="block mt-4 lg:inline-block overflow-hidden lg:mt-0">
                <button
                    href="javascript:void(0)"
                  className="block mt-4 lg:inline-block lg:mt-0 text-black w-[100%] lg:text-cream cardo-bold p-2 hover:bg-black hover:text-orange lg:mr-4"
                  title="Services"
                  aria-label="Services"
                  onClick={(e) => {                   
                    props.view('#service');
                  }}
                >
                  Services
                </button>
              </li>
              <li className="block mt-4 lg:inline-block overflow-hidden lg:mt-0">
                <button
                    href="javascript:void(0)"
                  className="block mt-4 lg:inline-block lg:mt-0 text-black w-[100%]  lg:text-cream cardo-bold p-2 hover:bg-black hover:text-orange lg:mr-4"
                  title="Systems"
                  aria-label="Systems"
                  onClick={(e) => {                    
                    props.view('#exp');
                  }}
                >
                  Experience
                </button>
              </li>
              <li className="block mt-4 lg:inline-block overflow-hidden lg:mt-0">
                <button
                    href="javascript:void(0)"
                  className="block mt-4 lg:inline-block lg:mt-0 text-black w-[100%]  lg:text-cream cardo-bold p-2 hover:bg-black hover:text-orange lg:mr-4"
                  title="Projects"
                  aria-label="Projects"
                  onClick={(e) => {                 
                    props.view('#project');
                  }}
                >
                  Projects
                </button>
              </li>
              <li className="block mt-4 lg:ml-6 lg:inline-block overflow-hidden lg:mt-0">
                <button
                    href="javascript:void(0)"
                  className="block mt-4 lg:inline-block lg:mt-0 text-black w-[100%] lg:bg-orange  lg:text-black cardo-bold p-2 hover:bg-black hover:text-orange lg:mr-4"
                  title="Products"
                  aria-label="Products"
                  onClick={(e) => {                  
                    props.view('#contact');
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default PageHeader;
