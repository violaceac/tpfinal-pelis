import { useEffect } from "react";
import useMasPopulares from "../hooks/useMasPopulares";

export default function MasPopulares() {
  const {
    obtenerPeliculasPopulares,
    pelisMasPopulares,
    setPelisMasPopulares,
    pagina,
    setPagina,
    paginaAnterior,
    paginaSiguiente,
    totalPaginas,
    setTotalPaginas
  } = useMasPopulares();

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
  const populares = async ()=>{
    obtenerPeliculasPopulares(pagina);
    try{
      const response= await axios (
        `${url}?api_key=${apiKey}&page=${pagina}`
      );
      const data = await response.json();
      setPelisMasPopulares(data.results);
      setTotalPaginas(data.total_pages);
    }catch (error){
      console.log(error)
    }
  }
  populares()
 },[pagina]);

 const manejoDePagina= (numeroPagina)=>{
  setPagina(numeroPagina);
 }


  return (<>
    <div>
      {pelisMasPopulares.map((peli) => (
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
    <button onClick={()=>manejoDePagina(pagina -1)}>Anterior</button>
        <span>Página {pagina} de {totalPaginas}</span>
        <button onClick={()=>manejoDePagina(pagina +1)}>Siguiente</button>
      </div>
    </div>
    </>
  )
}






//api key c3b22d6747c3bcd1016c2dbac5dfd3bb

//token de acceso zeyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2IyMmQ2NzQ3YzNiY2QxMDE2YzJkYmFjNWRmZDNiYiIsIm5iZiI6MTc1MzQ4MTM5NS4yNzQsInN1YiI6IjY4ODQwMGIzOTIwZWNhZjI5ZjI0NjFlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._sPSNG-VaSfr0c5ASQdVKxfIik2TzYnokOMXHacjG_4