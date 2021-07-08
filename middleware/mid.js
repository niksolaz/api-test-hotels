const jwt = require('./jwt');

const checkOut = (req, res, next) => {
    try {
        if (req.headers['authorization'] == undefined) {
            res.sendStatus(401);
        } else {
            let token = req.headers['authorization'];
            token = token.slice(7, token.length);
            jwt.checkToken(token);
            next();
        }
    } catch (e) {
        console.log(e.message);
        res.sendStatus(401);
    }
}

module.exports = {
    checkOut
};