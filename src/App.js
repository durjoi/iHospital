import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login/Login';
import Registration from './Components/Auth/Registration/Registration';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
      </AuthProvider>
      
    </div>
  );
}

export default App;
