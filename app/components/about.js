import react from "react";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa6";
const PageAbout = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, marginTop: "-50px" }}
        animate={{ opacity: 1, marginTop: "0px" }}
        transition={{ duration: 2 }}
        className="container mx-auto py-7"
        id="about"
      >
        <article className="mt-10 text-left w-full">
          <h2 className="text-4xl pacifico-regular text-orange">
            <span
              className="border-l-orange border-b-4 px-2"
              title="Services"
              aria-label="Services"
            >
              About Me
            </span>
          </h2>
        </article>
        <article className="mt-10 w-full flex flex-col md:flex-row">
          <article className="flex flex-col justify-start container  py-3  w-full lg:w-4/6">
            <p className="mt-4 text-left  flex flex-row text-white leading-6">
              Hi, My Name is Vishak. I am a results-driven Senior Lead Engineer with over 12 years of
              experience in front-end development, Human-Machine Interfaces
              (HMI), and scalable web applications.
            </p>{" "}
            <p className="mt-4 text-left  flex flex-row text-white leading-6">
              {" "}
              I specialize in Angular, React, Next.js, and modern UI
              engineering, with a strong foundation in building enterprise-grade
              and award-winning digital solutions.
            </p>
            <p className="mt-4 text-left  flex flex-row text-white leading-6">
              {" "}
              Throughout my career, I’ve worked across media, engineering, and
              technology domains—delivering high-impact products, mentoring
              teams, and driving architectural decisions such as monorepo-based
              scalable UI systems.
            </p>
            <p className="mt-4 text-left  flex flex-row text-white leading-6">
              {" "}
              I’ve also contributed to projects that earned industry
              recognition, including the WAN-IFRA Best News Website Award{" "}
            </p>
            <p className="mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=9746240674"
                className="mt-4 lg:inline-flex lg:w-[200px] flex flex-row justify-between  lg:justify-evenly lg:mt-0 text-black-200 cardo-bold bg-black px-2 py-2 border-orange border-2 text-orange hover:bg-orange hover:text-black  hover:border-black   lg:mr-4"
                download=".pdf"
                tabindex="0"
              >
                <label>Resume</label>
                <FaFilePdf className="w-[26px] h-[26px]" />
              </a>
            </p>
          </article>

          <article className="lg:w-[350px] w-full md:w-2/6">
            <img
              className="w-full"
              src="assets/images/home/v1.svg"
              alt="Portfolio About Image"
              title="Portfolio About Image"
              aria-label="Portfolio About Image"
            />
          </article>
        </article>
      </motion.section>
    </>
  );
};

export default PageAbout;
