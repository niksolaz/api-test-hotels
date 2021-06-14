// routes/user.js
const express = require('express');
const router = express.Router();
const { users, bookmarks } = require('../data/fakedata');

/**
 * Url for Users
 */
// get all users
router.get('/', function(req, res) {
    res.json(users);
});

// get one user
router.get('/:uid', function(req, res) {
    const uid = req.params['uid'];
    if (users[uid] !== undefined) {
        res.json(users[uid]);
    } else {
        res.status(404).send('Users Not Found');
    }
});

// add new user
router.post('/', function(req, res) {
    const addUser = {
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "email": req.body.email,
        "bookmarks": []
    }
    users.push(addUser);
    res.setHeader('content-type', 'application/json');
    res.status(200).send(users);
});

// update user
router.put('/:uid', function(req, res) {
    const uid = req.params['uid'];
    users[uid] = {
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "email": req.body.email,
        "bookmarks": null
    }

    res.send(users[uid]);
});

// delete user
router.delete('/:uid', function(req, res) {
    const uid = req.params['uid'];
    let idx = users.indexOf(users[uid]);
    if (idx > -1) {
        users.splice(idx, 1);
    }
    res.send(users);
});

/**
 * Url for Bookmarks
 */
// get all bookmarks
router.get('/:uid/bookmarks', function(req, res) {
    const uid = req.params.uid;
    users[uid].bookmarks = bookmarks;
    res.send(users[uid].bookmarks);
});

// get one bookmarks
router.get('/:uid/bookmarks/:bid', function(req, res) {
    const uid = req.params.uid;
    const bid = req.params.bid;
    res.send(users[uid].bookmarks[bid]);
});

// get all bookmarks
router.post('/:uid/bookmarks', function(req, res) {
    const uid = req.params['uid'];
    let addbookmarks = {
        "is_visible": req.body.is_visible,
        "hotels_id": req.body.hotels_id
    };
    users[uid]['bookmarks'].push(addbookmarks);
    bookmarks.push(addbookmarks);
    res.setHeader('content-type', 'application/json');
    res.status(200).send(users[uid]['bookmarks']);
});
module.exports = router;