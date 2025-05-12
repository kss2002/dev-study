import '../assets/styles/Header.css';

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <h1 className="header-logo">Dev Study</h1>
          <nav>
            <ul className="header-nav">
              <li className="header-li">Home</li>
              <li className="header-li">About</li>
              <li className="header-li">Contact</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
