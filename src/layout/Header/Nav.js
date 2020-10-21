import React from 'react';
import NavItem from './NavItem';

const Nav = () => {
    const navItems = [
        {name: 'Resume', url: 'resume'},
        {name: 'Projects', url: 'projects'}
    ];
    return(
        <div id="mainNav">
            { navItems.map((item, i) => (
                <NavItem url={item.url} name={item.name} key={i} />
            ))}
        </div>
    )
};

export default Nav;