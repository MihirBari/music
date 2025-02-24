import React, { useState  } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  const [swiper, setSwiper] = useState(null);

  const projects = [
    {
      caption: "TATA Technologies",
      statement: `"Tools such as HCL BigFix with Techsa as a value added partner have enabled us to consistently deploy a set of base software solutions, while regularly updating software security and measuring compliance – thus turning up and operating delivery centers faster and better!! 
          Putting it simply, Better products benefit people and that is our business.."`,
      author: ` - V Balaji (CIO)`,
    },
    {
      caption: "Tech Mahindra Buisness Services Group",
      statement: `"Techsa Services has supplied, implemented and maintained the BigFix Endpoint Management solution across all locations. The services of Techsa Services Private Limited are satisfactory.."
      `,
      author: `- Chandrashekhar Naini (Head of Information Security)`,
    },
    {
      caption: "DCB Bank",
      statement: `"Techsa Services has supplied, implemented and supported the BigFix Endpoint Management solutions across the bank locations.."
      `,
      author: `- Balasaheb Ugale (Head IT Infrstructure)`,
    },
    {
      caption: "IDBI Bank",
      statement: `"Techsa Services has successfully deployed the Bigfix solution for Patch Management requirements for over 16000 endpoints.."
      `,
      author: `- Niju Mohan (Head of Information Security)`,
    },
    {
      caption: "Shoppers Stop",
      statement: `"Techsa has been our implementation partner for deploying the Bigfix software and Solarwinds Network Management tools at Shoppers Stop. These software manage the IT infrastructure like the Network devices, Servers, Applications and Desktops at the Stores. We acknowledge and appreciate 
      Techsa's technical and project management abilities to handle complex deployments. We wish Techsa Services all the best in their future endeavors.  "
      `,
      author: ` - Anil Shankar (Customer Care Associate & Vice President - Solutions & Technology)`,
    },
  ];

  const handleMouseEnter = () => {
    if (swiper) {
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiper) {
      swiper.autoplay.start();
    }
  };

  return (
    <>
<Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        navigation={true}
        modules={[EffectCoverflow, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="mySwiper"
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {projects.map((contents, index) => (
          <SwiperSlide key={index}>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <TestimonialCard
                key={contents.id}
                name={contents.caption}
                statement={contents.statement}
                author={contents.author}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
