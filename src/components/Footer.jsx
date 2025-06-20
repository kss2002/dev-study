import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo">dev-study</div>
            <p className="tagline">당신의 개발 여정을 가속화하세요</p>
            <p>2025 © licensed by worldcoding2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
