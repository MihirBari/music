import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/mic.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setActiveLink("home");
    }
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img style={{ height: "81px", width: "100px" }} src={logo} alt="Logo" />
        </Navbar.Brand>

        {/* Directly show links without toggler */}
        <Nav className="ms-auto">
          <Nav.Link
            href="/"
            className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("home")}
          >
            Home
          </Nav.Link>

          <Nav.Link
            href="/Archives"
            className={activeLink === "Archives" ? "active navbar-link" : "navbar-link"}
            onClick={() => onUpdateActiveLink("Archives")}
          >
            Archives
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
