import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';
import Main from '../Main/Main';

class SidebarLeftPush extends Component {
    state = { visible: true };

    toggleVisibility = () => this.setState({ visible: !this.state.visible });

    render() {
        const { visible } = this.state;
        return (
            <div style={{'height': window.innerHeight - 40}}>
                <Sidebar.Pushable as={Segment} style={{'border': 0, 'borderRadius': 0}}>
                    <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted >
                        <Menu.Item name='home'>
                            <Icon name='home' />
                            Home
                        </Menu.Item>
                        <Menu.Item name='gamepad'>
                            <Icon name='gamepad' />
                            Games
                        </Menu.Item>
                        <Menu.Item name='camera'>
                            <Icon name='camera' />
                            Channels
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic style={{'border': 0, 'borderRadius': 0}}>
                            <Main />
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}

export default SidebarLeftPush