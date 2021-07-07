if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const dbUrl = process.env.DB_URL;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const path = require('path');
const methodOverride = require('method-override');
const homeRouter = require('./routes/home');
const managementRouter = require('./routes/management');
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
);

// initials app view engine and static folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));



// routes

app.use('/', homeRouter);
app.use('/management', managementRouter);

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`server listening to port ${port}`)
})