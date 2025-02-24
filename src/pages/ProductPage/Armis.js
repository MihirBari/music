import React from "react";
import projImg1 from "../../assets/Armis.png";
import { Link } from "react-router-dom";

export const Armis = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "150px" }}>ARMIS</h1>
      <div className="product-Solar">
        <div>
          <img src={projImg1} alt="Solarwinds" />
        </div>
        <div>
          <p>
            Armis is a cybersecurity platform specializing in IoT security. It
            discovers, analyzes and protects connected network devices, minimizing
            risks associated with unmanaged or vulnerable devices. Armis
            provides real-time visibility and threat detection, securing
            enterprise networks from potential cyber threats arising from the
            proliferation of IoT devices in modern business environments.
          </p>
          <Link to="/Armis">
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
