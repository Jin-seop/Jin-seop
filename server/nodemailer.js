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
    user: '',
    pass: ''
  },
  maxConnections: 5,
  maxMessages: 10
}));

let mailOpt = {
  from: '',
  to: '',
  subject: 'Front-end 신입 지원자 신진섭 이력서입니다.',
  html: '<h1>Front-end 지원자 신진섭입니다.</h1><br/><p>제 이력서를 요청해 주셔서 감사합니다. 이력서는 아래 링크에 있습니다.</p><a href='https://www.notion.so/shinjinseopresume/Front-end-2bdfe0230682436a98dd9bc367c8cd24'>이력서 보러가기</a> '
};
smtpTransport.sendMail(mailOpt, function (err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log('Message send :' + res);
  }

  smtpTransport.close();
});

