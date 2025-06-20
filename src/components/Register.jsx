import { useState } from 'react';
import '../styles/Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'beginner',
    interests: [],
    message: '',
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (name === 'agreed') {
        setFormData({
          ...formData,
          [name]: checked,
        });
      } else {
        const updatedInterests = [...formData.interests];
        if (checked) {
          updatedInterests.push(value);
        } else {
          const index = updatedInterests.indexOf(value);
          if (index > -1) {
            updatedInterests.splice(index, 1);
          }
        }
        setFormData({
          ...formData,
          interests: updatedInterests,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your server
    setSubmitted(true);
  };

  return (
    <section className="register" id="register">
      <div className="container">
        <div className="section-header">
          <h2>다음 기수 신청하기</h2>
          <p className="section-subtitle">
            개발자로서의 경력을 가속화하고 싶으신가요? 다음 기수에 참여하세요.
          </p>
        </div>

        <div className="register-container">
          <div className="register-info">
            <div className="info-block">
              <h3>다음 기수 시작</h3>
              <p className="start-date">2025년 7월 1일</p>
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

          <div className="register-form">
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>신청이 완료되었습니다!</h3>
                <p>
                  개발 스터디 신청해 주셔서 감사합니다. 확인 이메일을
                  발송해드렸습니다.
                </p>
                <p>
                  곧 담당자가 연락드려 다음 단계를 안내해드리고 문의사항을
                  답변드리겠습니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">이름</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">이메일</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">연락처</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="experience">개발 경험</label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  >
                    <option value="beginner">입문 (0-1년)</option>
                    <option value="intermediate">중급 (1-3년)</option>
                    <option value="advanced">고급 (3년 이상)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>관심 분야</label>
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="interests"
                        value="frontend"
                        checked={formData.interests.includes('frontend')}
                        onChange={handleChange}
                      />
                      프론트엔드 개발
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="interests"
                        value="backend"
                        checked={formData.interests.includes('backend')}
                        onChange={handleChange}
                      />
                      백엔드 개발
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="interests"
                        value="fullstack"
                        checked={formData.interests.includes('fullstack')}
                        onChange={handleChange}
                      />
                      풀스택 개발
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="interests"
                        value="mobile"
                        checked={formData.interests.includes('mobile')}
                        onChange={handleChange}
                      />
                      모바일 개발
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">메시지 (선택사항)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label className="checkbox-label terms-label">
                    <input
                      type="checkbox"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleChange}
                      required
                    />
                    프로그램 관련 안내 수신에 동의합니다
                  </label>
                </div>

                <button type="submit" className="btn submit-btn">
                  신청하기
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
