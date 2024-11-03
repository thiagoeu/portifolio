import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Projetos = () => {
  const history = useNavigate();

  const handleClick = () => {
    history("/pagina-inicial");
  };
  return (
    <Box>
      <h1>Projetos</h1>
      <button onClick={handleClick}>Pagina inicial</button>
    </Box>
  );
};
