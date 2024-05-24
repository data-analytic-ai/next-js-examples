'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu'; // Importamos el componente Menu de Material-UI
import MenuItem from '@mui/material/MenuItem'; // Importamos el componente MenuItem de Material-UI
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Header() {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#ffd600', width: '200%', marginLeft: '-50%' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleClick} // Llamamos a la función para abrir el menú cuando se hace clic
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        For-devs
                    </Typography>
                    <Button color="inherit"  onClick={() => router.push('/login ')}>Login</Button>
                    <Button color="inherit"  onClick={() => router.push('/signup ')}>sign up</Button>
                </Toolbar>
            </AppBar>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => router.push('/dashboard/settings/profile')}>profile</MenuItem>
                <MenuItem onClick={() => router.push('/dashboard/settings/account')}>My account</MenuItem>
                <MenuItem onClick={() => router.push('/dashboard')}>dashboard</MenuItem>
            </Menu>
        </Box>
    );
}
