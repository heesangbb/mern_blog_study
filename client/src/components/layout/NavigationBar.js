import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams, useHistory } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  const history = useHistory();

  const linkPage = path => {
    history.push(path);
  };

  return (
    <div className="navigation-bar">
      <div className="navigation-content">
        <Link to="/" className="navigation-link">
          Home
        </Link>
        <Link to="/about" className="navigation-link">
          About
        </Link>
        <Link to="/blog" className="navigation-link">
          Blog
        </Link>
        <button className="navigation-button" onClick={() => linkPage('/login')}>
          login
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;
