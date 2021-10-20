import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login/Login';
import Registration from './Components/Auth/Registration/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Registration></Registration>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
