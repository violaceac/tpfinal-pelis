import { useEffect } from 'react';
import usePelis from "../hooks/usePelis";




function Slider() {

  const { pelis, obtenerPelis } = usePelis();

useEffect(() => {
  
  obtenerPelis("now_playing")
}, []);

  return (

    <div>
    {pelis.map((peli)=> (
      <img
        key={peli.id}
        src={`https://image.tmdb.org/t/p/w500${peli.backdrop_path}`}
        alt={peli.title}
        className="w-full object-cover"
      />
      ))}
    </div>


  );
  
  
}

export default Slider