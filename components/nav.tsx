import { useState, MouseEvent }from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import { MenuItemListType } from '../types/index';
import Image from 'next/image';
import coffeebean from '../public/coffeebean.png';
import Stack from '@mui/material/Stack';

const Nav = () => {
  const router = useRouter();

  const menuItemList: MenuItemListType[] = [
    {
      name: 'Coffee Bean',
      items: ['Coffee Bean', 'Bean Info']
    },
    {
      name: 'Blending',
      items: ['Blending', 'Blending Info']
    }
  ]

  const [menuSelect, setMenuSelect] = useState(menuItemList[0]);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };  

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack 
      direction='row' 
      spacing={4} 
      justifyContent='center' 
      marginTop='15px'
    >
      {/* <Image src={coffeebean} alt='main'/> */}
      {menuItemList.map((menu: MenuItemListType, index: number) => {
        return (
          <div key={index}>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={(event) => {
                handleClick(event);
                setMenuSelect(menu)
              }}
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
            {menuSelect.items.map((item: string, index: number) => {
              return (
                <MenuItem key={index}onClick={()=> router.push(`/${item}`)}>{item}</MenuItem>
              )
            })}
            </Menu>
          </div>
        )
      })}
    </Stack>
  )
}

export default Nav;