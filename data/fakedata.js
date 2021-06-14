var users = [{
    "firstname": "Nicola",
    "lastname": "Solazzo",
    "email": "nicola@test.com",
    "bookmarks": []
}];
var hotels = [{
    "name": "Palace Hotel",
    "reviews": [],
    "menus": []
}];
var bookings = [{
    "_hid": 0,
    "_uid": 0,
    "_users": users[0],
    "_hotels": hotels[0],
    "amount": 50
}];
var transactions = [{
    "hotel": bookings[0]['_hotels']['name'],
    "user": bookings[0]['_users']['firstname'] + " " + bookings[0]['_users']['lastname'],
    "amount": bookings[0]['amount'],
    "payment_type": "credit card",
    "status": "pending"
}];
var bookmarks = [{
    "is_visible": true,
    "hotels_id": 0
}];
var reviews = [{
    "hotels_id": 0,
    "users_id": 0,
    "message": "Lorem ipsum ..."
}];

module.exports = {
    users,
    hotels,
    bookings,
    transactions,
    bookmarks,
    reviews
};