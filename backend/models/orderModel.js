import mongoose from "mongoose";

const orderSchema =new mongoose.Schema({

    userId:{
        type:String,
        required:true,
    },
   items:[{

    product:{
        type:String,
        required: true,
        ref: 'Product'
    },
    quatity:{
        type:Number,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
}],
    amount:{
        type:Number,
        required:true,
    },
    address:{
        type:Object,
        required:true,

    },
    status:{
        type:String,
        default:"order placed",
    },
    paymentMethod:{
        type:String,
        required:true,
    },
    isPaid:{
        type:Boolean,
        default:false,
        required:true,
    }





  
},{timestamps:true});

const Order=mongoose.model("Order",orderSchema);
export default Order;