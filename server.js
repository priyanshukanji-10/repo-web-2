const express = require("express");
const app = express();
const path = require('path');
const homeRouter = require('./routes/articles');

// Define the public path before setting up routes
const publicpath = path.join(__dirname, 'public');
app.use(express.static(publicpath));

// Set EJS as the view engine
app.set('view engine', 'ejs');
;

app.get('/', (req, res) => {
    res.render('Home');
});

app.get('/blog', (req, res) => {
    const blog=[{
        title:'test title',
        Date: Date.now(),
        Description:'test description'
    }]
    res.render('blog', {
        blog:blog
    });
});

// Define routes
app.use('/Home', homeRouter);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
