const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    res.render('index');
});

// app.post('/request_app_basic', (req, res) => {
//     res.json({
//         action: `open_fullpopup`,
//         param: `title=${req.body.title}&hookingUri=${req.body.uri}`,
//         callback: 'setCode'
//     });
// });

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});
