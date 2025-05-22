import { useState } from 'react';
import '../styles/Curriculum.css';

function Curriculum() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'basics',
      label: '기초',
      content: {
        title: '개발 기초',
        description: '모든 개발자가 알아야 할 핵심 개념과 도구를 마스터하세요.',
        topics: [
          'Git 버전 관리 & 협업 워크플로우',
          '현대적인 HTML5 & CSS3 기술',
          'JavaScript 기초 & ES6+ 기능',
          '반응형 디자인 원칙',
          '웹 접근성 모범 사례',
          '커맨드 라인 활용',
        ],
        projects: [
          '개인 포트폴리오 웹사이트',
          '인터랙티브 랜딩 페이지',
          '반응형 웹 애플리케이션',
        ],
      },
    },
    {
      id: 'frontend',
      label: '프론트엔드',
      content: {
        title: '프론트엔드 개발',
        description:
          '현대적인 프레임워크로 인터랙티브한 사용자 인터페이스를 구축하세요.',
        topics: [
          'React 기초 & 훅',
          '상태 관리 (Context API, Redux)',
          '컴포넌트 아키텍처 & 디자인 패턴',
          '폼 처리 & 유효성 검사',
          'API 통합 & 데이터 페칭',
          '성능 최적화 기법',
        ],
        projects: [
          'E-커머스 상품 페이지',
          '소셜 미디어 대시보드',
          '실시간 채팅 애플리케이션',
        ],
      },
    },
    {
      id: 'backend',
      label: '백엔드',
      content: {
        title: '백엔드 개발',
        description:
          '안정적이고 확장 가능한 서버 사이드 애플리케이션과 API를 만드세요.',
        topics: [
          'Node.js & Express 기초',
          'RESTful API 설계 원칙',
          '데이터베이스 설계 & 관리 (SQL & NoSQL)',
          '인증 & 권한 부여',
          '서버 사이드 캐싱 전략',
          '에러 처리 & 로깅 모범 사례',
        ],
        projects: [
          '블로그 애플리케이션용 RESTful API',
          '인증 시스템',
          'E-커머스 백엔드',
        ],
      },
    },
    {
      id: 'fullstack',
      label: '풀스택',
      content: {
        title: '풀스택 통합',
        description:
          '프론트엔드와 백엔드 기술을 결합하여 완전한 웹 애플리케이션을 구축하세요.',
        topics: [
          '풀스택 아키텍처 & 통신',
          '배포 & 호스팅 솔루션',
          'CI/CD 파이프라인 설정',
          '테스팅 전략 (단위, 통합, E2E)',
          '보안 고려사항 & 모범 사례',
          '성능 모니터링 & 최적화',
        ],
        projects: [
          '작업 관리 애플리케이션',
          '사용자 인증이 포함된 소셜 플랫폼',
          '결제 통합이 포함된 E-커머스 스토어',
        ],
      },
    },
  ];

  return (
    <section className="curriculum" id="curriculum">
      <div className="container">
        <div className="section-header">
          <h2>커리큘럼</h2>
          <p className="section-subtitle">
            숙련된 개발자가 되기 위한 포괄적인 로드맵
          </p>
        </div>

        <div className="curriculum-tabs">
          <div className="tab-buttons">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-content">
            <div className="content-header">
              <h3>{tabs[activeTab].content.title}</h3>
              <p>{tabs[activeTab].content.description}</p>
            </div>

            <div className="content-details">
              <div className="topics">
                <h4>학습 내용</h4>
                <ul>
                  {tabs[activeTab].content.topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </div>

              <div className="projects">
                <h4>진행할 프로젝트</h4>
                <ul>
                  {tabs[activeTab].content.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="program-length">
          <div className="program-info">
            <div className="info-item">
              <span className="info-number">12</span>
              <span className="info-label">주</span>
            </div>
            <div className="info-item">
              <span className="info-number">24</span>
              <span className="info-label">세션</span>
            </div>
            <div className="info-item">
              <span className="info-number">72</span>
              <span className="info-label">시간</span>
            </div>
            <div className="info-item">
              <span className="info-number">6+</span>
              <span className="info-label">프로젝트</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
