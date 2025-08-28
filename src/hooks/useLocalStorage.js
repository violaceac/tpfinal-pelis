import { useState, useCallback } from 'react'

function useLocalStorage() {

    const getInitialData = () => {
        const item = localStorage.getItem("favoritos");
        return item ? JSON.parse(item) : []; 
    }
            
    const [ls, setLs] = useState(getInitialData);

    const set = useCallback((datos) => {
        setLs(datos);
        localStorage.setItem("favoritos", JSON.stringify(datos));
    }, []);

    const get = useCallback(() => {
        const datos = JSON.parse(localStorage.getItem("favoritos")) || [];
        setLs(datos);
        return datos;
    }, []);
        


    return {
        set,
        get,
        ls
    }
}


export default useLocalStorage;