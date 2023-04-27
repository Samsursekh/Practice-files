const product = require("../model/Product.schema");

exports.productAddFunc = async(req, res) => {
   const {title, desc, price} = req.body;

   try {
      const productData = await product.create({...req.body});
      res.status(200).json(productData);
   } catch (error) {
     console.error(error)
   }
}

exports.getProductFunc = async(req,res) => {
try {
   const productData = await product.find();
   res.status(200).json(productData);
} catch (error) {
   console.error(error)
  }
}


exports.singleProduct = async(req,res) => {
   const { id } = req.params;
   try {
      const productData = await product.findById(id);
      res.status(200).json(productData);
   } catch (error) {
      console.error(error)
     }
 }

 exports.productUpdateFunc = async(req, res) => {
   const { id } = req.params;
   try {
   const {title, desc, price} = req.body;

      const productData = await product.findByIdAndUpdate( id, {...req.body}, {
         new : true 
      });
      res.status(200).json(productData);
   } catch (error) {
     console.error(error)
   }
}


exports.productDeleteFunc = async(req, res) => {
   const { id } = req.params;
   try {

      const productData = await product.findByIdAndDelete( id );
      res.status(200).json(productData);
   } catch (error) {
     console.error(error)
   }
}



