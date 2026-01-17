/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import react, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Modal = (props) => {
  const [open, setOpen] = useState(true);
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <motion.div
      id="myModal"     
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}  
    >
      <motion.div
        className="modal-content border-blue border-4"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <IoCloseSharp
          className="cursor-pointer close"
          onClick={(e) => {
            e.stopPropagation();
            props.close();
          }}
        />
        <p className="text-center">{props.message}</p>
        <p className="text-center py-4">          
          <a
            href="//api.whatsapp.com/send?phone=97450869991R&text=I hope this message finds you well.
                  My name is [Your Name], I wanted to reach out to you because 
                  i am interested in collaborating on a project"
            className="inline-flex mt-4 lg:inline-flex items-center lg:mt-0 justify-center rounded-lg w-[200px] h-[50px] text-black-200 cardo-bold bg-[#25D366] px-2 py-2 text-white hover:bg-[#25d34b] lg:mr-4"
            title="Chat With Us"
            aria-label="Chat With Us"
            tabIndex="0"
          >
            Chat With Us
            <img
              className="h-9 w-9 ml-5 whatsapp-rotate"
              src="assets/images/home/stecome-whatsapp.svg"
              alt="Contact us via WhatsApp"
              title="Contact us via WhatsApp"
              aria-label="Contact us via WhatsApp"
            />
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
