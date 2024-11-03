import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider } from "./shared/context/";
import { MenuLateral } from "./shared/components";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </AppThemeProvider>
  );
};
