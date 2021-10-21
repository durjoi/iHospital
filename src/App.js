
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Appoinment from './Components/Appoinment/Appoinment';
import Login from './Components/Auth/Login/Login';
import Registration from './Components/Auth/Registration/Registration';
import Booking from './Components/Booking/Booking';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Report from './Components/Report/Report';
import Service from './Components/Service/Service';
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
            <PrivateRoute exact path="/service/:id">
              <Service></Service>
            </PrivateRoute>
            <PrivateRoute path="/appoinment">
              <Appoinment></Appoinment>
            </PrivateRoute>
            <PrivateRoute path="/report">
              <Report></Report>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
