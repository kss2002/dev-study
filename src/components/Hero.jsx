import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-h1">
            개발 실력을 <br />
            높이세요
          </h1>
          <p className="hero-subtitle">
            함께 성장하는 개발 스터디에서 프로젝트도 진행하고 실력을 한 단계
            끌어올려보세요!
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
              <span className="stat-number">1</span>
              <span className="stat-label">달 과정</span>
            </div>
            <div className="stat">
              <span className="stat-number">2만원</span>
              <span className="stat-label">가격</span>
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
