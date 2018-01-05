import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsList = () => {
    return (
        <div>ProjectsList
            <ul>
                <li><Link to="/projects/1">Project 1</Link></li>
                <li><Link to="/projects/2">Project 2</Link></li>
                <li><Link to="/projects/3">Project 3</Link></li>
            </ul>
        </div>)
};

export default ProjectsList;