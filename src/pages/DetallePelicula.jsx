import { useEffect } from 'react' 
import { useParams } from "react-router"
import usePeliculas from '../hooks/usePeliculas'


import ReactPlayer from "react-player";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";


export default function DetallePelicula() {
 
 const {id} = useParams();
 const {
   peliculaDetalle,
   obtenerDetallePelicula,
   loading,
   error,
  } = usePeliculas();


useEffect (()=>{
  console.log('ID de la película:', id);
  obtenerDetallePelicula(id);
  console.log("hols")
  }
,[id])


useEffect(() => {
  if (peliculaDetalle) {
    console.log('Datos completos de la película:', peliculaDetalle);
    console.log('Videos disponibles:', peliculaDetalle.videos);
    console.log('Results de videos:', peliculaDetalle.videos?.results);
  }
}, [peliculaDetalle]);


//si esta cargando , muestra cargando . 17/8
if(loading) {
   return <div>Cargando...</div> 
}

// Paso 2: Muestra el estado de error
if (error) {
   return <div>Error: {error}</div>;
}

// Si no se encontró la película después de la carga, muestra un mensaje. 17/8 // 

 if (!peliculaDetalle) {
   return <div>No se pudo encontrar la película.</div>;
}


const trailer = peliculaDetalle.videos?.results?.find(
   (v) => v.type === "Trailer" && v.site === "YouTube"
  );




const trailerUrl = trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
console.log(trailerUrl);


return (
   <div>
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <h2>{peliculaDetalle.title}</h2>


  {/* poster */}
    <img
      src={`https://image.tmdb.org/t/p/w500${peliculaDetalle.poster_path}`}
      alt={peliculaDetalle.title}
      style={{ width: "300px", borderRadius: "8px" }}
    />


{/* Sinopsis */}
   <p>{peliculaDetalle.overview}</p>


{/* Trailer */}
  {trailerUrl ? (
    <MediaController style={{ width: "100%", aspectRatio: "16/9", marginTop: "20px" }}>
    <ReactPlayer
      slot="media"
      src={trailerUrl}
      controls={false}
      width="100%"
      height="100%"
       style={{ "--controls": "none" }}
    />
    <MediaControlBar>
    <MediaPlayButton />
    <MediaSeekBackwardButton seekOffset={10} />
    <MediaSeekForwardButton seekOffset={10} />
    <MediaTimeRange />
    <MediaTimeDisplay showDuration />
    <MediaMuteButton />
    <MediaVolumeRange />
    <MediaPlaybackRateButton />
    <MediaFullscreenButton />
    </MediaControlBar>
    </MediaController>
 ) : (
  <p>No hay trailer disponible</p>
  )}
  </div>
</div>
);
} 



  




