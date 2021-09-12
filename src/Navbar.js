import "./styles/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <img
          className="navbar__img"
          src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png"
          alt="fnatic-logo"
        ></img>
        <div className="navbar__links">
          <Link className="navbar__refs" to="/">
            ACASĂ
          </Link>
          <Link className="navbar__refs" to="/manager">
            GESTIONEAZĂ POSTĂRILE
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
