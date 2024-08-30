import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imagen1 from "../assets/img/Salon bronce.jpg";
import imagen3 from "../assets/img/Salon oro.jpg";
import imagen2 from "../assets/img/Salon plata.jpg";

function HomePage() {
  return (
    <div className="homepage-container">
      <Carousel 
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        showIndicators={true}
        dynamicHeight={true}
      >
        <div>
          <img src={imagen1} alt="Slide 1" />
          <p className="h-6">Salón Bronce</p>
        </div>
        <div>
          <img src={imagen2} alt="Slide 2" />
          <p className="h-6">Salón Plata</p>
        </div>
        <div>
          <img src={imagen3} alt="Slide 3" />
          <p className="h-6">Salón Oro</p>
        </div>
      </Carousel>
    </div>
  );
}

export default HomePage;
