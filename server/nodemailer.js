const nodemailer = require('nodemailer');



//smtp 서버를 사용하기 위한 모듈이다.

const smtpPool = require('nodemailer-smtp-pool');



//nodemailer 의 createTransport는 transporter 객체를 만드는 메소드인데 

//아래 메소드 참조값 변수 smtpTransport 는 nodemailer-smtp-pool 객체 인스턴스에 인자값으로 쓰인다.

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
    pass: 'Dkdleldj9!'
  },
  maxConnections: 5,
  maxMessages: 10
}));

var mailOpt = {
  from: 'turn3361@gmail.com',
  to: 'turn3361@gmail.com',
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

