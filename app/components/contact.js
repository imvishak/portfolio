"use client";

import react, { useState } from "react";
import axios from "axios";
import Modal from "./modal";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

const PageContact = (props) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);
  const [progress, setProgress] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);
      setProgress(true);

      const response = await axios.post("/api/mail", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response) {
        setStatus(response.data);
        setEmail("");
        setSubject("");
        setMessage("");
        setProgress(false);
      }
    } catch (error) {
      setStatus(false);
      console.error("Error:", error);
    }
  };

  const closeModal = () => {
    setStatus(null);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, marginRight: "-50px" }}
        whileInView={{ opacity: 1, marginRight: "0px" }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        id="contact"
        className="container mx-auto py-7"
      >
        <article className="mt-10 text-left w-full">
          <h2 className="text-2xl cardo-bold text-red">
            <span className="border-orange border-b-4 px-2 text-orange pacifico-regular">
              Contact Me
            </span>
          </h2>
        </article>

        <article className="flex lg:flex-row flex-col p-3 lg:width-50 border-orange border-2 mt-10 width-100">
          <article className="py-4 px-2">
            <h2 className="pacifico-regular text-4xl ml-5 mt-5 inline-flex justify-start text-orange">
              {" "}
              Write Me !
            </h2>
            <form className="" onSubmit={sendMessage}>
              <p className="cardo-bold text-base text-orange mt-4">
                Email Address
              </p>
              <div className="flex items-center border-2 border-orange py-2">
                <input
                  className="appearance-none bg-black border-none w-full cardo-bold text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Add Your Email ID Here"
                  aria-label="Email"
                />
              </div>
              <p className="cardo-bold text-base text-orange mt-4">Subject</p>
              <div className="flex items-center border-2 border-orange py-2">
                <input
                  className="appearance-none bg-black border-none w-full cardo-bold text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  placeholder="Add Subject Here"
                  aria-label="Subject"
                />
              </div>
              <p className="cardo-bold text-base text-orange mt-4">Message</p>
              <div className="flex items-center border-2 border-orange py-2">
                <textarea
                  className="appearance-none bg-black border-none w-full cardo-bold text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  id="comment"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  name="comment"
                  cols="45"
                  rows="8"
                  maxlength="65525"
                ></textarea>
              </div>
              <div className="flex flex-row mt-5 justify-start items-center py-2">
                <button
                  className="mt-4 lg:inline-flex lg:w-[200px] flex flex-row justify-between  lg:justify-evenly lg:mt-0 text-black-200 cardo-bold bg-black px-2 py-2 border-orange border-2 text-orange hover:bg-orange hover:text-black hover:border-black  lg:mr-4 "
                  type="submit"
                >
                  Submit
                </button>
                {progress === true ? (
                  <div className="bar-container">
                    <div className="progress-bar">
                      <div className="progress-bar-value"></div>
                    </div>
                  </div>
                ) : null}
              </div>
              {status === true ? (
                <Modal
                  close={closeModal}
                  message="Thank you for your interest in Stecome. We will be contacting you soon. Kindly reach us through WhatsApp by clicking the button below."
                />
              ) : null}
              {status === false ? (
                <Modal
                  close={closeModal}
                  message="Thank you for your interest in Stecome. Due to some technical reasons mail has not sent successfully. Kindly reach us through WhatsApp by clicking the button below."
                />
              ) : null}
            </form>
          </article>
          <article className="flex flex-col justify-start bg-orange px-2  py-4">
            <h2 className="pacifico-regular text-4xl ml-5 mt-5 inline-flex justify-start text-black">
              {" "}
              Let’s Connect
            </h2>
            <p className="cardo-regular text-xl ml-5 mt-5 inline-flex justify-start text-black">
              Looking to collaborate or grab a coffee and chat? Drop me a
              message.
            </p>
            <article className="mt-4  flex flex-row ">
              <ul className="flex flex-row text-black">
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
            </article>
          </article>
        </article>
      </motion.section>
    </>
  );
};

export default PageContact;
