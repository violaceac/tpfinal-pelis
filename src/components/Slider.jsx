import { useEffect } from 'react';
import usePelis from "../hooks/usePelis";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




function Slider() {

  const { pelis, obtenerPelis } = usePelis();

useEffect(() => {
  
  obtenerPelis("now_playing")
}, []);

  return (

    <Carousel
      showArrows={true}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={false}
      showIndicators={false} 
      showThumbs={false} 
      swipeable={true}
      emulateTouch={true} 
    >
      {pelis.map((peli) => (
        <div key={peli.id}>
          <img
            src={`https://image.tmdb.org/t/p/w1280${peli.backdrop_path}`}
            alt={peli.title}
          />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{peli.title}</h3>
            </div>
        </div>
      ))}
    </Carousel>


  );
  
  
}

export default Slider

