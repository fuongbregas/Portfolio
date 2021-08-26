import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact'
import MyHardware from './pages/My Hardware/MyHardware';
import NavigationBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar/>

        <Switch>
          <Route exact path='/contact'><Contact/></Route>
          <Route exact path='/myhardware'><MyHardware/></Route>

          
        </Switch>

        
      </Router>
    </div>
  );
}

export default App;
