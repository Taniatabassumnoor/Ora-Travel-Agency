import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AuthProvider from './Pages/Contexts/AuthProvider';
import Destinations from './Pages/Destinations/Destinations';
import initializeAuthentication from './Pages/Firebase/firebase.initialize';
// import Banner from './Pages/Home/Banner/Banner';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import SingleServices from './Pages/Home/SingleServices/SingleServices';
import Hotels from './Pages/Hotels/Hotels';
import NotFound from './Pages/NotFound/NotFound';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Shared/Login/Login';
import AddNewService from './Pages/UserDash/AddNewService/AddNewService';
import ManageAllOrder from './Pages/UserDash/ManageAllOrder/ManageAllOrder';
import UserOrderDetails from './Pages/UserDash/UserOrderDetails/UserOrderDetails';

initializeAuthentication()
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route exact path="/home"><Home></Home></Route>
          {/* <Route exact path="/banner"><Banner></Banner></Route> */}
          <PrivateRoute path="/hotels"><Hotels></Hotels></PrivateRoute>
          <PrivateRoute path="/destinations"><Destinations></Destinations></PrivateRoute>
          {/* <PrivateRoute path="/dashboard"><DashBoard></DashBoard></PrivateRoute> */}
          <Route path="/about"><About></About></Route>
          <Route path="/placeorder"><PlaceOrder></PlaceOrder></Route>
          <Route path="/userorderdetails"><UserOrderDetails></UserOrderDetails> </Route>
          <Route path="/manageallorder"><ManageAllOrder></ManageAllOrder></Route>
          <Route path="/addnewservice"><AddNewService></AddNewService></Route>
          <Route path="/login"><Login></Login></Route>
          <Route path="/services"><Services></Services></Route>
          <PrivateRoute exact path="/singleservices/:id"> <SingleServices></SingleServices></PrivateRoute>
          <Route path="*"><NotFound></NotFound></Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
