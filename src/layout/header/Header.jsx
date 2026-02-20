import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Container, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Select from '@mui/material/Select';
import './Header.scss';
import CommonButton from "../../components/UI/Button.jsx";
import { headerRoutes } from '../../routes/routes';
import Logo from '../../assets/star.svg'

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = React.useState(localStorage.getItem("i18nextLng") || "ru");
  const [opacity, setOpacity] = useState(0.8);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(window.scrollY > 100 ? 1 : 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar className='header' position="sticky" sx={{
      transition: "opacity 0.3s ease",
      opacity: opacity,
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{
            mr: { lg: "100px" }
          }}>
            <Link to={"/"} style={{ display: 'flex', textTransform: "uppercase", alignItems: 'center', color: "white" }}>
              Aqvela
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {headerRoutes.filter((r) => !r.disabled).map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Button sx={{
                    color: 'black',
                    '&:hover': {
                      'backgroundColor': 'transparent'
                    }
                  }} component={Link} to={page.linkTo}>{t(page.name)}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box className="menu" sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            {headerRoutes.filter((r) => !r.disabled).map((page) => (
              <Button
                component={NavLink}
                to={page.linkTo}
                key={page.name}
                sx={{
                  color: '#fff',
                  '&:hover': {
                    'backgroundColor': 'transparent'
                  }
                }}
              >
                {t(page.name)}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Select
              size={"small"}
              value={lang}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "transparent" },
                color: "#fff",
              }}
            >
              <MenuItem value={"en"}>EN</MenuItem>
              <MenuItem value={"ru"}>RU</MenuItem>
            </Select>
            <CommonButton sx={{
              border: "1px solid #fff",
              color: "#fff",
            }} onClick={() => navigate(`/login`)}>{t("Войти")}</CommonButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;