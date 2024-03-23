/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// eslint-disable-next-line react/prop-types
export default function DropdownNavbar({title, subItems}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLinkClick = (url) => {
    window.location.href = url; // Navigate to the specified URL
    handleClose(); // Close the menu
  };
  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx = {{
            color: 'white',
            fontSize: 16
        }}
      >
        {title}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
            '& .MuiMenu-paper': {
              backgroundColor: '#433d3d'
            },
          }}
          >
        {subItems.map(({title, link}) => (
            <MenuItem key = {title}  disableRipple sx = {{
                color: 'white'
            }} onClick = {() => {
                handleLinkClick(link)
            }}>
            {title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}