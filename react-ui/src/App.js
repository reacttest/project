import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
// import Sidebar from './components/Sidebar/Sidebar';
import SidebarLeftPush from './components/Sidebar/Sidebar';

const App = () => {
        return (
            <div className="App">
                <Header />
                <SidebarLeftPush />
            </div>
        );
};

export default App;
