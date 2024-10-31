import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider } from "./shared/context/";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
};
