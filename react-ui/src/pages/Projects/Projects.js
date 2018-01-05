import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectsList from './ProjectsList/ProjectsList';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import Active from './Active/Active';
import Backlog from './Backlog/Backlog';

class Projects extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/projects' component={ProjectsList}/>
                <Route path='/projects/:id' component={ProjectDetails}/>
                <Route path='/projects/:id/active' component={Active}/>
                <Route path='/projects/:id/backlog' component={Backlog}/>
            </Switch>
        );
    }
}

export default Projects;