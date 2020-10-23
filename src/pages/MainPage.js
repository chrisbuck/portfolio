import React from 'react';
import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom';
import Header from '../layout/Header/Header';

const MainPage = () => (
    <Container id="appContainer" fluid>
        <Header />
        <div className="page-content">
            <a href="/resume">Resume</a>
        </div>
    </Container>
);

export default MainPage;