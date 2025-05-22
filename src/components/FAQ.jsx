import { useState } from 'react';
import '../styles/FAQ.css';

function FAQ() {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      question: '어떤 수준의 경험이 필요한가요?',
      answer:
        '우리 프로그램은 다양한 수준의 개발자를 위해 설계되었습니다. 초보자는 HTML, CSS, JavaScript의 기본 지식이 있어야 하며, 중급 및 고급 개발자들은 전문 모듈과 협업 프로젝트를 통해 더 깊이 있는 학습이 가능합니다. 각 참가자의 수준을 평가하여 적절한 학습 자료를 제공합니다.',
    },
    {
      question: '주간 학습 시간은 얼마나 되나요?',
      answer:
        '주당 10-15시간 정도의 시간 투자를 권장합니다. 여기에는 주 2회 실시간 세션(각 2-3시간)과 개인 프로젝트 및 과제 작업 시간이 포함됩니다. 프로그램에 더 많은 시간을 투자할수록 더 많은 것을 얻을 수 있지만, 다른 일정이 있는 참가자들을 위해 유연한 커리큘럼을 제공합니다.',
    },
    {
      question: '취업 지원도 제공되나요?',
      answer:
        '직접적인 취업 알선은 보장하지 않지만, 이력서 검토, 포트폴리오 개발, 면접 준비, 네트워킹 기회 등 경력 개발을 위한 지원을 제공합니다. 많은 수료생들이 프로그램 완료 후 3-6개월 내에 개발자 직무로 성공적으로 전환했습니다.',
    },
    {
      question: '어떤 도구나 소프트웨어가 필요한가요?',
      answer:
        '안정적인 인터넷 연결이 가능한 컴퓨터(Mac, Windows, Linux)가 필요합니다. 사용하는 모든 소프트웨어는 무료이거나 무료 옵션이 있습니다(코드 에디터, git 등). 오리엔테이션 과정에서 개발 환경 설정을 안내해드립니다.',
    },
    {
      question: '참여하기 위한 선수 조건이 있나요?',
      answer:
        '초보자의 경우 HTML, CSS, JavaScript의 기본 지식을 권장합니다. 프로그래밍이 완전히 처음이시라면, 참여 전에 무료 입문 과정 수강을 추천드립니다. 중급 과정의 경우 기본적인 프로그래밍 개념과 최소 하나의 프로그래밍 언어 경험이 필요합니다.',
    },
    {
      question: '스터디는 어떻게 진행되나요?',
      answer:
        '각 세션은 강의, 협업 코딩, 리뷰를 결합하여 진행됩니다. 개념 설명으로 시작하여 기술을 시연한 후, 소그룹으로 나누어 실습을 진행합니다. 세션은 대화형으로 진행되며 충분한 질의응답 시간이 주어집니다. 세션 사이에는 커뮤니티 채팅을 통한 지원과 함께 과제와 프로젝트를 진행합니다.',
    },
  ];

  const toggleItem = (index) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <h2>자주 묻는 질문</h2>
          <p className="section-subtitle">
            개발 스터디에 대해 자주 묻는 질문들을 모았습니다
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <div
              className={`faq-item ${openItem === index ? 'open' : ''}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => toggleItem(index)}
                aria-expanded={openItem === index}
              >
                {item.question}
                <span className="faq-icon"></span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="more-questions">
          <p>더 궁금하신 점이 있으신가요?</p>
          <a href="#register" className="btn btn-outline">
            문의하기
          </a>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
