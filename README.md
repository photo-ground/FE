# Photo Ground FE 레포

## 시작하기

### 로컬에서 Dev Server 실행

1. [GitHub](https://github.com/photo-ground/FE)에서 코드를 clone합니다.
2. `npm i` 명령어로 필요한 패키지를 설치합니다.
    - 현재 Next.js v15와 일부 ESlint 플러그인 사이에 호환성 문제가 발생합니다.
    - ~~이 문제를 피하기 위해서 `npm i --legacy-peer-deps` 명령어를 사용해주세요.~~
    - 24.10.27. 추가: `.npmrc` 파일 설정을 추가해 `npm i` 명령어로도 설치 가능합니다.
    - 이후 호환성 문제가 해결된다면 이 내용을 삭제해주세요.
3. `npm run dev` 명령어로 서버를 실행합니다.
4. 브라우저에서 [http://localhost:3000](http://localhost:3000/)로 이동해 페이지를 확인합니다.

### 코드 수정하기 (로컬에서 Dev Server 실행에 이어서)

5. 코드를 작성한 후, `npm run lint`와 `npm run prettier` 명령어를 실행해 코드 스타일에 어긋난 부분이 있는지 확인하고, 규칙에 맞게 수정합니다.
    - `npm run lint:fix` 명령어를 실행하면 자동으로 수정 가능한 부분이 고쳐집니다.
    - VSCode에서 ESLint와 Prettier 확장을 설치하고, 추가 설정을 통해 저장 시 자동으로 포맷팅이 가능하도록 할 수 있습니다.
