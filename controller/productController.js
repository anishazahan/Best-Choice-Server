const Product = require("../models/productModel")



// Create Product -- for admin

exports.createProduct = async (req,res,next)=>{

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product,
      });

      next();
}


exports.getAllProducts= async(req,res)=>{
    try {
        const product = await Product.find()
    res.status(200).json(product);
    } catch (error) {
        res.status(500).send(error.message);
    }

}