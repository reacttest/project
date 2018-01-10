const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan');

const config = require('./config/database');
const index = require('./routes/index');
const router = require('./router');

// connect to mongoDB
mongoose.connect(config.database, { useMongoClient: true });
let db = mongoose.connection;

// Check connection
db.once('open', function(){
    console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(err){
    console.log(err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

// // Enable CORS from client-side
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     next();
// });

// Require static assets from public folder
// app.use(express.static(path.join(__dirname, 'public')));

// Set view engine as EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     let err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     // res.render('error');
//     res.json({ error: 'error'})
// });

let router1 = express.Router();

/* GET users listing. */
app.use('/test', router1.get('/', function(req, res, next) {
    res.json({
        id: 123,
        name: "test"
    })
}));


router(app);



module.exports = app;
