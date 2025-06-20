import '../styles/Register.css';

function Register() {
  return (
    <section className="register" id="register">
      <div className="container">
        <div className="section-header">
          <h2>다음 기수 신청하기</h2>
          <p className="section-subtitle">
            개발자로서의 실력을 가속화하고 싶으신가요? 스터디에 참여하세요.
          </p>
          <button
            className="discord-btn"
            type="button"
            style={{ marginTop: '12px' }}
          >
            <a
              href="https://discord.gg/B9ynZKrRxN"
              target="_blank"
              rel="noopener noreferrer"
            >
              디스코드 채널 바로가기
            </a>
          </button>
        </div>

        <div className="register-container">
          <div className="register-info">
            <div className="info-block">
              <h3>다음 기수 시작</h3>
              <p className="start-date">2025년 7월 1일에 시작합니다.</p>
              <p>
                모집 인원이 제한되어 있습니다. <br />
                조기 신청을 권장드립니다.
              </p>
            </div>

            <div className="info-block">
              <h3>프로그램 세부사항</h3>
              <ul className="details-list">
                <li>1달 집중 프로그램</li>
                <li>주 2회 실시간 온라인 세션</li>
                <li>24시간 커뮤니티 지원</li>
                <li>1대1 언제든 질문 가능</li>
              </ul>
            </div>

            <div className="testimonial-snippet">
              <p>
                "지식에 대한 투자는 최고의 보상을 <br />
                가져다 줄 것이다."
              </p>
              <div className="snippet-author">- 벤자민 프랭클린</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
