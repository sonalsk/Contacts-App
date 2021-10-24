import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../CSS/home.css'

const NavBar = () => {
    return (
        <Container>
            <AppBar className="head" position="static">
                <Toolbar>
                    <NavLink className="tabs" to="./" exact> Home </NavLink>
                    <NavLink className="tabs" to="/all" exact> All Contacts </NavLink>
                    <NavLink className="tabs" to="/add" exact> New Contact </NavLink>
                </Toolbar>
            </AppBar>
        </Container>
    )
}

export default NavBar;