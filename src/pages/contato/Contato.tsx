import { Box, Typography, useTheme } from "@mui/material";

export const Contato = () => {
  const theme = useTheme();

  return (
    <Box marginTop={theme.spacing(2)}>
      <Typography variant="h2" sx={{ fontSize: theme.spacing(7) }}>
        Contato
      </Typography>

      <Typography variant="h3" sx={{ fontSize: theme.spacing(7) }}>
        Email: ithiagoaraudo@gmail.com
      </Typography>
    </Box>
  );
};
