import React from 'react';
import { Link } from 'react-router-dom';
import * as headshot from '../../images/buck-headshot.png'

const Logo = () => {
    return(
        <div id="logoWrapper">
            <Link to="/" >
                <img src={headshot} className="profile-image" alt="logo" />
            </Link>
        </div>
    )
};

export default Logo;