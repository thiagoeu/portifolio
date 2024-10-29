import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Contato, Habilidades, Projetos } from "../pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pagina-inicial" element={<h1>olá from rotas</h1>} />
        <Route path="/habilidades" element={<Habilidades />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      </Routes>
    </BrowserRouter>
  );
};
