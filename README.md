# Twitter Clone - FE

![화면 캡처 2022-09-15 180012](https://user-images.githubusercontent.com/73919235/190458301-5dcdb62d-05b0-4239-ae60-337a6b5d5f2e.png)

## 📢 프로젝트 소개
트위터를 모바일 화면 기준으로 클론한 미니 프로젝트입니다.
- [API 명세서](https://www.notion.so/d1761736f19246b88c50990a33d7dfe0)
- [프로젝트 배포 URL](http://twitter-mini-clone.s3-website.ap-northeast-2.amazonaws.com/first)
<br>

## 🗓 프로젝트 기간
- 2022.09.09 - 2022.09.15
<br>

## ✅ 구현한 기능
- User
    - 로그인
    - 회원가입
    - 로그아웃
    - 구글 로그인
    
    - Profile
        - 사용자 프로필 조회, 수정
        - Follow, Unfollow
        - Tweet 작성
        - Tweets
            - Tweet 조회, 삭제(답글, 리트윗 포함)
        - Likes
            - 좋아요 한 Tweet 조회, 답글
            - 좋아요 취소
        
- Home
    - Tweet 작성, 조회, 삭제
    - Tweet 좋아요, 좋아요 취소
    - Tweet 리트윗
    - 무한 스크롤
        
- Detail
    - 답글 작성, 조회, 삭제
    - 답글 좋아요, 좋아요 취소
    - 답글 리트윗
<br>

## ✅ 주 사용 패키지
```json
  "dependencies": {
    "axios": "^0.27.2",
    "json-server": "^0.17.0",
    "moment": "^2.29.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.4.0",
    "react-player": "^2.10.1",
    "react-query": "^3.39.2",
    "react-redux": "^8.0.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "styled-components": "^5.3.5"
  },
```
<br>

## ✅ Commit Convention
### 타입은 태그와 제목으로 구성되고, 태그는 영어로 쓰되 첫 문자는 대문자로 합니다.
### "태그: 제목"의 형태이며, : 뒤에만 space가 있음에 유의합니다.

### 예시) Feat: 답글 삭제 기능 추가

`Feat:` 새로운 기능을 추가할 경우

`Fix:` 버그를 고친 경우

`Design:` CSS 등 사용자 UI 디자인 변경

`!BREAKING CHANGE:` 커다란 API 변경의 경우

`!HOTFIX:` 급하게 치명적인 버그를 고쳐야하는 경우

`Style:` 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우

`Refactor:` 프로덕션 코드 리팩토링

`Comment:` 필요한 주석 추가 및 변경

`Docs:` 문서를 수정한 경우

`Test:` 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)

`Chore:` 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)

`Rename:` 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
 
`Remove:` 파일을 삭제하는 작업만 수행한 경우
