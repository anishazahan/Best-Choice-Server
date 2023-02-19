const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("../middleware/catchAsyncErrors")



// Post Product -- for admin

exports.createProduct =catchAsyncError (
    async (req,res,next)=>{
        const product = await Product.create(req.body);
    
        res.status(201).json({
            success: true,
            product,
          });
    
        //   next();
    }
)



// get Product -- 

exports.getAllProducts= catchAsyncError( async(req,res)=>{
    try {
        const product = await Product.find()
      res.status(200).json({
        success: true,
        product
    });
    } catch (error) {
        res.status(500).send(error.message);
    }

})

 // get Product Details----

 exports.getProductDetails= catchAsyncError( async(req,res,next)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product Not Found",404));
    }
    // if(!product){
    //     return res.status(500).json({
    //         success: false,
    //         message:"Product Not Found."
    //     })
    // }

    res.status(200).json({
        success: true,
        product
      });

 });


// update Product -- for admin

exports.updateProducts=catchAsyncError( async(req,res,next)=>{
    let product =await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product Not Found",404));
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

    //   next();

})


// delete Product -- for admin
  
exports.deleteProduct=catchAsyncError( async(req,res,next)=>{

    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product Not Found",404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Product Delete Successfully",
      });

});