import { useEffect } from 'react';
import usePelis from "../hooks/usePelis";

function ListaMejorPuntadas() {

   const { pelis, obtenerPelis } = usePelis();

useEffect(() => {
  
  obtenerPelis("top_rated")
}, []);

  return (
    <div>
      {pelis.map((peli)=> (
        <h1 key={peli.id}>{peli.title}</h1>
      ))}
    </div>
  )
}

export default ListaMejorPuntadas