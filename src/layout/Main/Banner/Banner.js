import React from 'react';
import { Link } from 'react-router-dom';
// import reactLogo from '../../../images/ReactLogo.png';
// import wpLogo from '../../../images/WordPress_blue_logo.svg.png';
// import nodeLogo from '../../../images/NodeLogo.png';

export const ProjectsBanner = () => {
    return(
        <div className="projectsBanner">
            <Link to="/react"><img className="reactLogo" src="./ReactLogo.png" alt=""/></Link>
            <Link to="/wordpress"><img className="wpLogo" src="./WordPress_blue_logo.svg.png" alt=""/></Link>
            <Link to="/node"><img className="nodeLogo" src="./NodeLogo.png" alt=""/></Link>
        </div>
    );
};