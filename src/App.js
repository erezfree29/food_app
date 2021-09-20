import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { store } from './app/redux/store';

import Header from './components/Header';
import MissionsPage from './components/Missons';
import RocketsPage from './components/Rockets';
import MyprofilePage from './components/Myprofile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/myprofile">
              <Myprofile />
            </Route>
            <Route path="/missions">
              <Missions />
            </Route>
            <Route exact path="/rockets">
              <Rockets />
            </Route>
            <Route exact path="/">
              <Rockets />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

function Rockets() {
  return <RocketsPage />;
}

function Missions() {
  return <MissionsPage />;
}

function Myprofile() {
  return <MyprofilePage />;
}

export default App;
