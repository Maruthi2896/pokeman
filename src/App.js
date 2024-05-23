import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Pokeman from "./components/Pokeman";
import About from "./components/About";
import ButtonAppBar from "./components/Navbar2";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Cards from "./components/Cards";
import LikedPokeman from "./components/Cards";

function App() {
  const [modes, setModes] = useState(false);
  const [ifrmode, setIfrmode] = useState(0);
  const [likedPokemon, setLikedPokemon] = useState({});
  const darkTheme = createTheme({
    palette: {
      mode: modes ? "dark" : "light",
    },
  });
  const handleMode = () => {
    setModes(!modes);
    setIfrmode(modes ? 0 : 1);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <div className="App">
          <ButtonAppBar mode={modes} handleMode={handleMode} />
          <Routes>
            <Route path="/" element={<Home mode={ifrmode}  />} />
            <Route path="/pokeman" element={<Pokeman setLikedPokemon={setLikedPokemon}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/liked" element={<LikedPokeman likedPokemon={likedPokemon} />} />
          </Routes>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
//
