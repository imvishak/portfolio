"use client";

import { motion } from "framer-motion";
import react, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MdDesignServices } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PageService = (props) => {
  const [width, setWidth] = useState(null);
  const [settings, setSettings] = useState(null);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    if (width < 768) {
      setSettings({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    } else {
      setSettings({
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      });
    }
  }, [width]);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, marginTop: "-50px" }}
        animate={{ opacity: 1, marginTop: "0px" }}
        transition={{ duration: 3 }}
        id="service"
        className="container mx-auto py-7"
      >
        <article className="mt-10 text-right w-full">
          <h2 className="text-4xl pacifico-regular text-orange">
            <span
              className="border-orange border-b-4 px-2"
              title="Services"
              aria-label="Services"
            >
              Services
            </span>
          </h2>
        </article>
        <article className="mt-10 flex flex-col md:flex-row justify-evenly">
          <div className="max-w-sm md:mr-4 mb-2 md:mb-0 p-5 text-center min-h-[380px] border-orange border-2 text-orange hover:bg-orange hover:text-black  hover:border-black max-h-[430px] rounded overflow-hidden shadow-lg">
            <div className="flex flex-row items-center justify-center">
              <MdDesignServices className="w-[80px] h-[80px]" />
            </div>
            <div className="px-6 py-4">
              <div
                className="font-bold text-2xl cardo-regular mb-2"
                title="Engineering & Design"
              >
                UI/UX Design
              </div>
      
              <p
                className="mt-4 text-xl cardo-regular"
                title="Engineering & Design Description"
                aria-label="Stecome offers engineering and design services, specializing in fire protection and ELV systems."
              >
               Great design can elevate your brand and engage your audience. Let’s work together to create impactful digital experiences. 
              </p>
            </div>
          </div>
          <div className="max-w-sm md:mr-4 mb-2 md:mb-0 p-5 text-center min-h-[380px] border-orange border-2  text-orange hover:bg-orange hover:text-black  hover:border-black max-h-[430px] rounded overflow-hidden shadow-lg">
            <div className="flex flex-row items-center justify-center">
              <MdOutlineWeb className="w-[80px] h-[80px]" />
            </div>
            <div className="px-6 py-4">
              <div
                className="font-bold text-2xl cardo-regular mb-2"
                title="Engineering & Design"
              >
                Web Design
              </div>
              <p
                className="text-xl cardo-regular"
                title="Engineering & Design Description"
                aria-label="Stecome offers engineering and design services, specializing in fire protection and ELV systems."
              >
               Transform your online presence with creative, minimalistic, SEO-optimized, and responsive web designs. Let’s Design Together!
              </p>
            </div>
          </div>
          <div className="max-w-sm md:mr-4 mb-2 md:mb-0 p-5 text-center min-h-[380px] border-orange border-2   text-orange hover:bg-orange hover:text-black  hover:border-black  max-h-[430px] rounded overflow-hidden shadow-lg">
            <div className="flex flex-row items-center justify-center">
              <FaCode className="w-[80px] h-[80px]" />
            </div>
            <div className="px-6 py-4">
              <div
                className="font-bold text-2xl mb-2 cardo-regular"
                title="Engineering & Design"
              >
                Web Development
              </div>
              <p
                className="text-xl cardo-regular"
                title="Engineering & Design Description"
                aria-label="Stecome offers engineering and design services, specializing in fire protection and ELV systems."
              >
               Transform your ideas into vibrant, dynamic experiences that resonate with your audience.Let’s Bring Your Design to Life!
              </p>
            </div>
          </div>
        </article>
      </motion.section>
    </>
  );
};

export default PageService;
