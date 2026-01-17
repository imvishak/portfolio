/* eslint-disable @next/next/no-img-element */
"use client";

import react, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
const PageMain = (props) => {
  return (
    <>
      <section className="flex md:flex-row flex-col container mx-auto py-7 width-100">
        <motion.article className="mx-auto">
          <img
            className="md:w-4/6"
            src="assets/images/home/v3.svg"
            alt="Portfolio Home Image"
            title="Portfolio Home Image"
            aria-label="Portfolio Home Image"
          />
        </motion.article>
        <motion.article className="mt-10 ml1">
          <h2
            className="text-cream text-4xl py-3 pacifico-regular letters"
            title="Hi my,"
            aria-label="Hi my,"
          >
            <motion.div className="text-cream text-6xl align-middle">Design ...</motion.div>
            <motion.div className="text-cream ml-2 text-6xl align-middle">
              Code ...
            </motion.div>
            <motion.div className="text-orange ml-2 text-6xl align-middle">
              Experience ...
            </motion.div>
            <motion.div className="text-cream mt-4 ml-2 text-2xl align-middle">
              Creating fast, simple, and intuitive web experiences.
            </motion.div>
          </h2>

          <motion.article
            initial={{ opacity: 0, marginTop: "-4px" }}
            animate={{ opacity: 1, marginTop: "30px" }}
            transition={{
              duration: 1,
              delay: 0, // Add a delay of 3 seconds
            }}
            className="mt-4  flex flex-row "
          >
            <span className="text-orange pacifico-regular">Follow Me On: </span>
            <ul className="flex flex-row text-orange">
              <li className="ml-4">
                <a href="">
                  <FaWhatsapp className="w-[24px] h-[24px]" />
                </a>
              </li>
              <li className="ml-4">
                <a href="">
                  <FaInstagram className="w-[24px] h-[24px]" />
                </a>
              </li>
              <li className="ml-4">
                <a href="">
                  <FaLinkedin className="w-[24px] h-[24px]" />
                </a>
              </li>
              <li className="ml-4">
                <a href="">
                  <FaPinterest className="w-[24px] h-[24px]" />
                </a>
              </li>
            </ul>
          </motion.article>

          <motion.p
            initial={{ opacity: 0, marginTop: "-4px" }}
            animate={{ opacity: 1, marginTop: "50px" }}
            transition={{
              duration: 1,
              delay: 1, // Add a delay of 3 seconds
            }}
            className="mt-7"
          >
            <a
              href="#"
              className="mt-4 lg:inline-flex lg:w-[200px] flex flex-row justify-between  lg:justify-evenly lg:mt-0 text-black-200 cardo-bold bg-black px-2 py-2 border-orange border-2 text-orange hover:bg-orange hover:text-black hover:border-black  lg:mr-4"
              download="Portfolio Contracting W.L.L Profile.pdf"
              tabindex="0"
              onClick={(e) => {
                e.preventDefault();
                props.view("#project");
              }}
            >
              <label>Portfolio</label>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919746240674"
              className="mt-4 lg:inline-flex lg:w-[200px] flex flex-row justify-between  lg:justify-evenly lg:mt-0 text-black-200 cardo-bold bg-black px-2 py-2 border-orange border-2 text-orange hover:bg-orange hover:text-black  hover:border-black   lg:mr-4"
              download="Portfolio Contracting W.L.L Profile.pdf"
              tabindex="0"
            >
              <label>Hire Me</label>
              <FaWhatsapp className="w-[26px] h-[26px]" />
            </a>
          </motion.p>
        </motion.article>
      </section>
      <motion.article
        initial={{ opacity: 0, marginTop: "-4px" }}
        animate={{ opacity: 1, marginTop: "0px" }}
        transition={{
          duration: 1,
          delay: 2, // Add a delay of 3 seconds
        }}
        className="flex justify-center cursor-pointer"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
          onClick={() => {
            props.view("#about");
          }}
          className="circle-outer"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="circle-inner"
          >
            <FaArrowAltCircleDown className="inner-child text-orange w-[32px] h-[32px]" />
          </motion.div>
        </motion.div>
      </motion.article>
    </>
  );
};

export default PageMain;
