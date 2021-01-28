import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made with ❤️ by ~ {""}
        <a
          href="https://www.linkedin.com/in/naina-upadhyay-5879641a0/"
          target="_blank"
          rel="noreferrer">
          Naina upadhyay
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="social">
        <a
          href="https://www.instagram.com/__upadhyay_naina__/?hl=en"
          target="_blank"
          rel="noreferrer">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/naina-upadhyay-5879641a0/"
          target="_blank"
          rel="noreferrer">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/naina25" target="_blank" rel="noreferrer">
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
