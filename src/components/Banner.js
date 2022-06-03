import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      showThumbs={false}
      showStatus={false}
      useKeyboardArrows
      className="presentation__mode"
    >
      <div>
        <img
          src="http://estato.html.themeforest.createit.pl/assets/images/demo-content/header-slider-1.jpg"
          alt="slider 1"
        />
      </div>
      <div>

        <img
          src="https://blog.coldwellbanker.com/wp-content/uploads/2020/04/Blue-Matter-Blog-Header.png"
          alt="slider 2"
          
        />
      
      </div>
      {/* <div>
        <img
          src="https://allmumbaiproperty.com/public/images/slider-new2.jpg"
          alt="slider 3"
        />
       
      </div> */}
    </Carousel>
  );
};

export default Banner;
