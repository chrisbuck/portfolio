import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../images/buck-headshot.png';

const MainPage = () => (
    <div className="page-content">
        <img src={profileImg} className="profile-image" alt="logo" />
        <p>
            Welcome to the portfolio page for Chris Buck. Here you will find both completed solutions and incomplete code examples. Be sure to look at the project description to see whether a project is finished or not. With that caveat...
        </p>
        <p>
            <Link to="/projects">Enter</Link>
        </p>
    </div>
);

export default MainPage;