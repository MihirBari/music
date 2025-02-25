import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from "../assets/mic.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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
    const currentPathname = window.location.pathname;

    if (currentPathname === "/") {
      setActiveLink("home");
    } else if (currentPathname === "/AboutUs") {
      setActiveLink("About Us");
    } else if (currentPathname === "/Products") {
      setActiveLink("Products");
    } else if (currentPathname === "/Contact") {
      setActiveLink("Contact");
    }
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSearch = async () => {
    console.log("Searching for: " + searchQuery);

    try {
      const response = await fetch(`/api/search?query=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }

    toggleSearch();
  };

  return (
    <div>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img style={{ height: '81px', width: '100px' }} src={logo} alt="Logo" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="/"
                className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              {/* <Nav.Link
                href="/AboutUs"
                className={activeLink === "About Us" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("About Us")}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="/Products"
                className={activeLink === "Products" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("Products")}
              >
                Products
              </Nav.Link>
              <Nav.Link
                href="/Contact"
                className={activeLink === "Contact" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("Contact")}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="/Career"
                className={activeLink === "Career" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("Career")}
              >
                Career
              </Nav.Link> */}
              <Nav.Link
                href="/Resource"
                className={activeLink === "Resource" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("Resource")}
              >
                Resources
              </Nav.Link>
              {/* <div className="search-icon" onClick={toggleSearch}>
                <FaSearch />
              </div> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showSearch} onHide={toggleSearch} centered>
        <Modal.Header closeButton>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSearch}>
            <InputGroup className="mb-3">
              <FormControl
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Search
              </Button>
            </InputGroup>
          </Form>
        </Modal.Body>
      </Modal>

      {searchResults.length > 0 && (
        <div>
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>
                <Link to={`/page/${index + 1}`}>{result.page}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
