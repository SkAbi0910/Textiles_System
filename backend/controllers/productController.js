import Product from "../models/productModel.js";

export const addProduct=async(req,res)=>{
    try{
       
        const productData =JSON.parse(req.body.productData);
        const images =req.files;
        let imageUrls =await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{
                    resource_type:"image",});
                    return result.secure_url;
            }
        )
    )

    await Product.create({
        ...productData,image:imageUrls
    });
    res.status(201).json({
        success:true,
        message:"Product added successfully"
    })
    }catch(err){
        res.status(500).json({
            success:false,
            message:"Error adding product"
        });
    }

}  

export const listProduct=async(req,res)=>{
    try{

        const products = await Product.find({});
        res.status(200).json({
            success:true,
            products
        })

    }catch(err){

        res.status(500).json({
            success:false,
            message:"Error fetching products"
        });

    }

}



export const singleProduct=async(req,res)=>{
    try{

const {productId} = req.body;
const product = await Product.findById(productId);
res.status(200).json({
    success:true,
    product
})

    }catch(err){
        res.status(500).json({
            success:false,
            message:"Error fetching product"
        });

    }

}

export const changeStock =async(req,res)=>{
    try{
        const {productId,inStock} = req.body;
        await Product.findByIdAndUpdate(productId,{inStock},{new:true});
        res.status(200).json({
            success:true,
            message:"Product stock updated successfully"
        })
    }
    
    catch(err){
        res.status(500).json({
            success:false,
            message:"Error updating product stock"
        });

    }
}

 export const deleteProduct=async(req,res)=>{
    try{
        const {productId} = req.body;
        await Product.findByIdAndDelete(productId);
        res.status(200).json({
            success:true,
            message:"Product deleted successfully"
        })


    }catch(err){
        res.status(500).json({
            success:false,
            message:"Error deleting product"
        });

    }

}