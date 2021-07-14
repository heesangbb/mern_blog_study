import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavigationBar from './components/layout/NavigationBar';
import Home from './components/layout/Home';
import About from './components/layout/About';

function App() {
  return (
    <Router>
      <NavigationBar />
      <div className="wrap">
        <div className="wrap-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact compoent={About} />
            <Route path="/blog" exact>
              <div>Blog</div>
            </Route>
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
