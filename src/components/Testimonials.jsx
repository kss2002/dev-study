import { useState, useEffect } from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: '김민수',
      role: '프론트엔드 개발자',
      image:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote:
        '개발 스터디에 참여한 것이 제 경력에서 가장 좋은 결정이었습니다. 협업 환경에서 혼자 공부할 때보다 더 빠르게 성장할 수 있었고, 프로그램 수료 3개월 만에 첫 개발자 직무에 취업했습니다!',
    },
    {
      id: 2,
      name: '이지현',
      role: '풀스택 개발자',
      image:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote:
        '우리가 만든 프로젝트들은 실제 현업에서 마주치는 시나리오와 매우 유사했습니다. 특히 경험 많은 멘토들의 코드 리뷰는 제 코딩 실력과 자신감을 크게 향상시켰습니다.',
    },
    {
      id: 3,
      name: '박준호',
      role: '백엔드 개발자',
      image:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
      quote:
        '전직을 준비하면서 체계적인 학습 방법이 필요했는데, 이 스터디가 정확히 그것을 제공해주었습니다. 커리큘럼은 포괄적이었고 커뮤니티의 지원은 정말 값진 자산이었습니다.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>수강생 후기</h2>
          <p className="section-subtitle">
            우리 스터디를 통해 경력을 전환한 수강생들의 이야기를 들어보세요
          </p>
        </div>

        <div className="testimonials-slider">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-content">
                  <div className="quote-icon">❝</div>
                  <p className="quote-text">{testimonial.quote}</p>
                  <div className="testimonial-author">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="author-image"
                    />
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`후기 ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
