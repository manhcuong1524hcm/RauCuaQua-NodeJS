const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete') 


const Schema = mongoose.Schema;


const products = new Schema({
    ten: { type: String, required: true },
    gia: { type: String, required: true },
    img: { type: String, required: true },
    moTa: { type: String},
    soLuong: { type: String, required: true},
    slug:{ type: String, slug: 'ten', unique: true},
  },{
    timestamps: true,
  })
mongoose.plugin(slug);
products.plugin(mongoose_delete, { 
  deletedAt: true, 
  overrideMethods: true
})

module.exports = mongoose.model('products', products)