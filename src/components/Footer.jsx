import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="pb-2">
      <div className="social-links d-flex justify-content-center gap-3">
        <a href="" className="linkedin">
          <span>
            <FaLinkedin size={30} />
          </span>
        </a>

        <a href="" className="gmail">
          <span>
            <SiGmail size={30} />
          </span>
        </a>
        <a href="" className="instagram">
          <span>
            <GrInstagram size={30} />
          </span>
        </a>
        <a href="" className="whatsapp">
          <span>
            <RiWhatsappFill size={30} />
          </span>
        </a>
      </div>

      <p className="text-center my-3 text-muted">
        ©copyrights reserved by stanymadanu
      </p>
    </div>
  );
};

export default Footer;
