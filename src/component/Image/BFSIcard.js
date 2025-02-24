import styled, { keyframes, css } from "styled-components";
import projImg1 from "../../assets/Logo/BFSi/AU Small Finance.png";
import projImg2 from "../../assets/Logo/BFSi/Ageas Federal.png";
import projImg3 from "../../assets/Logo/BFSi/Axis Bank.png";
import projImg4 from "../../assets/Logo/BFSi/BSE.png";
import projImg5 from "../../assets/Logo/BFSi/DCB-Bank.jpg";
import projImg6 from "../../assets/Logo/BFSi/HDB Financial Services Limited.jpg";
import projImg7 from "../../assets/Logo/BFSi/HDFC Sec.png";
import projImg8 from "../../assets/Logo/BFSi/ICICI BANK LIMITED.jpg";
import projImg9 from "../../assets/Logo/BFSi/IDBI-Bank-logo.jpg";
import projImg17 from "../../assets/Logo/BFSi/LTI.png";
import projImg10 from "../../assets/Logo/BFSi/Motilal Oswal.png";
import projImg11 from "../../assets/Logo/BFSi/Reliance Nippon.png";
import projImg12 from "../../assets/Logo/BFSi/SBM Bank.png";
import projImg13 from "../../assets/Logo/BFSi/Sharekhan.png";
import projImg14 from "../../assets/Logo/BFSi/TJSB Bank.png";
import projImg15 from "../../assets/Logo/BFSi/Yes Bank.png";
import projImg16 from "../../assets/Logo/BFSi/mahindra-finance-logo.png";
import projImg18 from "../../assets/Logo/BFSi/AAVAS.png";
import projImg19 from "../../assets/Logo/BFSi/Axis Securities.png";
import projImg20 from "../../assets/Logo/BFSi/BNP Paribas.png";
import projImg21 from "../../assets/Logo/BFSi/ICICI Prudential AMC.png";
import projImg22 from "../../assets/Logo/BFSi/ICICI Prudential Life.png";
import projImg23 from "../../assets/Logo/BFSi/SODEXO.png";
import projImg24 from "../../assets/Logo/BFSi/LTFS.png";
import projImg25 from "../../assets/Logo/BFSi/Allahabad Bank.png";
import projImg26 from "../../assets/Logo/BFSi/IDFC Asset Management.png";
import projImg27 from "../../assets/Logo/BFSi/Karnataka Bank.png";
import projImg28 from "../../assets/Logo/BFSi/RBL Bank.png";

const row1 = [projImg1, projImg2, projImg3, projImg4, projImg5, projImg6, projImg7, projImg8,
  projImg9, projImg10, projImg11, projImg12, projImg13, projImg14, projImg15, projImg16, projImg17,
  projImg18,  projImg19, projImg20,  projImg21,  projImg22,  projImg23,  projImg24,  projImg25, projImg26,
  projImg27, projImg28];

  const AppContainer = styled.div`
  width: 100vw;
  height: 35vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 390%;
  animation: ${scrollX} 100s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const ImageGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); // Adjusted to display 5 images at a time
  gap: 15px; // Added gap for spacing between images
  place-items: center;
  width: 100%; // Adjusted width to take the full width
`;

const Image = styled.img`
  object-fit: contain;
  width: 600%;
  height: 75%;
  border-radius: 0.5rem;
  aspect-ratio: 4/5;
  padding: 5px 0px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

export const BFSIcard = () => {
  return (
    <AppContainer>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index + row1.length}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
};