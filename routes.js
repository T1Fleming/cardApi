const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const cardApi = require('./service')


router.get('/', function (req, res) {
    //   res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
    res.send('Hello World!')
});

router.get('/generateCardDeck', function (req, res) {
    //   res.sendFile(path.join(__dirname+'/about.html'));
    res.send(cardApi.generateCardDeck())
});

router.get('/sitemap', function (req, res) {
    //   res.sendFile(path.join(__dirname+'/sitemap.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');