import '../styles/About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>개발 스터디 소개</h2>
          <p className="section-subtitle">
            현대적인 개발 기술을 마스터하는 커뮤니티 중심 학습
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              우리 개발 스터디는 코딩 실력 향상에 열정을 가진 분들이 모여 함께
              성장하는 공간입니다. 기초부터 시작하는 초보자부터 실력을 더욱
              발전시키고 싶은 경험자까지, 구조화된 프로그램을 통해 성장할 수
              있습니다.
            </p>
            <p>
              일반적인 강의와 달리, 우리는 협업 학습, 실무 프로젝트, 그리고 현업
              개발자의 멘토링에 중점을 둡니다. 이론만이 아닌 실제 포트폴리오를
              구축하며 실력을 증명할 수 있습니다.
            </p>
            <p>
              매주 정기적인 모임을 통해 그룹 학습과 개인 프로젝트, 페어
              프로그래밍을 진행합니다. 스터디 시간 외에도 전용 채팅방을 통해
              지속적인 소통과 지원이 이루어집니다.
            </p>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>체계적인 학습</h3>
              <p>단계별로 실력을 쌓아가는 커리큘럼</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>협업 학습</h3>
              <p>함께 문제를 해결하며 성장하기</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>프로젝트 기반</h3>
              <p>실무와 같은 프로젝트 경험</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">👨‍💻</div>
              <h3>전문가 지도</h3>
              <p>현업 개발자의 피드백과 조언</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
