import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    tabs: {
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight: '20px',
        fontSize: 20
    }
});

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="./" exact> Home </NavLink>
                <NavLink className={classes.tabs} to="/all" exact> All Contacts </NavLink>
                <NavLink className={classes.tabs} to="/add" exact> Add Contact </NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;