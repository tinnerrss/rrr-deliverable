import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Projects from './Projects';
import Blog from './Blog';
import About from './About';

function Homepage(props) {
    return(
        <Router>
            <div className="homepage">
                <h1>This is Tin's Blog Page. Hola.</h1>
                <Link to="/blog">Blog</Link> |
                <Link to="/about">About</Link> |
                <Link to="/projets">Projects</Link>
                <Route path="/blog" component={Blog} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />

            </div>
        </Router>

    )
}

export default Homepage;