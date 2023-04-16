import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";

function SocialIcons() {
  return (
    <div>
      <div className=" between gap-3">
        <FaLinkedinIn className=" social-icon" />
        <FaInstagram className=" social-icon" />
        <FaYoutube className=" social-icon" />
        <FaFacebookF className=" social-icon" />
      </div>
    </div>
  );
}

export default SocialIcons;
