import MasPopulares from "./pages/MasPopulares";
import UltimosLanzamientos from "./pages/UltimosLanzamientos";


function App() {
  return (

  <>
   
    <FavoriteContextProvider>

      <CssBaseline />
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
    </FavoriteContextProvider>

     
    </>
  )
}

export default App