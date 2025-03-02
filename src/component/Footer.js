import React from "react";
import { FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";

export const Footer = () => {
  var currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
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
      </div>
      <p style={{ textAlign: "center", display:"flex", flexDirection:"row" }}>
      <MdLocationPin />     No. 50, Mittal Estate, 2nd Floor, Marol Naka, Andheri (East), Mumbai
      </p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
};

const contentStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
};

const iconStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1.5rem",
};
