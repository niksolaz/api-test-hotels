const express = require('express');
const helmet = require("helmet");
const path = require('path')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const db = require("./data/database");
const mid = require('./middleware/mid')
const app = express();
const loginRoutes = require('./routes/login');
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
app.use('/login', loginRoutes);
app.use('/users', [mid.checkOut], usersRoutes);
app.use('/hotels', [mid.checkOut], hotelsRoutes);
app.use('/bookings', [mid.checkOut], bookingsRoutes);
app.use('/transactions', [mid.checkOut], transactionsRoutes);

app.set('views', path.join(__dirname, 'views'))

app.get('/', [mid.checkOut], (req, res) => {
    res.sendFile('index.html', { root: app.get('views') })
});


app.listen(port, () => {
    console.log(`Connection on http://localhost:${port}`);
})