import Product from "../models/productModel.js";
import Order from "../models/orderModel.js";



const currecy = "pkr";
const deliveryCharge = 10; // Static delivery charge
const taxPercentage = 0.02; // 10% tax

export const placeOrder = async (req, res) => {

    try{
        const {items,address}= req.body;
        const userId = req.userId;

        if(items.length===0){
            return res.status(400).json({message:"No items in the order"});
        }

        let subtotal = await items.reduce(async (acc,item)=>{

            const product = await Product.findById(item.product);
            return (await acc) + (product.offerPrice * item.quatity);
        },0)

        const taxAmount = subtotal * taxPercentage;
        const totalAmount = subtotal + taxAmount + deliveryCharge;

        await Order.create({
            userId:userId,
            items:items,
            amount:totalAmount,
            address:address,
            paymentMethod: "COD",
           
        });
        res.status(200).json({message:"Order placed successfully"});


    }catch(error){
        console.error("Error placing order:", error);
        res.status(500).json({message:"Internal server error"});
    }
}

export const placeOrderStripe = async(req,res)=>{

    try{




    }
    catch(error){


    }
}

export const userOrders = async(req,res)=>{

    try{
        const userId = req.userId;
        const orders = await Order.find({userId,$or: [{paymentMethod:"COD"},{isPaid:true}]}).populate("items.product").sort({createdAt:-1});
        res.status(200).json({orders});
    }
    catch(error){


        console.error("Error fetching user orders:", error);
        res.status(500).json({message:"Internal server error"});
    }



}

export const allOrders =async(req,res)=>{

    try{
        const orders = await Order.find({ $or: [{paymentMethod:"COD"},{isPaid:true}]}).populate("items.product").sort({createdAt:-1});
        res.status(200).json({orders});

    }catch(error){

        console.error("Error fetching all orders:", error);
        res.status(500).json({message:"Internal server error"});

    }



}


export const updateStatus = async(req,res)=>{


    try{

        const {orderId,status} = req.body;

        await Order.findByIdAndUpdate(orderId,{status:status});

        res.status(200).json({message:"Order status updated successfully"});
    }
    catch(error){

        console.error("Error updating order status:", error);
        res.status(500).json({message:"Internal server error"});
}

}