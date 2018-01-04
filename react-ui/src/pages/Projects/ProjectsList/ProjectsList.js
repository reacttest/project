import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsList = () => {
    return (<div>ProjectsList
        <ul>
            <li><Link to="/projects/active">act</Link></li>
        </ul>
    </div>)
};

export default ProjectsList;