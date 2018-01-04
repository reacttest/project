import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectsList from './ProjectsList/ProjectsList';
import Active from './Active/Active';
import Backlog from './Backlog/Backlog';

class Projects extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/projects' component={ProjectsList}/>
                <Route path='/projects/active' component={Active}/>
                <Route path='/projects/backlog' component={Backlog}/>
            </Switch>
        );
    }
}

export default Projects;