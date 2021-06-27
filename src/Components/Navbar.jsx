import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Authentication/useAuth';


const Navbar = () => {
    const auth = useAuth();
    const handleSignOut = () => {
        auth.signOut().then((res) => {
            window.location.pathname = "/";
        });
    };

    return (
        <Header>
            <Link className="logo" to="/" style={{ fontSize: "2rem", textTransform: 'uppercase' }}>
                <span style={{ color: "#FFF" }}> Tech </span> Dairy
            </Link>
            <Menu theme="dark" mode="horizontal" style={{ float: "right" }}>

                {auth.user ? (
                    <Menu.Item > <Link to="/Dashboard" >Dashboard </Link> </Menu.Item>
                ) : (

                    <Menu.Item > <Link to='/Post'> Blog </Link></Menu.Item>
                )}

                {auth.user ? (
                    <Menu.Item > <Link to="/Login" onClick={handleSignOut}>Logout </Link> </Menu.Item>
                ) : (

                    <Menu.Item  > <Link to='/Login'> Login </Link></Menu.Item>
                )}
            </Menu>
        </Header>
    );
};

export default Navbar;