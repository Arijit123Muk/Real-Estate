import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Home from './components/Home';
import About from './components/About';
import Agents from './components/Agents';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/agents">
            <Agents />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
