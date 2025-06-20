import { useState } from 'react';
import '../styles/Curriculum.css';

// 프론트 커리큘럼
const frontendCurriculums = [
  {
    id: 'htmlcss',
    title: 'HTML / CSS (4주 완성)',
    goal: '웹 페이지의 뼈대와 디자인을 자유자재로 구현하고, 반응형 웹 디자인의 원리를 이해하여 어떤 디바이스에서도 깨지지 않는 웹 페이지를 제작한다.',
    weeks: [
      {
        week: 1,
        objective: 'HTML 구조 설계',
        details: [
          '시맨틱 태그(header, nav, main, section, article, footer)의 중요성',
          '폼(Form) 관련 태그 (form, input, label, button, textarea)',
          '테이블(Table) 태그 구조 (table, thead, tbody, tr, th, td)',
          '웹 접근성 기초 (alt 속성, WAI-ARIA roles)',
        ],
        assignment: [
          '이력서 페이지 마크업 작성하기',
          '회원가입 폼 구조 만들기',
        ],
      },
      {
        week: 2,
        objective: 'CSS 기본 스타일링',
        details: [
          'CSS 선택자 심화 (자식, 후손, 가상 클래스 :hover, :focus)',
          '박스 모델 (Content, Padding, Border, Margin) 심층 이해',
          '폰트, 텍스트, 색상, 배경 등 스타일링 속성',
          'CSS 단위 (px, %, em, rem, vw, vh)의 차이와 사용법',
        ],
        assignment: [
          '1주차 이력서/회원가입 폼에 디자인 입히기',
          '블로그 포스트 카드 디자인하기',
        ],
      },
      {
        week: 3,
        objective: '고급 레이아웃 기법',
        details: [
          'Flexbox: 컨테이너와 아이템 속성 (justify-content, align-items, flex-grow 등)',
          'CSS Grid: 2차원 그리드 시스템 (grid-template-columns, grid-gap, grid-area)',
          'position 속성 (static, relative, absolute, fixed, sticky)의 이해와 활용',
        ],
        assignment: [
          'Flexbox를 이용해 헤더 내비게이션 바 만들기',
          'Grid를 이용해 이미지 갤러리 레이아웃 만들기',
        ],
      },
      {
        week: 4,
        objective: '반응형 웹 & 동적 효과',
        details: [
          '미디어 쿼리 (@media)를 사용한 화면 크기별 스타일 분기',
          'transition을 이용한 부드러운 상태 변화 효과',
          'transform을 이용한 2D/3D 변형 (translate, rotate, scale)',
          '@keyframes와 animation을 이용한 복잡한 애니메이션 구현',
        ],
        assignment: [
          '개인 포트폴리오 랜딩 페이지를 PC/태블릿/모바일 반응형으로 제작하기',
          '버튼 클릭 또는 호버 시 인터랙티브한 애니메이션 추가하기',
        ],
      },
    ],
  },
  {
    id: 'javascript',
    title: 'JavaScript (4주 완성)',
    goal: '웹 페이지에 동적인 기능을 부여하고, 서버와 데이터를 주고받으며, 복잡한 비즈니스 로직을 구현하는 능력을 기른다.',
    weeks: [
      {
        week: 1,
        objective: 'JS 기본 문법 & DOM',
        details: [
          '변수(var, let, const), 데이터 타입, 연산자, 제어문',
          '함수 (선언식, 표현식, 화살표 함수)',
          'DOM(Document Object Model) 트리 구조 이해',
          'document.querySelector, getElementById로 요소 선택 및 조작',
        ],
        assignment: [
          '간단한 계산기 로직 구현하기',
          '버튼 클릭 시 다크/라이트 모드 토글 기능 만들기',
        ],
      },
      {
        week: 2,
        objective: '이벤트 & ES6+',
        details: [
          '이벤트 리스닝 (addEventListener)과 이벤트 객체',
          '배열 고차 함수 (map, filter, reduce, forEach)',
          '비구조화 할당, 스프레드/레스트 문법, 템플릿 리터럴',
          '모듈 시스템 (import, export)',
        ],
        assignment: [
          "'Todo List' 앱 만들기 (추가, 삭제, 완료 처리)",
          '사용자 입력 값을 받아 목록을 필터링하는 기능 구현',
        ],
      },
      {
        week: 3,
        objective: '비동기 처리',
        details: [
          '동기(Synchronous) vs 비동기(Asynchronous) 개념',
          '콜백(Callback) 함수의 문제점 (콜백 지옥)',
          'Promise: then, catch, finally를 이용한 비동기 로직 처리',
          'async/await: 동기 코드처럼 보이는 깔끔한 비동기 코드 작성법',
        ],
        assignment: [
          'setTimeout을 이용해 비동기 동작 흉내 내기',
          '공개 API를 fetch와 async/await로 호출하여 데이터를 화면에 표시하기',
        ],
      },
      {
        week: 4,
        objective: '실용 프로젝트',
        details: [
          '로컬 스토리지(Local Storage)를 이용한 데이터 영속성',
          '에러 핸들링 (try...catch)',
          '디바운싱(Debouncing)과 스로틀링(Throttling) 개념 및 구현',
          '프로젝트 구조화 및 모듈 분리',
        ],
        assignment: [
          'Todo List에 로컬 스토리지 기능을 추가하여 브라우저를 닫았다 열어도 데이터가 유지되게 하기',
          '검색창 입력 시 API 요청을 최적화하는 디바운싱 적용하기',
        ],
      },
    ],
  },
  {
    id: 'react',
    title: 'React (4주 완성)',
    goal: '컴포넌트 기반 아키텍처를 이해하고, 상태(State) 관리를 통해 인터랙티브한 UI를 제작하며, 재사용 가능한 컴포넌트를 설계하는 능력을 갖춘다.',
    weeks: [
      {
        week: 1,
        objective: 'React 기본 개념',
        details: [
          'React의 필요성 (Virtual DOM, 선언적 UI)',
          'JSX 문법과 컴포넌트 (함수형/클래스형)',
          'props를 이용한 데이터 단방향 흐름',
          'create-react-app을 이용한 프로젝트 환경 설정',
        ],
        assignment: [
          '자기소개 카드 컴포넌트 만들기',
          '여러 개의 카드 컴포넌트에 다른 props를 전달하여 렌더링하기',
        ],
      },
      {
        week: 2,
        objective: 'State와 Hooks',
        details: [
          'useState: 컴포넌트의 상태 관리',
          '이벤트 핸들링 (onClick, onChange 등)',
          '조건부 렌더링과 리스트 렌더링 (map 함수와 key prop)',
          'useEffect: Side Effect 처리 (데이터 fetching, 타이머 등)',
        ],
        assignment: [
          'useState로 카운터 앱 만들기',
          'useEffect로 API 데이터를 가져와 목록으로 표시하기',
        ],
      },
      {
        week: 3,
        objective: 'React Hooks 심화 & 라우팅',
        details: [
          'useRef: DOM 직접 접근, useContext: 전역 상태 관리',
          '커스텀 훅(Custom Hook)을 만들어 로직 재사용하기',
          'react-router-dom: SPA를 위한 페이지 라우팅 (BrowserRouter, Route, Link, useNavigate)',
        ],
        assignment: [
          '입력 폼 상태 관리를 위한 useInput 커스텀 훅 만들기',
          '여러 페이지(홈, 소개, 게시판)를 가진 SPA 웹사이트 구조 만들기',
        ],
      },
      {
        week: 4,
        objective: '상태 관리 & 배포',
        details: [
          '복잡한 상태 관리를 위한 useReducer',
          '상태 관리 라이브러리 (Redux Toolkit, Zustand, Recoil)의 필요성 및 기본 개념',
          'styled-components, Emotion, Tailwind CSS 등 CSS-in-JS/Utility-First CSS',
          'Netlify/Vercel을 이용한 정적 사이트 배포',
        ],
        assignment: [
          'useReducer로 Todo List 앱 리팩토링하기',
          '완성된 React 프로젝트를 Netlify에 배포하고 URL 공유하기',
        ],
      },
    ],
  },
  {
    id: 'nextjs',
    title: 'Next.js (4주 완성)',
    goal: 'React의 기능을 확장하여 SSR, SSG 등 다양한 렌더링 전략을 이해하고, 이를 통해 SEO에 최적화된 고성능 웹 애플리케이션을 구축한다.',
    weeks: [
      {
        week: 1,
        objective: 'Next.js 기본',
        details: [
          'Next.js의 필요성 (React의 한계점 해결)',
          'App Router: 페이지 기반 라우팅 시스템 (app 디렉토리, page.js, layout.js)',
          '서버 컴포넌트와 클라이언트 컴포넌트의 차이',
          'Link 컴포넌트를 이용한 페이지 이동 및 프리페칭',
        ],
        assignment: [
          'Next.js 프로젝트 생성 및 기본 페이지(홈, 소개) 만들기',
          '서버 컴포넌트와 클라이언트 컴포넌트를 각각 만들어 차이점 체험하기',
        ],
      },
      {
        week: 2,
        objective: '데이터 페칭 전략',
        details: [
          'SSG: 빌드 시점에 페이지 생성 (generateStaticParams)',
          'SSR: 요청 시점에 페이지 생성 (동적 함수 사용)',
          'ISR: 정적 페이지를 주기적으로 재검증',
          'fetch API 확장 기능 (캐싱, 데이터 재검증)',
        ],
        assignment: [
          '블로그 목록 페이지는 SSG로, 상세 페이지는 동적 라우팅으로 구현하기',
          '날씨 정보처럼 자주 바뀌는 데이터를 SSR 또는 ISR로 가져와 표시하기',
        ],
      },
      {
        week: 3,
        objective: '고급 기능',
        details: [
          'Route Handlers: app 디렉토리에서 API 라우트 생성하기 (GET, POST 등)',
          '서버 액션 (Server Actions): 클라이언트에서 서버 함수를 직접 호출하여 데이터 변경',
          '미들웨어 (middleware.ts): 요청 처리 전 로직 실행 (인증, 리다이렉트)',
          '메타데이터 API를 이용한 동적 SEO 최적화 (generateMetadata)',
        ],
        assignment: [
          '간단한 CRUD 기능을 가진 API를 Route Handler로 만들기',
          '폼 제출 시 서버 액션을 이용해 데이터를 처리하는 방명록 만들기',
        ],
      },
      {
        week: 4,
        objective: '최적화 & 프로젝트',
        details: [
          'next/image 컴포넌트를 이용한 이미지 최적화',
          'next/font를 이용한 폰트 최적화',
          '동적 import를 이용한 코드 스플리팅',
          '프로젝트 빌드 및 Vercel 플랫폼으로 배포',
        ],
        assignment: [
          '마크다운 파일을 파싱하여 정적 블로그 구축하기',
          '완성된 블로그를 Vercel에 배포하고 Lighthouse 점수 확인하기',
        ],
      },
    ],
  },
];

// 백엔드 커리큘럼
const backendCurriculums = [
  {
    id: 'java',
    title: 'Java (4주 완성)',
    goal: '객체 지향 프로그래밍(OOP)의 핵심 개념을 이해하고, Java의 기본 문법과 표준 라이브러리를 활용하여 콘솔 기반 애플리케이션을 제작하는 능력을 기른다.',
    weeks: [
      {
        week: 1,
        objective: 'Java 기본 문법',
        details: [
          'JDK, JRE, JVM의 개념 및 환경 설정 (IntelliJ/Eclipse)',
          '변수, 데이터 타입 (기본형 vs 참조형), 연산자, 제어문',
          '배열(Array) 사용법',
        ],
        assignment: [
          '간단한 성적 계산 프로그램 만들기',
          '구구단 출력 프로그램 만들기',
        ],
      },
      {
        week: 2,
        objective: '객체 지향 프로그래밍(OOP)',
        details: [
          '클래스(Class)와 객체(Object)의 관계',
          '생성자(Constructor), 메서드(Method), 필드(Field)',
          'OOP 4대 특성: 캡슐화, 상속, 다형성, 추상화',
          '접근 제어자 (public, protected, private, default)',
        ],
        assignment: [
          "'학생', '과목' 클래스를 설계하고 객체 생성하기",
          "'동물' 클래스를 상속받는 '강아지', '고양이' 클래스 만들고 cry() 메서드 오버라이딩하기",
        ],
      },
      {
        week: 3,
        objective: 'Java 핵심 API',
        details: [
          'String, StringBuilder, Math 등 기본 클래스',
          '컬렉션 프레임워크: List, Set, Map의 차이와 사용법 (ArrayList, HashSet, HashMap)',
          '예외 처리 (try-catch-finally, throws)',
        ],
        assignment: [
          '컬렉션을 이용한 간단한 연락처 관리 프로그램 만들기',
          '사용자 입력 오류에 대한 예외 처리 로직 추가하기',
        ],
      },
      {
        week: 4,
        objective: '고급 개념',
        details: [
          '제네릭(Generics)의 개념과 필요성',
          '람다(Lambda) 표현식과 스트림(Stream) API',
          '파일 입출력 (File, InputStream, OutputStream)',
          '스레드(Thread)를 이용한 멀티스레딩 기초',
        ],
        assignment: [
          '학생 목록을 스트림 API를 이용해 필터링하고 정렬하기',
          '간단한 메모를 파일에 저장하고 읽어오는 프로그램 만들기',
        ],
      },
    ],
  },
  {
    id: 'spring',
    title: 'Java Spring (4주 완성)',
    goal: 'Spring 프레임워크의 핵심 원리(DI, AOP)를 이해하고, Spring Boot를 활용하여 빠르고 효율적으로 REST API 서버를 구축한다.',
    weeks: [
      {
        week: 1,
        objective: 'Spring Boot 시작하기',
        details: [
          'Spring 프레임워크의 핵심: DI(의존성 주입), IoC(제어의 역전)',
          'Spring Boot의 장점과 자동 설정(Auto-configuration)',
          'start.spring.io를 이용한 프로젝트 생성',
          '@RestController, @GetMapping을 이용한 Hello World API 만들기',
        ],
        assignment: [
          '"/hello" 경로로 요청 시 "Hello, Spring!"을 반환하는 API 만들기',
          '쿼리 파라미터로 이름을 받아 "Hello, [이름]!"을 반환하는 API 만들기',
        ],
      },
      {
        week: 2,
        objective: '웹 계층과 데이터 전달',
        details: [
          'MVC 패턴: @Controller, @Service, @Repository 역할 분리',
          '요청 처리: @PostMapping, @PutMapping, @DeleteMapping',
          '데이터 전달 객체(DTO)와 @RequestBody, @PathVariable',
          'Postman을 이용한 API 테스트',
        ],
        assignment: [
          '메모리 기반의 게시판 CRUD API 구현하기',
          'DTO를 만들어 요청/응답 데이터 구조 정의하기',
        ],
      },
      {
        week: 3,
        objective: '데이터베이스 연동',
        details: [
          'JPA (Java Persistence API)와 ORM의 개념',
          'application.yml에 데이터베이스(H2, MySQL) 정보 설정',
          '엔티티(Entity) 클래스 정의 (@Entity, @Id, @GeneratedValue)',
          'Spring Data JPA: JpaRepository를 이용한 CRUD 자동 구현',
        ],
        assignment: [
          '2주차 메모리 기반 API를 H2 데이터베이스와 연동하여 데이터 영속성 확보하기',
          'JpaRepository 인터페이스를 상속받아 DB 작업 자동화하기',
        ],
      },
      {
        week: 4,
        objective: '서비스 로직과 예외 처리',
        details: [
          '@Service 계층에서 비즈니스 로직 구현 (트랜잭션 처리 @Transactional)',
          '@ControllerAdvice와 @ExceptionHandler를 이용한 전역 예외 처리',
          'Lombok을 이용한 보일러플레이트 코드 제거 (@Getter, @NoArgsConstructor 등)',
          '(심화) Spring Security 기초 개념',
        ],
        assignment: [
          '게시글 생성/수정 시 비즈니스 로직(e.g., 제목 길이 검증) 추가하기',
          '특정 게시글 조회 시 없을 경우 404 에러를 반환하는 예외 처리 구현하기',
        ],
      },
    ],
  },
  {
    id: 'node',
    title: 'Node.js (4주 완성)',
    goal: 'Node.js의 비동기 이벤트 기반 아키텍처를 이해하고, Express 프레임워크를 사용하여 빠르고 확장성 있는 REST API 서버를 구축한다.',
    weeks: [
      {
        week: 1,
        objective: 'Node.js와 Express 기초',
        details: [
          'Node.js 런타임과 이벤트 루프 개념',
          'npm/yarn을 이용한 패키지 관리 (package.json)',
          'Express 프레임워크 설치 및 서버 실행',
          '라우팅(Routing)의 개념 (app.get, app.post)',
        ],
        assignment: [
          '"Hello World"를 응답하는 Express 서버 만들기',
          '"/users", "/posts" 등 여러 경로(endpoint)를 가진 서버 만들기',
        ],
      },
      {
        week: 2,
        objective: '미들웨어와 라우팅 심화',
        details: [
          '미들웨어(Middleware)의 개념과 next() 함수',
          'express.json(), morgan 등 자주 쓰는 미들웨어',
          'express.Router를 이용한 라우트 모듈화',
          'MVC(Model-View-Controller) 패턴 적용',
        ],
        assignment: [
          '요청 로그를 콘솔에 출력하는 커스텀 미들웨어 만들기',
          '기능별(user, post)로 라우터 파일을 분리하여 코드 구조화하기',
        ],
      },
      {
        week: 3,
        objective: 'DB 연동 (MongoDB)',
        details: [
          'NoSQL과 MongoDB의 기본 개념 (Document, Collection)',
          'Mongoose ODM: 스키마(Schema)와 모델(Model) 정의',
          'async/await를 이용한 비동기 DB 작업 처리',
          'CRUD 연산을 Mongoose 메서드로 구현 (find, create, findByIdAndUpdate)',
        ],
        assignment: [
          '메모리 기반의 CRUD API를 MongoDB와 연동하기',
          'User 모델과 Post 모델을 만들고, Post에 작성자 정보를 연결(Population)하기',
        ],
      },
      {
        week: 4,
        objective: '인증과 배포',
        details: [
          '비밀번호 암호화 (bcrypt)',
          'JWT (JSON Web Token) 기반 인증: 토큰 생성, 검증',
          '인증 미들웨어를 만들어 특정 라우트 보호하기',
          '환경 변수 관리 (dotenv) 및 클라우드 배포 (Render, Fly.io)',
        ],
        assignment: [
          '회원가입, 로그인 API를 만들고 로그인 성공 시 JWT 발급하기',
          '게시글 생성/수정/삭제 API에 JWT 인증 미들웨어 적용하기',
        ],
      },
    ],
  },
];

// AI/머신러닝
const aiCurriculums = [
  {
    id: 'ai-ml',
    title: 'AI / 머신러닝 (4주 완성)',
    goal: '머신러닝 프로젝트의 전체 파이프라인(데이터 수집, 전처리, 모델링, 평가)을 이해하고, 실제 데이터셋을 이용해 간단한 예측 모델을 직접 구현한다.',
    weeks: [
      {
        week: 1,
        objective: '데이터 분석 라이브러리',
        details: [
          'Numpy: 다차원 배열(ndarray) 생성, 연산, 인덱싱',
          'Pandas: DataFrame과 Series를 이용한 데이터 로드(CSV), 선택, 필터링, 그룹화',
          'Matplotlib/Seaborn: 선, 막대, 산점도 등 기본 데이터 시각화',
        ],
        assignment: [
          '공공데이터포털 또는 Kaggle에서 데이터셋을 다운로드하여 Pandas로 로드하고 기본 정보(결측치, 통계) 확인하기',
          '데이터의 특정 컬럼을 히스토그램이나 막대그래프로 시각화하기',
        ],
      },
      {
        week: 2,
        objective: '데이터 전처리',
        details: [
          '결측치 처리 (fillna, dropna)',
          '범주형 데이터 인코딩 (원-핫 인코딩, 레이블 인코딩)',
          '데이터 스케일링 (StandardScaler, MinMaxScaler)',
          '훈련/테스트 데이터 분리 (train_test_split)',
        ],
        assignment: [
          '타이타닉 생존자 예측 데이터셋의 결측치를 채우고, 문자열 데이터를 숫자형으로 변환하기',
          '변수 간 상관관계를 히트맵으로 시각화하여 분석하기',
        ],
      },
      {
        week: 3,
        objective: '머신러닝 모델링',
        details: [
          '회귀(Regression): 선형 회귀(Linear Regression)',
          '분류(Classification): 로지스틱 회귀, 의사결정트리(Decision Tree)',
          'Scikit-learn의 fit(학습)과 predict(예측) 메서드 사용법',
        ],
        assignment: [
          '보스턴 집값 또는 캘리포니아 주택 가격 데이터셋으로 선형 회귀 모델 학습시키기',
          '붓꽃(Iris) 품종 분류 데이터셋으로 의사결정트리 모델 학습시키기',
        ],
      },
      {
        week: 4,
        objective: '모델 평가 및 개선',
        details: [
          '회귀 평가 지표: MSE, R²',
          '분류 평가 지표: 정확도(Accuracy), 정밀도(Precision), 재현율(Recall), F1-Score, 혼동 행렬(Confusion Matrix)',
          'K-Fold 교차 검증(Cross-Validation)의 개념',
          '하이퍼파라미터 튜닝 (GridSearchCV)',
        ],
        assignment: [
          '학습된 모델의 성능을 적절한 평가 지표로 측정하고 결과 해석하기',
          '교차 검증을 통해 모델 성능의 안정성을 평가하고, GridSearchCV로 최적의 하이퍼파라미터 찾아보기',
        ],
      },
    ],
  },
];

// CS 기초
const csCurriculums = [
  {
    id: 'cs-basic',
    title: 'CS 기초 (4주 완성)',
    goal: '개발자로서 반드시 알아야 할 컴퓨터의 동작 원리, 운영체제, 네트워크의 핵심 개념을 비유와 실용적인 예시를 통해 이해한다.',
    weeks: [
      {
        week: 1,
        objective: '컴퓨터 구조',
        details: [
          '컴퓨터의 핵심 부품: CPU, 메모리(RAM), 보조기억장치(SSD/HDD)',
          '2진수와 데이터 표현 (비트, 바이트)',
          'CPU의 동작 원리 (Instruction Cycle)',
          '컴파일러와 인터프리터의 차이',
        ],
        assignment: [
          "컴퓨터를 '요리사(CPU)', '도마(RAM)', '냉장고(Storage)'에 비유하여 내가 짠 코드가 어떻게 실행되는지 설명해보기",
        ],
      },
      {
        week: 2,
        objective: '운영체제 (OS)',
        details: [
          '운영체제의 역할 (자원 관리, 추상화)',
          '프로세스(Process)와 스레드(Thread)의 개념과 차이',
          '멀티태스킹과 컨텍스트 스위칭',
          '메모리 관리 기법 (가상 메모리, 페이징)',
        ],
        assignment: [
          '웹 브라우저에서 여러 탭을 여는 것은 멀티프로세스일까, 멀티스레드일까? 토론해보기',
          "'프로세스는 독립된 집, 스레드는 그 집의 방' 비유로 설명하기",
        ],
      },
      {
        week: 3,
        objective: '네트워크 기초',
        details: [
          '인터넷 동작 원리 (클라이언트-서버, IP 주소, DNS)',
          'TCP/IP 4계층 모델의 역할',
          'TCP와 UDP의 차이 (신뢰성 vs 속도)',
          'TCP 3-way / 4-way handshake 과정',
        ],
        assignment: [
          'www.google.com을 주소창에 입력했을 때 일어나는 과정을 TCP/IP 계층별로 설명해보기',
          '온라인 게임은 TCP와 UDP 중 무엇을 쓸까? 생각해보기',
        ],
      },
      {
        week: 4,
        objective: '데이터베이스 기초',
        details: [
          '데이터베이스의 필요성 (파일 시스템과의 차이)',
          '관계형 데이터베이스 (RDBMS): 테이블, 행(Row), 열(Column), 키(Key)',
          'SQL 기본 문법 (SELECT, FROM, WHERE)',
          '트랜잭션(Transaction)과 ACID 속성',
        ],
        assignment: [
          '엑셀 시트와 RDBMS 테이블을 비교하며 차이점 설명하기',
          '은행 계좌 이체 과정을 예시로 트랜잭션의 중요성 설명하기',
        ],
      },
    ],
  },
];

// 알고리즘/코딩테스트
const algoCurriculums = [
  {
    id: 'algo',
    title: '알고리즘/코딩테스트 (4주 완성)',
    goal: '코딩테스트에 빈출되는 핵심 자료구조와 알고리즘 유형을 익히고, 온라인 저지 사이트에서 관련 문제를 해결하는 능력을 집중적으로 훈련한다.',
    weeks: [
      {
        week: 1,
        objective: '기초 자료구조',
        details: [
          '스택(Stack)과 큐(Queue): 개념 및 구현, 활용 문제',
          '해시(Hash): Map, Set을 이용한 시간 복잡도 개선',
          '정렬(Sort): 내장 정렬 함수 마스터, 정렬 기준 커스터마이징',
        ],
        assignment: [
          "스택/큐: '올바른 괄호', '기능개발'",
          "해시: '완주하지 못한 선수', '전화번호 목록'",
          "정렬: 'K번째수', '가장 큰 수'",
        ],
      },
      {
        week: 2,
        objective: '완전 탐색 & 재귀',
        details: [
          '완전 탐색 (Brute-force): 모든 경우의 수를 탐색하는 문제 해결 전략',
          '재귀(Recursion): 재귀 함수의 구조와 동작 원리 이해',
          '백트래킹(Backtracking): 조건에 맞지 않으면 되돌아가는 탐색 기법',
        ],
        assignment: [
          "완전탐색: '모의고사', '카펫'",
          "백트래킹: 'N과 M (1)' (백준 15649)",
        ],
      },
      {
        week: 3,
        objective: '그래프 탐색 (DFS/BFS)',
        details: [
          '그래프(Graph) 기본: 인접 행렬과 인접 리스트 표현법',
          'DFS (깊이 우선 탐색): 스택/재귀를 이용한 구현',
          'BFS (너비 우선 탐색): 큐를 이용한 구현, 최단 거리 문제',
        ],
        assignment: [
          "DFS/BFS: '타겟 넘버', '네트워크', '단지번호붙이기' (백준 2667), '미로 탐색' (백준 2178)",
        ],
      },
      {
        week: 4,
        objective: '고급 알고리즘 입문',
        details: [
          '그리디(Greedy): 매 순간 최적의 선택을 하는 전략',
          '이분 탐색(Binary Search): 정렬된 데이터에서 빠르게 값 찾기',
          '동적 계획법 (Dynamic Programming): 문제 쪼개기와 메모이제이션',
        ],
        assignment: [
          "그리디: '체육복', '회의실 배정' (백준 1931)",
          "이분탐색: '입국심사', '숫자 카드 2' (백준 10816)",
          "DP: 'N으로 표현', '1로 만들기' (백준 1463)",
        ],
      },
    ],
  },
];

const fields = [
  { id: 'frontend', label: '프론트엔드', curriculums: frontendCurriculums },
  { id: 'backend', label: '백엔드', curriculums: backendCurriculums },
  { id: 'ai', label: 'AI/머신러닝', curriculums: aiCurriculums },
  { id: 'cs', label: 'CS 기초', curriculums: csCurriculums },
  { id: 'algo', label: '알고리즘', curriculums: algoCurriculums },
];

function Curriculum() {
  const [activeField, setActiveField] = useState(fields[0].id);
  const [activeTech, setActiveTech] = useState(fields[0].curriculums[0].id);

  const currentField = fields.find((f) => f.id === activeField);
  const currentTech = currentField.curriculums.find((c) => c.id === activeTech);

  // 분야 변경 시 기술 탭도 첫 번째로 리셋
  const handleFieldChange = (fieldId) => {
    setActiveField(fieldId);
    const field = fields.find((f) => f.id === fieldId);
    setActiveTech(field.curriculums[0].id);
  };

  return (
    <section className="curriculum" id="curriculum">
      <div className="container">
        <div className="section-header">
          <h2>기술 스택별 4주 완성 커리큘럼</h2>
          <p className="section-subtitle">
            각 커리큘럼은 입문자가 해당 기술의 핵심을 4주 안에 마스터하는 것을
            목표로 하며, 주차별 학습 목표, 구체적인 학습 내용, 그리고 실습
            과제를 포함하여 체계적인 학습이 가능하도록 설계했습니다.
            <br />
          </p>
          <p className="section-subtitle-exl">
            (원하는 커리큘럼이 없다면 본인이 커리큘럼을 짜도 좋습니다!)
          </p>
        </div>
        {/* 분야별 탭 */}
        <div className="curriculum-tabs">
          {fields.map((field) => (
            <button
              key={field.id}
              className={`curriculum-tab-btn${
                activeField === field.id ? ' active' : ''
              }`}
              onClick={() => handleFieldChange(field.id)}
            >
              {field.label}
            </button>
          ))}
        </div>
        {/* 기술별 서브탭 */}
        <div className="tech-tabs">
          {currentField.curriculums.map((tech) => (
            <button
              key={tech.id}
              className={`tab-button${activeTech === tech.id ? ' active' : ''}`}
              onClick={() => setActiveTech(tech.id)}
            >
              {tech.title}
            </button>
          ))}
        </div>
        {/* 4주차별 커리큘럼 표 */}
        <div className="curriculum-detail">
          <h3>{currentTech.title}</h3>
          <p className="curriculum-goal">{currentTech.goal}</p>
          <table className="curriculum-table">
            <thead>
              <tr>
                <th>주차</th>
                <th>핵심 목표</th>
                <th>세부 학습 내용</th>
                <th>실습 과제</th>
              </tr>
            </thead>
            <tbody>
              {currentTech.weeks.map((week) => (
                <tr key={week.week}>
                  <td>{week.week}주차</td>
                  <td>{week.objective}</td>
                  <td>
                    <ul>
                      {week.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {week.assignment.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
