import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Projetos } from "../pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagina-inicial" element={<h1>olá from rotas</h1>} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Routes>
    </BrowserRouter>
  );
};
