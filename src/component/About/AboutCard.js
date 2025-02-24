import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function AboutCard(props) {
  const [modalShow, setModalShow] = useState(false);

  const openModal = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <div className="productList">
      <div key={props.id} onClick={openModal}>
        <div className="productCard">
          <img
            //style={{ width: "150px", height: "200px", borderRadius: "50%", objectFit: "cover" }}
            style={{ width: "auto", height: "auto" }}
            src={props.image}
            alt="product-img"
            className="productImage"
          />
        </div>
        <div className="productCard__content">
          <h3 className="productName">{props.name}</h3>
        </div>
      </div>

      <Modal
        show={modalShow}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        style={{ zIndex: 100090 }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="aboutModal">
          <img
            style={{ width: "auto", height: "200px" }}
            src={props.image}
            alt="product-img"
            className="productImage"
          />
          <div>
            <p style={{ marginLeft: "25px" }}>{props.description}</p>
            <br />
            <p style={{ marginLeft: "25px" }}>{props.description1}</p>
            <br />
            <p style={{ marginLeft: "25px" }}>{props.description2}</p>
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "grey",
            justifyContent: "space-between",
          }}
        >
          <div className="displayStack__1">
            <Link to={props.link} target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="productPrice" />
            </Link>
          </div>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
