import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import Home from './components/layout/Home';
import About from './components/layout/About';
import BlogContainer from './container/blog/BlogContainer';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="wrap">
        <div className="wrap-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/blog" exact component={BlogContainer} />
            <Route path="*">
              <div>404</div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
