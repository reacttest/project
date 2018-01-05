import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class ProjectsSidebar extends Component {
    constructor(props){
        super(props);
        this.state = { activeItem: 'account' };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    componentDidMount(){
        console.log(this.props)
    }

    render() {
        const { activeItem } = this.state;

        return (
            <Menu vertical style={{borderRadius: 0, width: '100%'}}>
                <Menu.Item as={Link} to="/projects/active" name='active' active={activeItem === 'active'} onClick={this.handleItemClick}>
                    <Icon name='ticket' />
                    Active Sprint
                </Menu.Item>
                <Menu.Item as={Link} to="/projects/backlog" name='backlog' active={activeItem === 'backlog'} onClick={this.handleItemClick}>
                    <Icon name='columns' />
                    Backlog
                </Menu.Item>

                <Link to="/projects/active">Active Sprint</Link>
            </Menu>
        )
    }
}
