import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
//<a href="https://github.com/chrisbuck"><FontAwesomeIcon className="faGithub" icon={faGithub} /></a>

import IconLink from './IconLink';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => (
    <header className="App-header">
        <Row id="topHeader">
            <IconLink link={'https://github.com/chrisbuck'} name={'faGithub'} icon={faGithub} />
            <IconLink link={'https://linkedin.com/in/christopherbuck'} name={'faLinkedIn'} icon={faLinkedin} />
        </Row>
        <Row id="mainHeader">
            <Col id="brandingWrapper">
                <Logo />
                <h3>ChrisBuck.github.io</h3>
            </Col>
        </Row>
        <Row id="lowerHeader">
            <Nav />
        </Row>
    </header>
);

export default Header;