import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <Menu inverted style={{'borderRadius': 0}}>
            <Menu.Item as={Link} to="/">Home</Menu.Item>
            <Menu.Item as={Link} to="/projects">Projects</Menu.Item>
            <Menu.Item as={Link} to="/groups">Groups</Menu.Item>
        </Menu>

    </div>
);

export default Header;