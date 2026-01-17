import react from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";

const PageFooter = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mt-8 border-t border-orange pt-8">
          <div className="sm:flex sm:justify-between items-center">
            <p className="text-xs text-orange cardo-bold">
              &copy; 2024. Vishak. All rights reserved.
            </p>
            <article className="flex flex-row">            
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
            </article>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
