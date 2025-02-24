import React, { useState } from "react";
import { Container, Col, Row, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

export const ContactModal = ({ showModal, onClose }) => {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptions, setSelectedOptions] = useState("");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side form validation
    if (
      !formDetails.firstName ||
      !formDetails.lastName ||
      !formDetails.email ||
      !formDetails.message
    ) {
      toast.error("Please Fill all the fields");
      return;
    }

    setButtonText("Sending...");

    try {
      // Send data to Pushbullet and your API
      await pushMessage(
        `${formDetails.firstName} ${formDetails.lastName}`,
        formDetails.email,
        formDetails.message,
        formDetails.phone,
        selectedOption,
        selectedOptions
      );

      setButtonText("Send");
      setFormDetails({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setSelectedOption("");
      setSelectedOptions("");
      toast.success("Delivered");

      // Close the modal upon successful submission
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Please switch off your ad blocker");
    } finally {
      setButtonText("Send");
    }
  };

  const pushMessage = async (name, email, message, phone = "000", selectedOption, selectedOptions) => {
    const messageType = "Request Demo";
    const messageBody = {
      title: `${messageType} Form (Website) - ${name}`,
      body: `Name: ${name}\nMessage: ${message}\nEmail: ${email}\nPhone: ${phone}\nProduct: ${selectedOption}\nReason: ${selectedOptions}`,
      type: "note",
    };
  
    // Send data to Pushbullet
    const pushbulletResponse = await fetch(
      "/push.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Connection: "keep-alive",
          "cache-control": "no-cache",
        },
        body: JSON.stringify(messageBody),
      }
    );

  
    if (!pushbulletResponse.ok) {
      throw new Error("Pushbullet API request failed");
    }
  };

  return (
    <Modal style={{ zIndex: "100090" }} show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ textAlign: 'center' }}>Contact Us To Know More</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section className="ContactModal" id="connect">
          <Container>
            <Row>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                      style={{ width: "100%", borderRadius: "5px", padding: "8px" }}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) =>
                        onFormUpdate("lastName", e.target.value)
                      }
                      style={{ width: "100%", borderRadius: "5px", padding: "8px" }}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email"
                      onChange={(e) =>
                        onFormUpdate("email", e.target.value)
                      }
                      style={{ width: "100%", borderRadius: "5px", padding: "8px" }}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.phone}
                      placeholder="Mobile No."
                      maxLength={10}
                      onChange={(e) =>
                        onFormUpdate("phone", e.target.value)
                      }
                      style={{ width: "100%", borderRadius: "5px", padding: "8px" }}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <select
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      style={{ width: "100%", borderRadius: "5px", padding: "8px" }}
                    >
                      <option value="" disabled>
                        Product
                      </option>
                      <option value="SolarWinds">SolarWinds</option>
                      <option value="BigFix">BigFix</option>
                      {/* <option value="Freshworks">Freshworks</option> */}
                      <option value="Armis">Armis</option>
                      <option value="Tenable">Tenable</option>
                    </select>
                  </Col>
                  <Col sm={6} className="px-1">
                    <select
                      value={selectedOptions}
                      onChange={(e) => setSelectedOptions(e.target.value)}
                      style={{ width: "100%", borderRadius: "5px", padding: "8px" }}
                    >
                      <option value="" disabled>
                        Reason
                      </option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Quotation">Quotation</option>
                      <option value="Renewals">Renewals</option>
                      <option value="Support Service">Support Service</option>
                      <option value="Demo/POC">Demo/POC</option>
                    </select>
                  </Col>
                  <Col style={{ marginTop: "5px" }} sm={12}>
                    <textarea
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) =>
                        onFormUpdate("message", e.target.value)
                      }
                      style={{ width: "100%", borderRadius: "5px", padding: "8px", height: "100px" }}
                    />
                    <button type="submit">
                        <span>{buttonText}</span>{" "}
                      </button>
                  </Col>
                </Row>
              </form>
            </Row>
          </Container>
        </section>
      </Modal.Body>
    </Modal>
  );
};
