const mongoose= require('mongoose');
const {Schema}= mongoose;

const productSchema= new Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]    //as it is array of strings
})

exports.Product= mongoose.model('Product', productSchema);