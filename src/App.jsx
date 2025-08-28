import Router from "./Routes/Router"
import FavoriteContextProvider from "./context/FavoriteContext"

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#7E57C2", // Violeta suave
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#FF7043", // Naranja coral
        contrastText: "#ffffff",
      },
      background: {
        default: "#FAFAFA",
        paper: "#ffffff",
      },
      text: {
        primary: "#212121",
        secondary: "#616161",
      },
    },
    typography: {
      fontFamily: `'Poppins', 'Roboto', 'sans-serif'`,
      h1: { fontWeight: 700, fontSize: "2.2rem" },
      h2: { fontWeight: 600, fontSize: "1.8rem" },
      h3: { fontWeight: 500, fontSize: "1.5rem" },
      body1: { fontSize: "1rem" },
      button: { textTransform: "none", fontWeight: 500 },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 10,
            padding: "10px 20px",
            fontWeight: 600,
            boxShadow: "none",
            "&:hover": {
              boxShadow: "0px 4px 12px rgba(126, 87, 194, 0.25)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              transform: "translateY(-4px)",
            },
          },
        },
      },
    },
  });

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
