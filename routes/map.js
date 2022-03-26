const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
// express 패키지의 Router를 가져온다.
  

router.get('/', (req, res) => {
    res.send('map 이후 url');
})

router.get('/map', (req, res) => {
    res.render('map/map.html', {

    })
});



module.exports = router;
