import { Container, styled, Box, Typography, useTheme } from "@mui/material";
import { LeftPositionedTimeline } from "../../../../shared/components/TimeLine";

const StyledAbout = styled("div")(() => ({
  backgroundColor: "",
  height: "100vh",
}));

export const About = () => {
  return (
    <StyledAbout>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Box display={"flex"} justifyContent={"center"}>
          <Typography variant="h1">Sobre</Typography>
        </Box>
        <Box display="flex">
          <LeftPositionedTimeline />
        </Box>
      </Container>
    </StyledAbout>
  );
};
