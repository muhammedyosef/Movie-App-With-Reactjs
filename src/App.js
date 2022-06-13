import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import Register from './register/register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './navbar/navbar';
import Products from './movies/movies';
import ProductDetails from './movies/movieDetails';
import SearchMovie from './searchMovie/SearchMovie';
import Favorites from './Favourites/Favorites';


function App() {
  return (
    <div className="App">
     {/* <Login/> */}
     {/* <Register/> */}
     <Router>
        <NavBar  />
        <div className="container my-5">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/movies" exact component={Products} />
          <Route path="/productDetails/:id" exact component={ProductDetails} />
          <Route path="/search/movie" exact component={SearchMovie} />
          <Route path="/favorites" exact component={Favorites} />

          
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
