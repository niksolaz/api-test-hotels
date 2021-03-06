const express = require('express');
const jwt = require('../middleware/jwt')
const router = express.Router();

require('dotenv').config();

router.post('/', (req, res) => {
    if (req.body.username == process.env.USERNAME) {
        let token = jwt.setToken(2, req.body.username);
        var payload = jwt.getPayload(token);
        res.json({
            token: token,
            payload: payload
        });
        console.log({
            token: token,
            payload: payload
        })
    } else {
        res.sendStatus(401);
    }
})
module.exports = router;