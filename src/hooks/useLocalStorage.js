import React from 'react'
import { useState } from 'react'

function useLocalStorage() {

    const [ls, setLs] = useState([])

    function set(datos) {
        return localStorage.setItem("favoritos", JSON.stringify(datos))
    }

    function get() {
       const datosObtenidosDeLs = JSON.parse(localStorage.getItem("favoritos"))
       setLs(datosObtenidosDeLs)
       return datosObtenidosDeLs
    }

  return {
    set,
    get,
    ls
  }
}

export default useLocalStorage

