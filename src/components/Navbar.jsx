import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import logoIcon from "../assets/LOGO.png"

const pages = ["Blog", "Privacy Policy", "Contact Us", "About Us"];
const pages2 = [
  {
    title: "Blog",
    link: "",
  },
  {
    title: "Privacy Policy",
    link: "https://stripefeecalculator.net/page/privacy-policy/",
  },
  {
    title: "Contact Us",
    link: "https://stripefeecalculator.net/page/contact-us/",
  },
  {
    title: "About Us",
    link: "https://stripefeecalculator.net/page/about-us/"
  }
]
function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static" sx = {{
      bgcolor: "#433d3d",
      padding: 0,
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h4"
            noWrap
            component="a"
            href="#heading"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{
            flexGrow: 1,
            display: {xs: 'none', md: 'flex'},
            mr: 2,
          }}>
            <img src={logoIcon} style={{
            width: "70px",
            
          }}/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              {pages2.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{
            display: {xs: 'flex', md: 'none'},
            flexGrow: 1,
            mr: 2,
          }}>
            <img src={logoIcon} style={{
              width: '70px'
            }}/>
          </Box>
          <Box sx={{display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;