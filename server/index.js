const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const password = require('./password');

const app = express();

const emailListPath = path.join(__dirname, '/public', 'emailList.json');
const PORT = 8080;

const nodemailer = require('nodemailer');
//smtp 서버를 사용하기 위한 모듈이다.
const smtpPool = require('nodemailer-smtp-pool');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const smtpTransport = nodemailer.createTransport(smtpPool({
  service: 'Gmail',
  host: 'localhost',
  port: '465',
  tls: {
    rejectUnauthorize: false
  },

  //이메일 전송을 위해 필요한 인증정보

  //gmail 계정과 암호 
  auth: {
    user: 'turn3361@gmail.com',
    pass: password.passoword
  },
  maxConnections: 5,
  maxMessages: 10
}));




//정적 파일 제공을 위해 빌드한 파일 경로로 지정해주기
app.use(express.static(path.join(__dirname, '/public')));

//모든 url에 대해 해당 경로의 html을 연결시키기
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
//포스트 요청에 대한 응답처리하기


//요청 받은 주소로 이메일 보내기
app.post('/email', (req, res) => {
  let mailOpt = {
    from: 'turn3361@gmail.com',
    to: req.body.text,
    subject: 'Nodemailer 테스트',
    html: '<h1>우하하하 스팸 아님 테스트임</h1>'
  };

  smtpTransport.sendMail(mailOpt, function (err, res) {
    if (err) {
      console.log(err);
    } else {
      console.log('Message send :' + res);
    }
    smtpTransport.close();
  });
});

// app.post('/email', (req, res) => {

//   fs.readFile(emailListPath, 'utf8', (err, data) => {
//     data = JSON.parse(data);
//     data.push(req.body);
//     const temp = JSON.stringify(data);
//     fs.writeFile(emailListPath, temp, (err) => {
//       if (err) {
//         res.status(500).send('Error');
//       }
//       res.status(201).send('');
//     });
//   });
// });

// app.use(function (req, res, next) {
//   res.status(404).send('Sorry cant find that!');
// });



//아이피 연결하기
app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});