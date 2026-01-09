import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src="./assets/images/logo.png" alt="app logo" />
      </div>
      <div className="nav__links">
        <a className="nav__link" href="#home">
          Home
        </a>
        <a className="nav__link" href="#about">
          About Us
        </a>
        <a className="nav__link" href="#contact">
          Contact Us
        </a>
        <a className="nav__link" href="#blog">
          Blog
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
