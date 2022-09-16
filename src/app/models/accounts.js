const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete') 


const Schema = mongoose.Schema;


const accounts = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String},
    hoten: { type: String, required: true},
    diachi: { type: String, required: true},
    sodienthoai: { type: String, required: true},
    email: { type: String},
    img: { type: String, required: true},
    
  },{
    timestamps: true,
  })
  accounts.plugin(mongoose_delete, { 
    deletedAt: true, 
    overrideMethods: true
  })

module.exports = mongoose.model('accounts', accounts)