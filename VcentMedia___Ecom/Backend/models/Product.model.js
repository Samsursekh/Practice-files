const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name : {String, require: true},
    type : {String, require: true},
    description : {String, require: true},
    price : Number,
    image : {String, require: true},
    userID :{String, require: true},
})

const ProductModel = mongoose.model("product", productSchema)

module.exports = {
   ProductModel
}

/*
{
  name: 'Bata',
  description: 'Very comfertiable',
  price: '4500',
  image: 'https://thumbs.dreamstime.com/b/blue-shoes-29507491.jpg'
}
 */