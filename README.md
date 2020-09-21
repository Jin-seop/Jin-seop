### Personal Portfolio

이 repository는 여러분이 처음부터 시작해야 합니다. 

과제 제출시  다음과 같은 폴더 구조로 제출해주세요.

    / 
    ├── /server
    │   ├── /public      # React앱을 빌드한 파일
    │   ├── index.js     # node.js로 작성된 웹 서버 진입점
    │   ├── ...          # 기타 여러분들이 필요에 따라 만드는 파일들
    │   └── package.json
    │
    ├── /client
    │   ├── README.md    # create-react-app이 만들어낸 파일
    │   ├── /build       # React앱을 빌드한 파일
    │   ├── /public      # create-react-app이 만들어낸 파일, yarn start로 실행할 시에 쓰입니다
    │   └── /src         # React 컴포넌트가 들어가는 폴더
    │        ├── App.js
    │        ├── App.css
    │        ├── index.js
    │        ├── index.css
    │        ├── ...
    │        └── package.json
    │
    └.gitignore   # gitignore를 이용해서 node_modules가 repository에 포함되지 않도록 하세요
