import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import { connect } from 'react-redux';


class App extends Component {
    constructor(props){
        super(props);
        this.state = { visible: false, contentWidth: '100%' };
        console.log(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props);
        console.log(nextProps);
    }

    render() {
        const { visible } = this.state;
        const divFix = <div style={{height: 47, width: '100%'}}></div>;
        return (
            <div className="App">
                {(this.props.router.location.pathname === '/login')? null : <Header headerHeight={47}>{divFix}</Header>}
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