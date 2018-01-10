import React from 'react';
import './Main.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Projects from '../../pages/Projects/Projects';
import ProjectDetails from '../../pages/Projects/ProjectDetails/ProjectDetails';
import Groups from '../../pages/Groups/Groups';
import Login from '../../pages/Login/Login';

const Main = () => {
    return (
        <div className="Main" style={{"height" : "100%", "marginTop" : "0px"}}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/projects/:id' component={ProjectDetails}/>
                <Route path='/groups' component={Groups}/>
                <Route path='/login' component={Login}/>
            </Switch>
        </div>
    );
};

export default Main;