import React from "react";
import projImg1 from "../../assets/img//headerLogoLight.webp";
import { Link } from "react-router-dom";

export const FreshWorks = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "150px" }}>FRESHWORKS</h1>
      <div className="product-Solar">
        <div>
          <img src={projImg1} alt="FreshWorks" />
        </div>
        <div>
          <p>
            Freshworks is a customer engagement software company offering a
            suite of products, including customer support, marketing, and sales
            solutions. Designed for businesses of all sizes, Freshworks provides
            tools for improved customer communication, collaboration, and
            automation. The user-friendly platform aims to enhance customer
            experiences and streamline operational processes.
          </p>
          <Link to="/FreshWorks">
          <button className="custom-button">
              <span>
              Read More
              </span>
           </button>
          </Link>
        </div>
      </div>
    </>
  );
};
