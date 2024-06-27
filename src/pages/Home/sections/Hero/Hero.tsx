import { Button, Container, Grid, styled, Typography } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";

import Avatar from "../../../../shared/assets/Sem título.jpg";

export const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));
  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <StyledImg src={Avatar} />
            </Grid>

            <Grid item xs={12} md={7}>
              <Typography color="primary" variant="h1" textAlign="center">
                Thiago Araújo
              </Typography>

              <Typography color="primary" variant="h2" textAlign="center">
                Desenvolvedor
              </Typography>

              <Grid container display="flex" justifyContent="center">
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <Button>
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                >
                  <Button>
                    <EmailIcon />
                    Contact me
                  </Button>
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
