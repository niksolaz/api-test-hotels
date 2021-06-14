// routes/transactions.js
const express = require('express');
const router = express.Router();
const { users, bookings, transactions } = require('../data/fakedata');

/**
 * Url for Transactions
 */

// get all transactions
router.get('/', function(req, res) {
    res.send(transactions);
});

// get one transaction
router.get('/:tid', function(req, res) {
    const tid = req.params['tid'];
    res.send(transactions[tid]);
});

// post new transactions
router.post('/', function(req, res) {
    const addtransactions = {
        "hotel": req.body.hotel,
        "user": req.body.user,
        "amount": req.body.amount,
        "payment_type": req.body.payment_type,
        "status": req.body.status,
    };
    transactions.push(addtransactions);
    res.setHeader('content-type', 'application/json');
    res.status(200).send(transactions);
});
module.exports = router;