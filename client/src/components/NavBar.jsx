import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Header= styled(AppBar)`
    background-color: #111111;
`
const Tabs= styled(NavLink)`
    font-size: 20px;
    margin-right: 20px;
    text-decoration: none;
    color: white;
`

const NavBar=()=>{
    return (
        <Header position="static">
        <Toolbar>
        <Tabs to="/">crud</Tabs>
        <Tabs to="/add">add users</Tabs>
        <Tabs to="/all">user</Tabs>
        </Toolbar>
      </Header>
    );
}

export default NavBar;