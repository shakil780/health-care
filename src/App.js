import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/Home";
import MyNav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import ServiceDetails from "./components/serviceDetails/ServiceDetails";
import Doctors from "./components/doctors/Doctors";
import AuthProvider from "./context/AuthProvider";
import Login from "./components/login/Login";
import PrivateRoute from "./components/private/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <MyNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/doctors">
            <Doctors />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/service/details/:id">
            <ServiceDetails />
          </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
