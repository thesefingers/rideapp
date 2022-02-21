import './App.css';
import Head from './components/Head';
import Subhead from './components/Subhead';
import Home from './components/Home'
import UpcomingRides from './components/Upcoming';
import { Switch, Route } from 'react-router-dom';
import PastRides from './components/Past';



function App() {
  return (
    <div className='sub-body'>

      <Head />
      <Subhead />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Upcoming" exact>
          <UpcomingRides />
        </Route>
        <Route path="/Past" exact>
          <PastRides />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
