import React, { useEffect, useState } from "react";
import { Loader } from "../component/loader.js";
import { NavBar } from "../component/NavBar";
import { Footer } from "../component/Footer";
import { Resource } from "../component/Resource/Resource.js";

export const ResourcePage = () => {
 

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
        
          <NavBar />
          <div className="resource">
            <Resource />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};
