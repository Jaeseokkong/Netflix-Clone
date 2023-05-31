## 개요
### Infomation
넥플릭스 클론 코딩
Next js를 활용하여 

## 시작가이드
### Requirements
For builng and running the application you need:
 - Node.js 16.10.0

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