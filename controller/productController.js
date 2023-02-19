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



// get Product -- for admin

exports.getAllProducts= async(req,res)=>{
    try {
        const product = await Product.find()
    res.status(200).json({
        success: true,
        product
    });
    } catch (error) {
        res.status(500).send(error.message);
    }

}


// update Product -- for admin


exports.updateProducts= async(req,res,next)=>{
    let product =await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success: false,
            message:"Product Not Found."
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });

      res.status(200).json({
        success: true,
        product,
      });

      next();

}