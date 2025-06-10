import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-h1">개발 실력을 높이세요</h1>
          <p className="hero-subtitle">
            함께 성장하는 개발 스터디에서 실무 프로젝트와 전문가 멘토링을 통해
            실력을 키워보세요
          </p>
          <div className="hero-actions">
            <a href="#register" className="btn">
              스터디 신청하기
            </a>
            <a href="#about" className="btn btn-outline">
              자세히 알아보기
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">12</span>
              <span className="stat-label">주 과정</span>
            </div>
            <div className="stat">
              <span className="stat-number">100% 환불</span>
              <span className="stat-label">불만족시..</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="code-image">
            <pre>
              <code>{`function DevStudy() {
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    // 함께 배우고 성장하기
    joinOurCommunity();
  }, []);

  return (
    <div className="success">
      <h1>개발 실력을 높이세요</h1>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
