import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { iconos } from '../misc/Iconos';
import { Link } from 'react-router-dom';
import React from 'react';
const drawerWidth = 240;
const menuOptions = [
    { opcion: 'Inicio', icono: 'HomeIcon', ruta: '/new' },
    { opcion: 'Nuevo', icono: 'AddIcon', ruta: '/new' },
    { opcion: 'Mostrar Todos', icono: 'ListIcon', ruta: '/all' },
];
const SideBar = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >

            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                {/* <Toolbar /> */}
                <Divider />
                <List>
                    {menuOptions.map((item, index) => {
                        const IconComponent = iconos[item.icono]; // ← obtiene el componente dinámicamente
                        return (
                            <React.Fragment key={index}>
                                <ListItem disablePadding>
                                    <ListItemButton
                                        component={Link}
                                        to={item.ruta || '/'}
                                    >
                                        <ListItemIcon>
                                            {IconComponent ? <IconComponent /> : null}
                                        </ListItemIcon>
                                        <ListItemText primary={item.opcion} />
                                    </ListItemButton>

                                </ListItem>
                                <Divider />
                            </React.Fragment>

                        );
                    })}
                </List>

            </Drawer>

        </Box>
    );
}
export default SideBar;