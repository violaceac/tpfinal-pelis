import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoriteContext = createContext();

export default function FavoriteContextProvider({ children }) {
  const [allFavorites, setAllFavorites] = useState([]); // EN SOLUCION 1 --> null  || EN SOLUCION 2 ---> []
  const { get, set, ls } = useLocalStorage()



  const addFavorite = (favorite) => {
    setAllFavorites([...allFavorites, favorite]);
    set("favoritos", [...allFavorites, favorite])
    console.log(allFavorites)
  };

  const removeFavorite = (id) => {
    const newFavorites = allFavorites.filter((favorite) => favorite.id !== id);
    setAllFavorites(newFavorites);
    set("favoritos", newFavorites)
  };

  const isFavorite = (id) => {
    const exist = allFavorites?.some((character) => character.id === id);
    return exist;
  };

  const existInFavorite = (id) => {
    const exist = allFavorites?.some((character) => character.id === id);
    return exist;
  };

  const totalFavorites = () => {
    return allFavorites?.length;
  };

  const data = {
    removeFavorite,
    addFavorite,
    isFavorite,
    allFavorites,
    existInFavorite,
    totalFavorites,
  };

  return (
    <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
  );
}

// // este es el del ecommerce

// import { createContext, useState } from "react";

// export const FavoriteContext = createContext();

// const FavoriteContextProvider = ({children}) => {

//     const [favorites, setFavorites] = useState([])

//     function toogleFavorite(newFavorite) {
//     const existe = existInFavorite(newFavorite.id)
//     if(existe) {
//       setFavorites(favorites.filter(fav => fav.id !== newFavorite.id))
//     } else {
//       setFavorites([...favorites, newFavorite])
//     }
//     console.log(favorites)
//   }

//   function existInFavorite(id) {
//     return favorites.some((fav) => fav.id == id)
//   }

//   function countInFavorite() {
//     return favorites.length
//   }

//   const data = {
//     favorites,
//     toogleFavorite,
//     existInFavorite,
//     countInFavorite
//   }

//   return  <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
// }

// export default FavoriteContextProvider



// este es el de rick y morty

// import { createContext, useEffect, useState } from "react";
// import useLocalStorage from "../hooks/useLocalStorage";

// export const FavoriteContext = createContext();

// export default function FavoriteContextProvider({ children }) {
//   const [allFavorites, setAllFavorites] = useState([]); // EN SOLUCION 1 --> null  || EN SOLUCION 2 ---> []
//   const { get, set, ls } = useLocalStorage()

//   const addFavorite = (favorite) => {
//     setAllFavorites([...allFavorites, favorite]);
//     set("favoritos", [...allFavorites, favorite])
//   };

//   const removeFavorite = (id) => {
//     const newFavorites = allFavorites.filter((favorite) => favorite.id !== id);
//     setAllFavorites(newFavorites);
//     set("favoritos", newFavorites)
//   };

//   const isFavorite = (id) => {
//     const exist = allFavorites?.some((character) => character.id === id);
//     return exist;
//   };

//   const totalFavorites = () => {
//     return allFavorites?.length;
//   };

//   const data = {
//     allFavorites,
//     addFavorite,
//     removeFavorite,
//     isFavorite,
//     totalFavorites,
//   };

//   return (
//     <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
//   );
// }