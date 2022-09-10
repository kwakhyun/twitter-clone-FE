![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/95cf665e-44f8-4673-bf6f-a5e4d05d7619/Untitled.png)

## To-do List

- [ ]  
- [ ]  
- [ ]  
- [ ]  
- [ ]  

## Development scope

- User
    - 로그인
    - 회원가입
    - 로그아웃
    - 프로필 조회, 수정(이미지 업로드)
    - 트윗 작성(텍스트, 이미지, 동영상), 조회, 삭제
    - 좋아요 한 트윗 조회
    - 부가 기능
        
        소셜 로그인
        
        팔로우, 언팔로우
        
        좋아요 한 트윗에 댓글, 좋아요 취소
        
        다른 사용자 프로필 조회
        
- Home
    - 트윗 작성(텍스트, 이미지, 동영상), 조회, 삭제
    - 게시물 좋아요, 좋아요 취소
    - 부가 기능
        
        게시물 리트윗
        
        무한 스크롤
        
- Detail
    - 댓글 작성(텍스트, 이미지, 동영상), 조회, 삭제
    - 댓글 좋아요, 좋아요 취소
    - 대댓글 작성(텍스트, 이미지, 동영상), 조회, 삭제
    - 대댓글 좋아요, 좋아요 취소
    - 부가 기능 - 리트윗
        
        댓글 리트윗
        
        대댓글 리트윗
        
- 부가 기능 - Message
    
    웹 소켓을 이용한 실시간 채팅
    

[API 명세서](https://www.notion.so/d1761736f19246b88c50990a33d7dfe0)

## Commit Convention
### 타입은 태그와 제목으로 구성되고, 태그는 영어로 쓰되 첫 문자는 대문자로 합니다.
### "태그: 제목"의 형태이며, : 뒤에만 space가 있음에 유의합니다.

### 예시) Feat: 댓글 삭제 기능 추가

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
