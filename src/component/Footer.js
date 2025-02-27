import React from "react";
import { FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";

export const Footer = () => {
  var currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <a href="https://www.youtube.com/channel/UCOtnrdNZOTYbbCh_HPEGptA" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FaYoutube />
      </a>
      <p>{`© ${currentYear} Musical Minds Band.`}</p>
      <a href="mailto:gopaljighosal@gemail.com" style={iconStyle}>
        <SiGmail />
      </a>
      <a href="tel:9833740995" target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FaPhone />
      </a>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  padding: "10px",
};

const iconStyle = {
  color: "#fff", // Ensure icons maintain color
  textDecoration: "none",
  fontSize: "1.5rem",
};

