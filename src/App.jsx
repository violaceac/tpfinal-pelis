
import Router from "./router/Router"

import FavoriteContextProvider from "./context/FavoriteContext"

function App() {


  return (
    <>
    <FavoriteContextProvider>
      <Router />
    </FavoriteContextProvider>
     
    </>
  )
}

export default App
