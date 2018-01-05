import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import { connect } from 'react-redux';
import ProjectsSidebar from "./components/ProjectsSidebar/ProjectsSidebar";
import { Grid } from 'semantic-ui-react';



class App extends Component {
    constructor(props){
        super(props);
        this.state = { visible: false, contentWidth: '100%' };
        console.log(props)
    }

    toggleWidth = () => {
        if(!this.state.visible) {
            this.setState({ contentWidth: 'calc(100% - 150px)', visible: true });
        } else {
            this.setState({ contentWidth: '100%', visible: false });
        }
    };

    componentWillReceiveProps(nextProps) {
        console.log(this.props)
        console.log(nextProps)
    }

    render() {
        const { visible } = this.state;
        return (
            <div className="App">
                <Header headerHeight={47}/>
                <div style={{height: 47, width: '100%'}}></div>
                <Main />
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        router: state.router
    }

}

export default connect(mapStateToProps)(App);



// {/*<div className="App">*/}
// {/*<Header headerHeight={47}/>*/}
// {/*<div style={{height: 47, width: '100%'}}></div>*/}
// {/*<Sidebar.Pushable as={Segment} style={{height: window.innerHeight - 47, marginTop: 0, borderRadius: 0, border: 0}}>*/}
// {/*<Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>*/}
// {/*<Menu.Item name='home' as={Link} to="/projects/:id">*/}
// {/*<Icon name='home' />*/}
// {/*Details*/}
// {/*</Menu.Item>*/}
// {/*<Menu.Item name='active' as={Link} to="/projects/:id/active">*/}
// {/*<Icon name='table' />*/}
// {/*Table*/}
// {/*</Menu.Item>*/}
// {/*<Menu.Item name='backlog' as={Link} to="/projects/:id/backlog">*/}
// {/*<Icon name='ticket' />*/}
// {/*Backlog*/}
// {/*</Menu.Item>*/}
// {/*</Sidebar>*/}
// {/*<Sidebar.Pusher style={{overflowY: 'scroll', height: '100%', width: this.state.contentWidth}}>*/}
// {/*<Segment basic>*/}
// {/*<Main/>*/}
// {/*<button onClick={this.toggleWidth}>Click</button>*/}
// {/*</Segment>*/}
// {/*</Sidebar.Pusher>*/}
// {/*</Sidebar.Pushable>*/}
// {/*</div>*/}