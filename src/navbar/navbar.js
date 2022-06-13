
import { Link ,} from 'react-router-dom';

export default function NavBar() {
  
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark me-auto">
  <div className="container-fluid">
    <Link to="/movies" className="navbar-brand">Movie App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
      <Link to="/register" className="nav-link">register</Link>
        </li>
        <li className="nav-item">
          
      <Link to="/" className=" nav-link">login</Link>
          
        </li>
        <li className="nav-item">
        <Link to="/movies" className="nav-link">movies</Link>

        </li>
        <li className="nav-item">
      <Link to="/favorites" className="nav-link">Favourites</Link>
        </li>
        <li className="nav-item">
      <Link to="/search/movie" className="nav-link">Search</Link>
        </li>  
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
