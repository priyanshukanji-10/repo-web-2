const express = require("express");
const app = express();
const path = require('path');
const articleRouter = require('./routes/articles');
const publicpath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('Home');
});

app.use(express.static(publicpath,));

app.use('/articles', articleRouter);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
