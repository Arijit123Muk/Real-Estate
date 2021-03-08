import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;