import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <Header>
            <Link className="logo" to="/" style={{ fontSize: "2rem", textTransform: 'uppercase' }}>
                <span style={{ color: "#ff4d4f" }}> Tech </span> Dairy
            </Link>
            <Menu theme="dark" mode="horizontal" style={{ float: "right" }}>
                <Menu.Item key='1' > <Link to='/Login'> Login </Link></Menu.Item>
            </Menu>
        </Header>
    );
};

export default Navbar;