import styled, { keyframes, css } from "styled-components";
import projImg1 from "../../assets/Logo/Services/Awfis .png";
import projImg2 from "../../assets/Logo/Services/Hinduja Hospital.png";
import projImg3 from "../../assets/Logo/Services/Pine Labs.png";
import projImg4 from "../../assets/Logo/Services/Shoppers Stop.png";
import projImg5 from "../../assets/Logo/Services/Sun Pharma.png";
import projImg6 from "../../assets/Logo/Services/T-Systems.png";
import projImg7 from "../../assets/Logo/Services/TATA Comm.png";
import projImg8 from "../../assets/Logo/Services/Viatris.png";


const row1  = [projImg1, projImg2, projImg3, projImg4, projImg5, projImg6
    , projImg7, projImg8];

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
    width: 130%;
    animation: ${scrollX} 30s linear infinite;
  `;
  
  const MarqueeGroup = styled.div`
    ${common}
  `;
  
  const ImageGroup = styled.div`
    display: grid;
    place-items: center;
    width: clamp(10rem, 1rem + 40vmin, 30rem);
    padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
  `;
  
  const Image = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    aspect-ratio: 4/3;
    padding: 5px 0px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  `;

export const Services = () => {
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
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>

      </Wrapper>
    </AppContainer>
  );
};