import React , { Component } from 'react';
import { Menu, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { activeItem: 'home' };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const {activeItem} = this.state;

        return (
                <div>
                    <Menu inverted style={{'borderRadius': 0, height: this.props.headerHeight}} fixed='top'>
                        <Menu.Item as={Link} to="/">Home</Menu.Item>
                        <Menu.Item as={Link} to="/projects">Projects</Menu.Item>
                        <Menu.Item as={Link} to="/groups">Groups</Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Input icon='search' placeholder='Search...' />
                            </Menu.Item>
                            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
                        </Menu.Menu>
                    </Menu>
                    {this.props.children}
                </div>
        )
    }
}

export default Header;