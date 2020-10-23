import React from 'react';
import Container from 'react-bootstrap/Container';
// import { Link } from 'react-router-dom';
import Header from '../layout/Header/Header';
// import SectionRule from '../components/SectionRule';

const MainPage = () => (
    <Container id="appContainer" fluid>
        <Header />
        <div className="page-content">
            <div className="sectionWrapper">
                <hr></hr>
                <div className="sectionTitle">Experience</div>
                Culver Company	Jul. 2019 – Present
Sr. Web Developer, Salisbury, MA 
Transitioning legacy applications and databases to modern frameworks and building automation work flows.
Projects: 
Reporting Sites – Project Owner
•	Responsible for the technical side of creating Reporting Sites for clients, including data visualization and query tools.
•	Adapted React-based modules to a WordPress environment, to incorporate state management in various features of the Reporting Sites, such as rendering state aware data visualizations.
React Based Google Charts
•	Created a React based Google Charts plugin for WordPress using the Gutenberg Block Editor.
•	Adopted a modular approach, allowing the WP admin user to selectively include blocks in a page, including table charts, dashboards, and other visualizations, like pie charts, line charts, etc.
•	Included functionality to retrieve the chart data via an API call on page load, and to pass the data to the React component tree.
•	Built out the front end logic of having multiple React components possible in a page, without knowing in advance which components would be selected by the WordPress admin. 
•	Successfully managed state and prop values throughout the component tree, and built custom “listeners” to allow sibling components to interact with each other, with the remote data API, and with Google Charts.
Mongo Mailing Lists
•	Created a Node/Express based REST API to populate and interact with a Mongo database. Used Heroku for the server and Mongo hosting, set up the API endpoints with routes and controllers, and a full suite of methods to perform CRUD operations on data.
•	Put the Mongo/Node/Express API to the test, creating collections and importing data for our top 5 clients, aggregating and standardizing data consisting of at least 1.3 million rows per client.
•	Created an automation workflow in Excel/VBA to standardize and import data from approximately 40 – 50 workbooks, per client, each with anywhere from 1,500 to 100,000 rows of data. Since the workbooks were created as far back as 2007, the standards for recording data varied widely. The automation script was capable of parsing a workbook, standardizing the data, and exporting to a csv in 2 mouse-clicks, and could prepare a csv file for import to Mongo in under a minute.
GitSync Plugin
•	Created a WordPress plugin, using a Heroku/PHP back end, to automatically detect if any of our suite of WordPress plugins needed to be updated to latest version, and then push upgrades to WordPress sites.

                <section>
                </section>
            </div>
        </div>
    </Container>
);

export default MainPage;