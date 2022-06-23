// models
const { User } = require('../../models/user.model');
const { cart } = require('../../models/cart.model');
const { comments } = require('../../models/comments.model');
const { adress } = require('../../models/adress.model');
const { card } = require('../../models/card.model');

const initUser = () => {
    // User 1 <--> 1 Cart
    User.hasOne(cart);
    cart.belongsTo(User);

    // User 1 <--> M comments
    User.hasMany(comments);
    comments.belongsTo(User);

    // User 1 <--> M adress
    User.hasMany(adress);
    adress.belongsTo(User);

    // User 1 <--> M Card
    User.hasMany(card)
    card.belongsTo(User) 
}
