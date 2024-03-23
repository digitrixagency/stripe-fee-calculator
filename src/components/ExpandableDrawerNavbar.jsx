import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logoIcon from "../assets/Logo.png"
import DropdownNavbar from './DropdownNavbar';
const drawerWidth = 240;
import { useState } from 'react';
import Collapse from "@mui/material/Collapse";
import { ExpandLess, ExpandMore } from '@mui/icons-material';

function ExpandableDrawerNavbar(props) {
    const [openMenus, setOpenMenus] = useState({});

    const toggleMenu = (index) => {
      setOpenMenus(prevOpenMenus => ({
        ...prevOpenMenus,
        [index]: !prevOpenMenus[index]
      }));
    };
  
    const menuItems = [
      {
        title: "Home",
        link: "/",
        expandable: false,
      },
      {
        title: "Blog",
        link: "https://stripefeecalculator.net/page/help/",
        expandable: false
      },
      {
        title: "Contact Us",
        expandable: true,
        subItems: [
          {
            title: "Contact",
            link: "https://stripefeecalculator.net/page/contact-us/"
          },
          {
            title: "Help",
            link: "https://stripefeecalculator.net/page/help/"
          },
          {
            title: "Trust",
            link: "https://stripefeecalculator.net/page/trust/"
          }
        ]
      },
      {
        title: "About Us",
        expandable: true,
        subItems: [
          {
            title: "About",
            link: "https://stripefeecalculator.net/page/about-us/"
          },
          {
            title: "Privacy Policy",
            link: "https://stripefeecalculator.net/page/privacy-policy/"
          },
          {
            title: "DMCA",
            link: "https://stripefeecalculator.net/page/dmca/"
          },
          {
            title: "Terms of Service",
            link: "https://stripefeecalculator.net/page/terms-and-service/",
          },
          {
            title: "Terms of Sale",
            link: "https://stripefeecalculator.net/page/terms-of-sale/"
          },
          {
            title: "Accessibility",
            link: "https://stripefeecalculator.net/page/terms-of-sale/"
          },
          {
            title: "Guest Posting",
            link: "https://stripefeecalculator.net/page/guest-posting/"
          },
          {
            title: "Advertise",
            link: "https://stripefeecalculator.net/page/advertise/"
          },
          {
            title: "Work with Us",
            link: "https://stripefeecalculator.net/page/work-with-us/"
          },
          {
            title: "Subscription",
            link: "https://stripefeecalculator.net/page/subscription/"
          }
        ]
      }
    ];
  // eslint-disable-next-line react/prop-types
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2, color: 'white' }}>
        Stripe Fee Calculator
      </Typography>
      <Divider />
      <List>
        {menuItems.map((menuItem, index) => (
          <div key={menuItem.title}>
            {menuItem.expandable ? (
              <div>
                <ListItemButton onClick={() => toggleMenu(index)}>
                  <ListItemText primary={menuItem.title} component='a' sx = {{
                    color: 'white'}}/>
                  {openMenus[index] ? <ExpandLess sx = {{color: 'white'}}/> : <ExpandMore sx = {{color: 'white'}}/>}
                </ListItemButton>
                <Collapse in={openMenus[index]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {menuItem.subItems.map((subItem) => (
                      <ListItemButton key={subItem.title} component="a" href={subItem.link}>
                        <ListItemText inset primary={subItem.title} sx = {{color: 'white'}}/>
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ) : (
              <ListItemButton component="a" href={menuItem.link}>
                <ListItemText primary={menuItem.title} sx = {{color: 'white'}}/>
              </ListItemButton>
            )}
          </div>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} >
      <AppBar component="nav" position='static' sx = {{
        bgcolor: '#433d3d'
      }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx = {{
            display: {xs: 'none', md: 'block'},
          }}>
          <a href="/">
            <img src={logoIcon} style={{
              width: "70px",
            }}/>
            </a>
          </Box>
          <Typography
            variant="h4"
            component="a"
            pl={1}
            pb={1}
            href='/'
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', fontWeight: 500, display: { xs: 'none', md: 'block' } }}
          >
            Stripe Fee Calculator
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((page) => (
              page.expandable ? <DropdownNavbar key={page.title} subItems={page.subItems} title={page.title}/> :  
              <Button key = {page.title} component={'a'} href = {page.link} sx = {{
                color:"white",
                fontSize: 16
              }}>
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: '#433d3d' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default ExpandableDrawerNavbar;