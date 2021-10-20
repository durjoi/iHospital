import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login/Login';
import Registration from './Components/Auth/Registration/Registration';
import Booking from './Components/Booking/Booking';
import Header from './Components/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        
        <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/booking">
              <Booking></Booking>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
