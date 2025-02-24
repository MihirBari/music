import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Awards.css'; 
import A1 from "../../assets/Awards/A1.png";
import A2 from "../../assets/Awards/A2.jpg";
import A3 from "../../assets/Awards/A3.jpg";
import A4 from "../../assets/Awards/A4.jpg";
import A5 from "../../assets/Awards/A5.jpeg";
import A6 from "../../assets/Awards/A6.jpeg";
import A7 from "../../assets/Awards/A7.jpeg";
import A8 from "../../assets/Awards/A8.jpeg";
import A9 from "../../assets/Awards/A9.jpeg";
import A11 from "../../assets/Awards/A11.jpeg"
import A14 from "../../assets/Awards/A14.jpg"
import A16 from "../../assets/Awards/A16.jpg"
import A17 from "../../assets/Awards/A17.jpg"

export const Awards = () => {
  const awardsData = [
    { image: "https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/A14.jpg", caption: 'BigFix Platinum Partner Awards (2024)' },
    { image: "https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/A16.jpg", caption: 'BigFix Deal Master Awards (2024)' },
    { image: "https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/A17.jpg", caption: 'Solarwinds Excellence in Customers Awards (2024)' },
    { image: "https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/A1.png", caption: 'Solarwinds Partner Awards (2023)' },
    { image: "https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/A2.jpg", caption: 'Solarwinds - Strategic Win (2019)' },
    { image: "https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/A3.jpg", caption: 'Solarwinds - Top Seller (2020)' },
    { image: "https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/A4.jpg", caption: 'HCL Specialised Partner of the year' },
    { image: "https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/A5.jpeg", caption: 'Solarwinds - Significant Win' },
    { image: "https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/A6.jpeg", caption: 'Solarwinds - Authorized Award (2019)' },
    { image: "https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/A7.jpeg", caption: 'Solarwinds - Best acheivement of the year (2018)' },
    { image: "https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/A8.jpeg", caption: 'Contribution to IBM C&SI Business ' },
    { image: "https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/A9.jpeg", caption: 'Solarwinds - Outstanding Sales Growth Reseller (2018)' },
    { image: "https://techsawebsiteimages.s3.ap-south-1.amazonaws.com/A11.jpeg", caption: 'Tech Innovator' }
  ];

  const awardsRows = [];
  for (let i = 0; i < awardsData.length; i += 5) {
    const awardsSlice = awardsData.slice(i, i + 5);
    awardsRows.push(
      <Row key={i} className='justify-content-center align-items-center'>
        {awardsSlice.map((award, index) => (
          <Col key={index}>
            <img style={{ width: '100%' }} src={award.image} alt={`award ${i + index + 1}`} className="zoom" loading="lazy" />
            <p style={{textAlign :"center"}} className="caption">{award.caption}</p>
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <>
      {awardsRows}
    </>
  );
};