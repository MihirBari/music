import React from "react";
import projImg1 from "../../assets/Tenable.png";
import { Link } from "react-router-dom";

export const Tenable = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "150px" }}>TENABLE</h1>
      <div className="product-Big">
        <div className="InCenter">
          <p>
            Tenable provides cybersecurity solutions that assess, manage, and
            enhance an organization's cybersecurity posture. Its products offer
            vulnerability management, continuous monitoring, and risk assessment
            to proactively identify and mitigate cyber threats. Tenable helps
            organizations maintain a strong security foundation by ensuring the
            visibility and protection of their digital assets against evolving
            cyber risks.
          </p>
          <Link to="/Tenable">
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
