import './header.css'

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">
          <button>logo</button>
        </div>
        <ul>
          <li><a href="#home" className="active-link">Home</a></li>
          <li><a href="#shop" className="active-link">Shop</a></li>
          <li><a href="#about-us" className="active-link">About Us</a></li>
          <li><a href="#contacts" className="active-link" id="contacts">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
}