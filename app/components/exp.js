

import react from "react";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa6";
const PageExp = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, marginLeft: "-50px" }}
        whileInView={{ opacity: 1, marginLeft: "0px" }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        class="bg-orange text-black w-full"
        id="exp"
      >
        <div class="container max-w-5xl px-4 py-12 mx-auto">
          <div class="grid gap-4 mx-4 sm:grid-cols-12">
            <div class="col-span-12 sm:col-span-3">
              <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-black">
                <h3 class="text-3xl pacifico-regular font-semibold">
                  Experence
                </h3>
              </div>
            </div>
            <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-black">
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
                  <h3 class="text-xl font-semibold tracking-wide">
                   Senior Lead Engineer
                  </h3>
                  <time class="text-xs tracking-wide uppercase text-black">
                  Oct 2021 – Present
                  </time>
                  <p class="mt-3">
                   QuEST Global
                  </p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
                   <h3 class="text-xl font-semibold tracking-wide">
                   System Analyst
                  </h3>
                  <time class="text-xs tracking-wide uppercase text-black">
                  Jan 2021 – Sep 2021
                  </time>
                  <p class="mt-3">
                   UST Global
                  </p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
                   <h3 class="text-xl font-semibold tracking-wide">
                   System Analyst
                  </h3>
                  <time class="text-xs tracking-wide uppercase text-black">
                  Jul 2015 – Dec 2020
                  </time>
                  <p class="mt-3">
                  Malayala Manorama
                  </p>
                </div>
                   <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-black">
                   <h3 class="text-xl font-semibold tracking-wide">
                   Multimedia Programmer
                  </h3>
                  <time class="text-xs tracking-wide uppercase text-black">
                  Nov 2012 – May 2015
                  </time>
                  <p class="mt-3">
                   Aptara Corp
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default PageExp;
