import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div>
      <Link to="/projetos">Projetos</Link>
      <Link to="/habilidades">Habilidades</Link>
      <Link to="/contato">Contato</Link>

      <Button variant="contained" color="primary">
        Teste
      </Button>
    </div>
  );
};
