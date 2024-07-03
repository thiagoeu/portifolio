import { Container, Grid, styled, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";

import imagePath from "../../../../shared/assets/pxfuel.jpg";
import Avatar from "../../../../shared/assets/Sem título.jpg";

import { StyledButton } from "../../../../shared/components/StyledButton";

export const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    backgroundImage: `url(${imagePath})`,
    backgroundSize: "cover", // Isso faz a imagem cobrir todo o espaço do componente
    backgroundPosition: "center", // Isso centraliza a imagem
  }));
  const StyledImg = styled("img")(({ theme }) => ({
    width: "90%",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.primary.contrastText}`,
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={5}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StyledImg src={Avatar} />
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography
                color="primary.contrastText"
                variant="h1"
                textAlign="center"
              >
                Thiago Araújo
              </Typography>

              <Typography
                color="primary.contrastText"
                variant="h2"
                textAlign="center"
              >
                Desenvolvedor
              </Typography>

              <Grid
                container
                display="flex"
                justifyContent="center"
                spacing={3}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton>
                    <EmailIcon />
                    <Typography>Contact me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

// const StyledHero = styled("div")(() => ({

// }));
