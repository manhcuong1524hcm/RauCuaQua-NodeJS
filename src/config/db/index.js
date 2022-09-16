const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/RauCuQua-LamManhCuong', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Co Connect'); 
    } catch (error){
        console.log(' Khong Co Connect');
    }
}

module.exports = {connect}