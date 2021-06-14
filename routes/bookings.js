// routes/bookings.js
const express = require('express');
const router = express.Router();
const { users, hotels, bookings } = require('../data/fakedata');

/**
 * Url for Bookings
 */
// get bookings with users_id nad hotels_id 
router.get('/users/:uid/hotels/:hid', function(req, res) {
    const hid = req.params['hid'];
    const uid = req.params['uid'];
    const result = {
        _hid: hid,
        _uid: uid,
        _users: users[uid],
        _hotels: hotels[hid],
        amount: 50
    }
    res.send(result);
});

// get bookings for management
router.get('/:bid', function(req, res) {
    const bid = req.params['bid'];
    res.send(bookings[bid]);
});

module.exports = router;