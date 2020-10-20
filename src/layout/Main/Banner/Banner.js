import React from 'react';
import { Link } from 'react-router-dom';
import reactLogo from '../../../images/ReactLogo.png';
import wpLogo from '../../../images/WordPress_blue_logo.svg.png';
import nodeLogo from '../../../images/NodeLogo.png';

export const ProjectsBanner = () => {
    return(
        <div className="projectsBanner">
            <Link to="/react"><img className="reactLogo" src={reactLogo} alt=""/></Link>
            <Link to="/wordpress"><img className="wpLogo" src={wpLogo} alt=""/></Link>
            <Link to="/node"><img className="nodeLogo" src={nodeLogo} alt=""/></Link>
        </div>
    );
};