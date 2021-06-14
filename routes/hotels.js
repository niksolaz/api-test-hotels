const express = require('express');
const router = express.Router();
const { users, hotels, reviews } = require('../data/fakedata');

/**
 * Url for Hotels
 */
// get all hotels
router.get('/', function(req, res) {
    res.send(hotels);
});

// get one hotel
router.get('/:hid', function(req, res) {
    const hid = req.params['hid'];
    if (hotels[hid] !== undefined) {
        res.send(hotels[hid]);
    } else {
        res.status(404).send('Hotels Not Found');
    }
});

// add new hotel
router.post('/', function(req, res) {
    let addHotels = {
        "name": req.body.name,
        "reviews": [],
        "menus": []
    };
    hotels.push(addHotels);
    res.setHeader('content-type', 'application/json');
    res.status(200).send(hotels);
});

// update hotel
router.put('/:hid', function(req, res) {
    const hid = req.params['hid'];
    hotels[hid] = {
        "name": req.body.name,
        "reviews": [],
        "menus": []
    };
    res.send(hotels[hid]);
});

// delete hotel
router.delete('/:hid', function(req, res) {
    const hid = req.params['hid'];
    let idx = hotels.indexOf(hotels[hid]);
    if (idx > -1) {
        hotels.splice(idx, 1);
    }
    res.send(hotels);
});

/**
 * Url for Reviews
 */
// get all review
router.get('/:hid/reviews', function(req, res) {
    const hid = req.params['hid'];
    hotels[hid].reviews = reviews;
    res.send(hotels[hid].reviews);
});

// get single review
router.get('/:hid/reviews/:rid', function(req, res) {
    const hid = req.params['hid'];
    const rid = req.params['rid'];
    res.send(hotels[hid].reviews[rid]);
});

// add review
router.post('/:hid/reviews', function(req, res) {
    const hid = req.params['hid'];
    let addReviews = {
        "hotels_id": req.body.hotels_id,
        "users_id": req.body.users_id,
        "message": req.body.message
    };
    (hotels[hid].reviews).push(addReviews);
    res.setHeader('content-type', 'application/json');
    res.status(200).send(hotels[hid].reviews);
});

// update single review
router.put('/:hid/reviews/:rid', function(req, res) {
    const hid = req.params['hid'];
    const rid = req.params['rid'];
    hotels[hid].reviews[rid] = {
        "hotels_id": req.body.hotels_id,
        "users_id": req.body.users_id,
        "message": req.body.message
    }
    res.send(hotels[hid].reviews[rid]);
});

// delete single review
router.delete('/:hid/reviews/:rid', function(req, res) {
    const hid = req.params['hid'];
    const rid = req.params['rid'];
    let idx = hotels.indexOf(hotels[hid].reviews[rid]);
    if (idx > -1) {
        (hotels[hid].reviews).splice(idx, 1);
    }
    res.send(hotels[hid].reviews);
});

/**
 * Url for Menu
 */
// get all menu
router.get('/:hid/menus', function(req, res) {
    const hid = req.params['hid'];
    res.send(hotels[hid]['menus']);
});

// get single menu
router.get('/:hid/menus/:mid', function(req, res) {
    const hid = req.params['hid'];
    const mid = req.params['mid'];
    res.send(hotels[hid]['menus'][mid]);
});

// add menu
router.get('/:hid/menus', function(req, res) {
    const hid = req.params['hid'];
    let addMenus = {
        "description": req.body.description,
        "price": req.body.price
    };
    (hotels[hid].menus).push(addMenus);
    res.setHeader('content-type', 'application/json');
    res.status(200).send(hotels[hid]['menus']);
});

// update menu
router.get('/:hid/menus/:mid', function(req, res) {
    const hid = req.params['hid'];
    const mid = req.params['mid'];
    hotels[hid].menus[mid] = {
        "description": req.body.description,
        "price": req.body.price
    };
    res.setHeader('content-type', 'application/json');
    res.status(200).send(hotels[hid]['menus']);
});

// delete menu
router.get('/:hid/menus/:mid', function(req, res) {
    const hid = req.params['hid'];
    const mid = req.params['mid'];
    let idx = hotels.indexOf(hotels[hid].menus[mid]);
    if (idx > -1) {
        (hotels[hid].menus).splice(idx, 1);
    }
    res.send(hotels[hid].menus);
});

module.exports = router;