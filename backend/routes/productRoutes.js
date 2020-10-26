import express from 'express'
// Middleware
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Product from '../models/productModel.js'


// @desc    Fetchs all products. Creates an api route to products. A response will GET a json array of products.
// @route   GET /api/products
// @access  Public
router.get("/", asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
}));


// @desc    Creates a route to product by id.	
// import product by id; For each product, that is equal to product by id, 
// find product by request, params, by id.
// A response will FETCH an single json object of const product, by id.
// @route   GET /api/products/:id
// @access  Public
router.get("/:id", asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    
    if(product){
       	res.json(product);
    } else {
        res.status(404)
        throw new Error('Product not found.')
    }
})
);


export default router