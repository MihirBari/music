import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImage from "../assets/banner.jpg";
import { useEffect, useState } from "react";

export const  Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsdeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Our Services..."];
  const period = 5000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("skills");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h1 className="tagline">Musical Minds Band</h1>
            <h1><span className="wrap">{text}</span></h1>
            <p>Passionate about music, we specialize in piano and vocal training, helping aspiring musicians refine their skills. Whether you're a beginner or an advanced learner, our expert guidance will elevate your musical journey. 🎶✨</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImage} alt="Header" />
          </Col>
      
          <button onClick={handleScrollDown}>Let's Explore <ArrowRightCircle size={25} /></button>
         
        </Row>

      </Container>
    </section>
  );
}

