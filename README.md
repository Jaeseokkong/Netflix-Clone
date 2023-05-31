# Netflix Clone Project
## 배포 주소
https://netflix-clone-orpin-chi.vercel.app/

## 프로젝트 소개
Netfilx를 클론 코딩하여
React, Next.js, NextAuth, MongoDB, Prisma
를 활용한 웹 사이트를 구축하여 Vercel에 배포

## 개요
### Infomation
넥플릭스 클론 코딩
Next js를 활용하여 

## 시작가이드
### Requirements
For builng and running the application you need:
 - Node.js 16.10.0

### Installation
```
git clone https://github.com/Jaeseokkong/Netflix-Clone.git
```

## Backend
```
npm install
prisma generate
```

## Frontend
```
npm install
npm run dev
```

## Stacks🕹
### Environment
<img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/> <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=Git&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>

### Config
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>

### Development
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/> <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/> <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/> 

### Style
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/> 


### Communication
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"/>

## 화면 구성 💻
|로그인 & 간편 로그인|반응형|영상 리스트|영상 재생|
|---|---|---|---|
|<img src="https://github.com/Jaeseokkong/Netflix-Clone/assets/115916829/b95791dc-3629-4e0c-a7a1-c4e5a0d2233c" width="50%"/>
|<img src="https://github.com/Jaeseokkong/Netflix-Clone/assets/115916829/47da9216-6768-4e6c-9246-21480213c6c8" width="50%"/>|
<img src="https://github.com/Jaeseokkong/Netflix-Clone/assets/115916829/4e12bc30-e701-47c0-82b5-9e60761f8507" width="50%"/>|
<img src="https://github.com/Jaeseokkong/Netflix-Clone/assets/115916829/335c3453-6b71-4bfd-ba70-45cc9bf3cd24" width="50%"/>|


## 화면 구성 💻
|로그인 & 간편 로그인|반응형|
|---|---|
|![login_logout](https://github.com/Jaeseokkong/Netflix-Clone/assets/115916829/b95791dc-3629-4e0c-a7a1-c4e5a0d2233c)
|![responsive](https://github.com/Jaeseokkong/Netflix-Clone/assets/115916829/47da9216-6768-4e6c-9246-21480213c6c8)||영상 리스트|영상 재생||---|---||![movie_list_new](https://github.com/Jaeseokkong/Netflix-Clone/assets/115916829/4e12bc30-e701-47c0-82b5-9e60761f8507)
|![movie_play_new](https://github.com/Jaeseokkong/Netflix-Clone/assets/115916829/335c3453-6b71-4bfd-ba70-45cc9bf3cd24)|


## 아키텍쳐
### 디렉토리 구조

```
netfilx-clone
├─ .eslintrc.json
├─ app
│  ├─ favicon.ico
│  └─ layout.tsx
├─ components ()
│  ├─ AccountMenu.tsx
│  ├─ Billboard.tsx
│  ├─ FavoriteButton.tsx
│  ├─ InfoModal.tsx
│  ├─ input.tsx
│  ├─ MobileMenu.tsx
│  ├─ MovieCard.tsx
│  ├─ MovieList.tsx
│  ├─ Navbar.tsx
│  ├─ NavbarItem.tsx
│  └─ PlayButton.tsx
├─ global.d.ts
├─ hooks (재사용 Rest api)
│  ├─ useBillboard.ts 
│  ├─ useFavorites.ts
│  ├─ useInfoModal.ts
│  ├─ useMovie.ts
│  ├─ useMovieList.ts
│  └─ userCurrentUser.ts
├─ lib
│  ├─ fetcher.ts
│  ├─ prismadb.ts  (DB 정보)
│  └─ serverAuth.ts (로그인 유저 권한 정보)
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ api
│  │  ├─ auth
│  │  │  └─ [...nextauth].ts 
│  │  ├─ current.ts
│  │  ├─ favorite.ts
│  │  ├─ favorites.ts
│  │  ├─ movies
│  │  │  ├─ index.ts
│  │  │  └─ [movieId].ts
│  │  ├─ random.ts
│  │  └─ register.ts
│  ├─ auth.tsx : 로그인 페이지
│  ├─ index.tsx : 메인 페이지
│  ├─ profiles.tsx : 개인 정보
│  ├─ test.tsx
│  ├─ watch
│  │  └─ [movieId].tsx
│  └─ _app.js
├─ postcss.config.js
├─ prisma
│  └─ schema.prisma : 스키마 정보
├─ public
│  ├─ images
│  │  ├─ default-blue.png
│  │  ├─ default-green.png
│  │  ├─ default-red.png
│  │  ├─ default-slate.png
│  │  ├─ hero.jpg
│  │  ├─ logo.png
│  │  ├─ poster.png
│  │  └─ thumbnail.jpg
│  ├─ next.svg
│  └─ vercel.svg
├─ README.md
├─ styles
│  └─ globals.css
├─ tailwind.config.js
└─ tsconfig.json

```
