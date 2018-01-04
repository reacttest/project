import React from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Projects from '../../pages/Projects/Projects';
import Groups from '../../pages/Groups/Groups';

const Main = () => {
    return (
        <div className="Main" style={{"height" : "100%", "marginTop" : "40px"}}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/projects' component={Projects}/>
                <Route exact path='/groups' component={Groups}/>
            </Switch>
        </div>
    );
};

export default Main;