import { Contrast, Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../context";
import { useState } from "react";

interface IMenuLateral {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateral> = ({ children }) => {
  const theme = useTheme();
  const { toggleTheme } = useThemeContext();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Define a altura da AppBar
  const appBarHeight = theme.spacing(8);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box width="100vw" height="100vh" overflow="hidden">
      <AppBar component="nav">
        <Toolbar
          sx={{
            minHeight: appBarHeight,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo (à esquerda em telas grandes, à direita do menu hambúrguer em telas pequenas) */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Thiago Araújo Dev.
          </Typography>

          {/* Botão de menu para telas pequenas */}
          <Box
            sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
          >
            <IconButton color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Botões de navegação e alternância de tema para telas maiores */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/habilidades" color="inherit">
              Habilidades
            </Button>
            <Button component={Link} to="/projetos" color="inherit">
              Projetos
            </Button>
            <Button component={Link} to="/contato" color="inherit">
              Contato
            </Button>
            <Button onClick={toggleTheme} color="inherit">
              <Contrast />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Componente Toolbar vazio para criar espaço abaixo da AppBar */}
      <Toolbar sx={{ minHeight: appBarHeight }} />

      {/* Drawer para o menu lateral em telas pequenas */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250 }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/habilidades"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Habilidades" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/projetos"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Projetos" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                to="/contato"
                onClick={handleDrawerToggle}
              >
                <ListItemText primary="Contato" />
              </ListItemButton>
            </ListItem>
            {/* Botão de alternância de tema dentro do Drawer */}
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  toggleTheme();
                  handleDrawerToggle();
                }}
              >
                <ListItemText primary="Alternar Tema" />
                <Contrast />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box>{children}</Box>
    </Box>
  );
};
