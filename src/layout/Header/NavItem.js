import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    return(
        <div className="navItemWrap">
            <div className="navItemInner">
                <NavLink to={props.url} >{props.name}</NavLink>
            </div>
        </div>
    )
}

export default NavItem;