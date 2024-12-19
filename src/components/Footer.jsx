import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="pb-2">
      <div className="social-links d-flex justify-content-center gap-3">
        <a
          href="https://www.linkedin.com/in/stany-madanu-927314161"
          target="blank"
          className="linkedin"
        >
          <span>
            <FaLinkedin size={30} />
          </span>
        </a>

        <a href="mailto:stanymadhanu.sm@gmail.com" className="gmail">
          <span>
            <SiGmail size={30} />
          </span>
        </a>
        <a
          href="https://www.instagram.com/_itsmestany/"
          target="blank"
          className="instagram"
        >
          <span>
            <GrInstagram size={30} />
          </span>
        </a>
        <a
          href="https://wa.me/916303101569?text=Hello%20Stany,%20I%20would%20like%20to%20contact%20you"
          target="/blank"
          className="whatsapp"
        >
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
