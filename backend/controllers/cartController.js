import User from '../models/userModel.js';


export const addToCart = async (req, res) => {
    try {
        const{itemId,size} = req.body;
        const userId = req.userId;

        const userData = await User.findById(userId);
        const cartData =await userData.cartData;

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }

        else{

            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await User.findByIdAndUpdate(userId,{cartData:cartData});

        res.status(200).json({message:"Item added to cart successfully",cartData:cartData});
    } catch (error) {
        console.error("Error adding item to cart:", error);
        res.status(500).json({message:"Internal server error"});
    }
}


export const updateCart = async(req,res)=>{

    try{
        const{itemId,size,quantity} = req.body;
        const userId = req.userId;

        const userData = await User.findById(userId);
        const cartData = await userData.cartData;

        cartData[itemId][size] = quantity;
        await User.findByIdAndUpdate(userId,{cartData:cartData});

        res.status(200).json({message:"Cart updated successfully",cartData:cartData});

    }
    catch(error){
        console.error("Error updating cart:", error);
        res.status(500).json({message:"Internal server error"});


    }
}