const express = require('express');
const helmet = require("helmet");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
    // const db = require("./data/database");
const app = express();
const usersRoutes = require('./routes/users');
const hotelsRoutes = require('./routes/hotels');
const bookingsRoutes = require('./routes/bookings');
const transactionsRoutes = require('./routes/transactions');


var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

require('dotenv').config();
const port = process.env.HTTP_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());
// app.use(helmet());

// basic route 
app.use('/users', usersRoutes);
app.use('/hotels', hotelsRoutes);
app.use('/bookings', bookingsRoutes);
app.use('/transactions', transactionsRoutes);

app.get('/', (req, res) => {
    res.send("Hello world");
});

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function(req, res) {
    res.send('welcome, ' + req.body.name)
});

app.listen(port, () => {
    console.log(`Connection on http://localhost:${port}`);
})