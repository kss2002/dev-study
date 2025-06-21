import React, { useEffect, useState } from 'react';

// 디스코드 참여 시작 시간, 종료 시간 설정
const START_TIME = new Date('2025-06-22T01:00:00+09:00'); // KST (22일 오전 1시 시작)
const END_TIME = new Date('2025-06-29T23:00:00+09:00'); // KST (29일 오후 11시 마무리)

function getTimeLeft() {
  const now = new Date();
  let diff = END_TIME - now;
  if (diff < 0) diff = 0;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

const Timer = () => {
  const [now, setNow] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (now < START_TIME) {
    return (
      <div className="timer-message">
        디스코드 참여는 <b>6월 22일 오전 1시</b>부터 가능합니다.
      </div>
    );
  }
  if (now > END_TIME) {
    return (
      <div className="timer-message">디스코드 참여 기간이 종료되었습니다.</div>
    );
  }
  return (
    <div className="timer-active">
      <h4>디스코드 참여 마감까지 남은 시간</h4>
      <div className="timer-box">
        <span role="img" aria-label="timer" className="timer-icon">
          ⏰
        </span>
        {pad(timeLeft.days)}일 {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:
        {pad(timeLeft.seconds)}
      </div>
    </div>
  );
};

export default Timer;
