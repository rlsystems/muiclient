import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListSubheader from '@mui/material/ListSubheader';

import React from 'react'

import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';

import AssignmentIcon from '@mui/icons-material/Assignment';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';
import { Link } from 'react-router-dom';
import { Hail } from '@mui/icons-material';


export default observer(function NavBar() {
    const { userStore: { currentUser, logout } } = useStore();
    return (
        <Drawer variant="permanent" open={true} sx={{width: '240px', '& .MuiDrawer-paper':{width: '240px'}}}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1],
                }}
            >
                <IconButton >
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <List>

                <ListItem button component={Link} to="/dashboard">
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/brands">
                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Brands" />
                </ListItem>
                <ListItem button component={Link} to="/users">
                    <ListItemIcon>
                        <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItem>
                <ListItem button component={Link} to="/tenants">
                    <ListItemIcon>
                        <Hail />
                    </ListItemIcon>
                    <ListItemText primary="Tenants" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListSubheader inset>Account</ListSubheader>
                <ListItem button>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText onClick={logout} primary="Log Out" />
                </ListItem>
                
            </List>
        </Drawer>
    )
}
) 
