import { useState } from 'react';
import '../styles/Header.css';

function Header({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">DEV-STUDY</div>

        <div
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#about" onClick={() => scrollToSection('about')}>
                소개
              </a>
            </li>
            <li className="nav-item">
              <a href="#benefits" onClick={() => scrollToSection('benefits')}>
                장점
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#curriculum"
                onClick={() => scrollToSection('curriculum')}
              >
                커리큘럼
              </a>
            </li>
            {/*
              <li className="nav-item">
              <a
                href="#testimonials"
                onClick={() => scrollToSection('testimonials')}
              >
                후기
              </a>
            </li>
             // 후기 얻으면 추가하기
             */}

            <li className="nav-item">
              <a href="#faq" onClick={() => scrollToSection('faq')}>
                자주 묻는 질문
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#register"
                onClick={() => scrollToSection('register')}
                className="register-btn"
              >
                신청하기
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
