import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./views/components/AppRoutes/AppRoutes";
import withErrorBoundary from "./views/components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default withErrorBoundary(App);
