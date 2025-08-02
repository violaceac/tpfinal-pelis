import { useEffect } from "react";
import usePeliculas from "../hooks/usePeliculas";
import axios from "axios";

export default function MasPopulares() {
  const {
    obtenerMasPopulares,
    pelis,
    pagina,
    paginaAnterior,
    paginaSiguiente,
    totalPaginas,
  } = usePeliculas();

  {/*useEffect(() => {
  obtenerPeliculasPopulares(pagina).then(data =>{
    if(data) {
      setPelisMasPopulares(data.results);
      //setPagina(data.page);
      setTotalPaginas(data.total_pages);
    }
  });
 }, [pagina]);*/}

 useEffect (()=> {
    obtenerMasPopulares();
    // try{
    //   const response= await axios (
    //     `${url}?api_key=${apiKey}&page=${pagina}`
    //   );
    //   const data = await response.json();
    //   setPelisMasPopulares(data.results);
    //   setTotalPaginas(data.total_pages);
    // }catch (error){
    //   console.log(error)
    // }
  }
 ,[pagina]);

//  const manejoDePagina= (numeroPagina)=>{
//   setPagina(numeroPagina);
  
// }


  return (<>
    <div>
      {pelis.map((peli) => (
      <div key={peli.id} >
        <img
          src={`https://image.tmdb.org/t/p/w300${peli.poster_path}`}
          alt={peli.title}
      
        />
        <h3>{peli.title}</h3>
      </div>
    ))}
  </div>
  <div>
    <h2>Probando Paginación</h2>
  <div>
    <button onClick={paginaAnterior} disabled={pagina < 1}>Anterior</button>
        <span>Página {pagina} de {totalPaginas}</span>
        <button onClick={paginaSiguiente} disabled={pagina === totalPaginas}>Siguiente</button>
      </div>
    </div>
    </>
  )
}








