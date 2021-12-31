const mongoose =require('mongoose')

const itemSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true,"cant be blank"],
        min:6,
        max:100,
        unique:true,
        index:true

    },
    category:{
        type:String,
        required:[true,"cant be blank"],
        min:6,
        max:100


    },
    price:{
        type:String,
        required:[true,"cant be blank"],
        min:6,
        max:100


    },
    link:{
        type:String,
        required:[true,"cant be blank"],
        min:6,
        max:100,
        unique:true,
        index:true

    },
    description:{
        type:String,
        required:[true,"cant be blank"],
        min:6,
        max:100,
        unique:false
    }
})

itemSchema.plugin(require('mongoose-beautiful-unique-validation'));
const itemModel =mongoose.model('item',itemSchema)
module.exports=itemModel