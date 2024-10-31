import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@emotion/react";
import { LightTheme } from "./shared/theme";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
