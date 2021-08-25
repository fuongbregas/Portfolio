import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import About from './pages/About/About'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>

        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route exact path='/myhardware'><About/></Route>

          
        </Switch>

        
      </Router>
    </div>
  );
}

export default App;
