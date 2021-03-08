import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './shared/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  
        
      </div>
    </Router>
  );
}

export default App;
