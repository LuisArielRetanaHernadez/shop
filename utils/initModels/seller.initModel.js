const { seller } = require('../../models/seller.model')
const { product } = require('../../models/product.model')
const { address } = require('../../models/address.model')

const initSeller = () => {
    // seller 1 <--> M product
    seller.hasMany(product)
    product.belongsTo(seller)

    // seller 1 <--> 1 address
    seller.hasOne(address)
    address.belongsTo(seller)
}