const express = require('express')
const router = express.Router()
// express 패키지의 Router를 가져온다.

router.get('/', (req, res) => {
    res.send('index 이후 url');
})

router.get('/index', (req, res) => {
    res.render('index/index.html', {

    })
});
module.exports = router;