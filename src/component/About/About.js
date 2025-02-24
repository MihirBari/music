import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const About = () => {
  return (
    <div className="about">
      <section>
        <Container>
          {/* <h1 style={{ textAlign: "center", marginBottom: "25px",color:'red' }}>
            Brief About Us
          </h1>
          <h4 style={{ textAlign: "center", marginBottom: "25px",color:'#000000' }}>
            We team up with industry-leading technology partners to deliver
            innovative solutions. Our strategic alliances with these industry
            leaders empower us to stay ahead of the curve and provide our
            customers with top-quality products and services.
          </h4> */}
          <div className="rectangle-container">
            <div className="rectangle"></div>
            <div className="content">
              <Col style={{ textAlign: "center" }}>
                <h2 style={{ color:'red' }}>The Life Journey of Gopal Ghosal</h2>
                <br />
                <Row>
                  <div className="Cardd">
   <img src="https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/RAVISIR.png" alt="img" />
                
                    <p className="playwrite-vn-unique"><i>
I learned Hindustani classical music through the Guru-Shishya Parampara (Bishnupur Gharana) from Pandit Amiya Ranjan Bandopadhyay for twenty years during my childhood in Kolkata. After moving to Mumbai in 1998, I composed commercial songs and worked in light song voice training.<br></br>
In 2001, I visited Vrindaban to teach Hindustani classical and devotional songs to students from forty countries. After returning to Mumbai in 2007, I have continued to provide vocal training in Hindustani classical music and all kinds of light songs to my students.
In the meantime, I have built the Musical Minds band and have organized several live concerts.
                    </i>
                    </p>
                  </div>
                </Row>
              </Col>
            </div>
          </div>
          <br />

        </Container>
      </section>
    </div>
  );
};
