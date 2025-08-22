import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoriteContext = createContext();

export default function FavoriteContextProvider({ children }) {

  const [allFavorites, setAllFavorites] = useState([]);
  const { get, set, ls } = useLocalStorage("favoritos")

  //montar al cargar
    useEffect(() => {
        const favoritesFromStorage = get();
        setAllFavorites(favoritesFromStorage);
    }, []);


  const addFavorite = (favorite) => {
    const newFavorites = [...allFavorites,favorite];
    setAllFavorites(newFavorites);
    set(newFavorites)
    console.log(newFavorites)
  };

  const removeFavorite = (id) => {
    const newFavorites = allFavorites.filter((favorite) => favorite.id !== id);
    setAllFavorites(newFavorites);
    set(newFavorites)
  };

  const isFavorite = (id) => {
    const exist = allFavorites.some((favorite) => favorite.id === id);
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
    totalFavorites,
  };

  return (
    <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
  );
}