import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';

const MenuList = () => {
  const router = useRouter();

  const menuItemList = [
    {
      name: 'Coffee Bean',
      items: ['Coffee Bean', 'Bean Info']
    },
    {
      name: 'Blending',
      items: ['Blending', 'Blending Info']
    }
  ]

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      {menuItemList.map((menu, index) => {
        return (
          <div key={index}>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              {menu.name}
            </Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            >
            {menu.items.map((item, index) => {
              return (
                <div key={index}>
                  <MenuItem onClick={() => router.push(`/${item}`)}>{item}</MenuItem>
                </div>
              )
            })}
          </Menu>
        </div>
        )
      })}
    </div>
  );
}

export default MenuList;