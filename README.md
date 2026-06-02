# 🔖 Bookmark App

> 나만의 북마크를 저장하고 관리하는 풀스택 웹 서비스

<br>

## 📌 프로젝트 소개

URL, 제목, 메모, 태그를 함께 저장할 수 있는 북마크 관리 웹 애플리케이션입니다.  
JWT 기반 로그인으로 개인 북마크를 안전하게 관리하고, 태그 필터링 및 키워드 검색으로 빠르게 찾을 수 있습니다.

<br>

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 🔐 회원가입 / 로그인 | JWT 기반 인증, bcrypt 비밀번호 암호화 |
| 📎 북마크 CRUD | URL, 제목, 메모, 태그 등록·수정·삭제 |
| 🔍 검색 / 필터링 | 키워드 검색 및 태그 기반 필터링 |
| 💾 인증 상태 유지 | localStorage에 토큰 저장, 새로고침 후에도 유지 |
| 📱 반응형 UI | MUI 기반 모바일/데스크톱 대응 |

<br>

## 🛠 기술 스택

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=mui&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

### Infra
![Nginx](https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=nginx&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

<br>

## 📁 프로젝트 구조

```
web-project/
├── frontend/               # React + Vite
│   ├── src/
│   │   ├── components/     # 재사용 컴포넌트 (BookmarkCard, Modal 등)
│   │   ├── pages/          # 페이지 (LoginPage, BookmarkPage)
│   │   ├── api/            # fetch 함수 모음
│   │   └── App.jsx
│   └── Dockerfile
│
├── backend/                # Node.js + Express
│   ├── routes/             # API 라우터
│   ├── db/                 # SQLite 연결 및 쿼리
│   ├── middleware/         # JWT 인증 미들웨어
│   └── Dockerfile
│
├── nginx/
│   └── nginx.conf          # 리버스 프록시 설정
│
└── docker-compose.yml      # 전체 컨테이너 관리
```

<br>

## 🚀 실행 방법

### 사전 요구사항
- [Node.js](https://nodejs.org/) v22 이상
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Docker로 실행 (권장)

```bash
# 레포지토리 클론
git clone https://github.com/ldh106/web-project.git
cd web-project

# 환경 변수 설정
cp .env.example .env

# 전체 실행
docker-compose up --build
```

브라우저에서 `http://localhost` 접속

### 로컬 개발 환경

```bash
# 백엔드
cd backend
npm install
npm run dev

# 프론트엔드 (새 터미널)
cd frontend
npm install
npm run dev
```

<br>

## 🔑 환경 변수

`.env` 파일을 루트에 생성 후 아래 값을 설정하세요.

```env
JWT_SECRET=your_jwt_secret_key
PORT=8080
```

<br>

## 📡 API 명세

| Method | Endpoint | 설명 | 인증 |
|--------|----------|------|------|
| POST | `/api/auth/register` | 회원가입 | ❌ |
| POST | `/api/auth/login` | 로그인 | ❌ |
| GET | `/api/bookmarks` | 북마크 목록 조회 | ✅ |
| POST | `/api/bookmarks` | 북마크 추가 | ✅ |
| PUT | `/api/bookmarks/:id` | 북마크 수정 | ✅ |
| DELETE | `/api/bookmarks/:id` | 북마크 삭제 | ✅ |

<br>

## 👤 개발자

**임동한** · 인천대학교 정보통신공학과  
[![GitHub](https://img.shields.io/badge/GitHub-ldh106-181717?style=flat-square&logo=github)](https://github.com/ldh106)
