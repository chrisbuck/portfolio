import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => (
    <header className="App-header">
        <a href="https://github.com/chrisbuck"><FontAwesomeIcon className="faGithub" icon={faGithub} /></a>
        <a href="https://linkedin.com/in/christopherbuck"><FontAwesomeIcon className="faLinkedin" icon={faLinkedin} /></a>
    </header>
);

export default Header;