#몽고DB 설치법 (윈도우 기준)

1. 공식홈피 들어가서 msi 파일을 다운받는다.
2. 기본으로 설정되어 있는 경로로 설치한다.
3. C:\Program Files\MongoDB\Server\4.0\bin 에 mongo.exe, mongod.exe 등 파일 있는지 확인
4. [중요] 윈도우-cmd창을 연다. (PowerShell, Git Bash 등등 다 안됨 cmd만!)
5. root 디렉토리(C:\)로 cd하여 "mkdir C:\data\db" 를 입력한다. -> 수동으로 폴더 만들어도됨
6. C:\Program Files\MongoDB\Server\4.0\bin 경로로 돌아가서 "mongod.exe" 입력
  --> 뭔가 몇 줄이 촤르륵 뜨더니 더이상 움직이지 않을 것이다.
7. cmd 창을 하나 더 오픈한다.
8. C:\Program Files\MongoDB\Server\4.0\bin 같은 경로로 들어가서 "mongo.exe" 입력
9. 촤르륵 글이 뜨고, 이번에는 '>'표시가 있을 것이다.
10. 거기에 "show dbs" 입력해서 admin, config, local 어쩌구 뜨면 성공

#설치 후 사용법
1. '~~\bin' 경로의 파일을 열어 놓는 게 편하다.
2. 폴더 내 경로 창의 빈 부분 클릭하고 "cmd ." 입력하면 그 경로의  cmd 창으로 바로 이동함
3. 하나의 cmd 창에 먼저 'mongod' 입력하여 창 띄워 놓는다.
4. 같은 경로에서 cmd창 하나 더 생성하여 "mongo" 입력하고 사용하면 된다.
5. 익숙해지면 vscode 내에 cmd 터미널을 여러 개 띄워놓고 사용하자.