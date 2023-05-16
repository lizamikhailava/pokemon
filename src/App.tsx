import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonDetailsPopup } from "./views/components/PokemonDetailsPopup/PokemonDetailsPopup";
import { ErrorPage } from "./views/pages/ErrorPage/ErrorPage";
import { HomePage } from "./views/pages/HomePage/HomePage";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <PokemonDetailsPopup />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;
