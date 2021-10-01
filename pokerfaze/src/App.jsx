
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import AboutMe from './pages/About Me/About Me'
import MyHardware from './pages/My Hardware/MyHardware';
import NavigationBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>

        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route exact path='/contact'><AboutMe/></Route>
          <Route exact path='/myhardware'><MyHardware/></Route>

          
        </Switch>

        
      </Router>
    </div>
  );
}

export default App;
