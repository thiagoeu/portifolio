import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../shared/context";

export const Hero = () => {
  const { toggleTheme } = useThemeContext();
  return (
    <Box>
      <Link to="/projetos">Projetos</Link>
      <Link to="/habilidades">Habilidades</Link>
      <Link to="/contato">Contato</Link>

      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Teste
      </Button>
    </Box>
  );
};
