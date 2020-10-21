import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return(
        <div id="logoWrapper">
            <Link to="/" >
                <img src="./images/buck-headshot.png" className="profile-image" alt="logo" />
            </Link>
        </div>
    )
};

export default Logo;