import { Box, Button, Typography } from "@mui/material";
import imgHero from "../../shared/assets/hero_01.png";

export const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingX: 3, // Adiciona espaçamento nas laterais
        paddingY: 5, // Adiciona espaçamento vertical
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 5, // Espaçamento entre a imagem e o texto
          width: "100%",
          flexDirection: { xs: "column", md: "row" }, // Em telas pequenas, organiza em coluna; em telas maiores, em linha
          maxWidth: "md", // Limita a largura máxima
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: { xs: 5, md: 10 }, // Margem superior para espaçamento
          }}
        >
          <img
            src={imgHero}
            alt="Profile"
            style={{ width: "250px", height: "250px", borderRadius: "50%" }}
          />
        </Box>

        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography variant="h5">Thiago Araújo</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Olá, me chamo Thiago, sou desenvolvedor full stack e estudante de
            Engenharia da Computação no Instituto Federal da Paraíba. Com
            experiência em front-end e back-end, consigo construir aplicações
            completas que vão da interface ao banco de dados, sempre priorizando
            uma experiência de usuário eficiente e um código bem estruturado.
            Além disso, tenho experiência em projetos de IoT, o que me permite
            integrar soluções de software a dispositivos físicos, criando
            sistemas versáteis e inovadores.
          </Typography>
          <Box
            display="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
            gap={2}
          >
            <Button variant="contained">Download CV</Button>
            <Button variant="contained">Meus Projetos</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
