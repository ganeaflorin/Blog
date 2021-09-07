import "./navbar.css";
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
          <a className="navbar__refs" href="/">
            HOME
          </a>
          <a className="navbar__refs" href="/create">
            NEW BLOG
          </a>
          <a className="navbar__refs" href="/delete">
            DELETE BLOG
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
