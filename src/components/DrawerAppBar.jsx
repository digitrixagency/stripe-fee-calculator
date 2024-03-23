// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import logoIcon from "../assets/Logo.png"
// import DropdownNavbar from './DropdownNavbar';
// import NestedList from './NestedList';
// const drawerWidth = 240;

// const pages = [
//   {
//     title: "Blog",
//     link: "https://stripefeecalculator.net/page/help/",
//   },
//   {
//     title: "Privacy Policy",
//     link: "https://stripefeecalculator.net/page/privacy-policy/",
//   },
//   {
//     title: "Contact Us",
//     link: "https://stripefeecalculator.net/page/contact-us/",
//   },
//   {
//     title: "About Us",
//     link: "https://stripefeecalculator.net/page/about-us/"
//   }
// ]

// function DrawerAppBar(props) {
//   // eslint-disable-next-line react/prop-types
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
//       <Typography variant="h6" sx={{ my: 2, color: 'white' }}>
//         Stripe Fee Calculator
//       </Typography>
//       <Divider />
//       <List>
//         {pages.map((item) => (
//           <ListItem key={item.title} disablePadding>
//             <ListItemButton sx={{ textAlign: 'center' }} component={'a'} href={item.link} >
//               <ListItemText primary={item.title} sx = {{
//                 color: 'white'
//               }} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//         <NestedList/>
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }} >
//       <AppBar component="nav" position='static' sx = {{
//         bgcolor: '#433d3d'
//       }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { md: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Box sx = {{
//             display: {xs: 'none', md: 'block'},
//           }}>
//           <a href="/">
//             <img src={logoIcon} style={{
//               width: "70px",
//             }}/>
//             </a>
//           </Box>
//           <Typography
//             variant="h4"
//             component="a"
//             pl={1}
//             pb={1}
//             href='/'
//             sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit', fontWeight: 500, display: { xs: 'none', md: 'block' } }}
//           >
//             Stripe Fee Calculator
//           </Typography>
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button key = {page.title} component={'a'} href = {page.link} sx = {{
//                 color:"white",
//                 fontSize: 16
//               }}>
//                 {page.title}
//               </Button>
//             ))}
//             <DropdownNavbar/>
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true,
//           }}
//           sx={{
//             display: { xs: 'block', md: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: '#433d3d' },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }

// export default DrawerAppBar;