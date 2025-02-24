import React from "react";
import projImg1 from "../../assets/img/136048.png";
import { Link } from "react-router-dom";

export const BigFix = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "150px" }}>BIGFIX</h1>
      <div className="product-Big">
        <div className="InCenter">
          <p>
            BigFix is an endpoint management platform that enables organizations
            to efficiently manage and secure endpoints across their network. It
            provides real-time visibility, patch management, security
            compliance, and automated remediation, allowing IT teams to control
            and optimize endpoint configurations, ensuring a secure and
            compliant environment.
          </p>
          <Link to="/bigfix">
          <button className="custom-button">
              <span>
              Read More
              </span>
           </button>
          </Link>
        </div>
        <div>
          <img src={projImg1} alt="BigFix" />
        </div>
      </div>
    </>
  );
};
