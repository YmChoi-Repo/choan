// express, nunjucks, path, Parser, morgan 패키지 불러오기
const express = require('express')
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// 기본 app 생성
const app = express();
// 사용할 port 설정
const port = 3000;
// routes 폴더의 admin, index, map, data 파일을 불러온다
const admin = require('./routes/admin')
const index = require('./routes/index')
const map = require('./routes/map')
const data1 = require('./routes/incheoncctv')
const data2 = require('./routes/incheonparkinglot')
const data3 = require('./routes/seoulcctv')
const data4 = require('./routes/seoulparkinglot')

const mongoose = require('mongoose');
mongoose.connect('mongodb://3.35.153.238:27017/testapi');
//mongoose와 ec2 ip를 연동하는 코드.


// require로 불러온거 settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// (Nunjucks Setting)template를 인식하고 사용하겠다, autoescape는 보안상 true, express : app는 사용할 주체
nunjucks.configure('template', {
    autoescape: true,
    express: app
});

//static files(cssjs 폴더와 연결시켜주는 코드)
app.use(express.static(path.join(__dirname, 'cssjs')));


app.get('/', (req, res) => {
    res.send('hello express');
});
// 기본주소(/)을 입력했을 때는
// get요청을 보내라
// req(request)와 res(response)를 인자로 받고
// res에 'hello express' 메세지를 담아 보내준다.

app.get('/inu', (req, res) => {
    res.send('inu page');
});
// 해당주소(/inu)을 입력했을 때는
// get요청을 보내라
// req(request)와 res(response)를 인자로 받고
// res에 'inu page' 메세지를 담아 보내준다.

app.use('/admin', admin)
// /admin이 포함된 주소는 admin(router객체)을 참조하도록 한다.

app.use('/index', index)
// /index가 포함된 주소는 index(router객체)을 참조하도록 한다.

app.use('/map', map)
// /map이 포함된 주소는 map(router객체)를 참조하도록 한다.

app.use('/data', data1)
// /data1가 포함된 주소는 data(router객체)를 참조하도록 한다.

app.use('/data', data2)
// /data1가 포함된 주소는 data(router객체)를 참조하도록 한다.

app.use('/data', data3)
// /data1가 포함된 주소는 data(router객체)를 참조하도록 한다.

app.use('/data', data4)
// /data1가 포함된 주소는 data(router객체)를 참조하도록 한다.

app.listen(port, () => {
    console.log('Express listening on port', port)
})
// 서버를 실행한다.
// 잘 작동이 되었다면 콘솔 로그로 해당 메세지를 출력해라.
