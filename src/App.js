import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AppBar, Button, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core';
import List from './List';
import './App.css';

const App = () => {
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);

    const {
        user,
        logout,
    } = useAuth0();

    const handleMenuClick = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    return (
        <div style={{ width: "100%", height: "100%"}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{flexGrow: 1}}>
                        Shopping List
                    </Typography>
                    <Typography style={{paddingRight: "12px"}}>
                        Hello, {user.nickname}
                    </Typography>
                    <Button color="inherit" onClick={handleMenuClick}>
                        <img src={user.picture} style={{width: "36px"}} />
                    </Button>
                    <Menu
                        id="user-menu"
                        anchorEl={menuAnchorEl}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            horizontal: "center",
                        }}
                        keepMounted
                        open={Boolean(menuAnchorEl)}
                        onClose={handleMenuClose}>
                        <MenuItem>My account</MenuItem>
                        <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <List />
        </div>
    );
}

export default App;
