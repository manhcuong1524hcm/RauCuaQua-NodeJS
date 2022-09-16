const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete') 


const Schema = mongoose.Schema;


const hoadonchitiet = new Schema({
    hoten: { type: String},
    email: { type: String},
    diachi: { type: String},
    sodienthoai: { type: String},
    tongtien: { type: String},
    status: { type: String},
    raucuquaID: { type: String},
    accountID: { type: String},
    
  },{
    timestamps: true,
  })
  
  hoadonchitiet.plugin(mongoose_delete, { 
    deletedAt: true, 
    overrideMethods: true
  })
module.exports = mongoose.model('hoadonchitet', hoadonchitiet)