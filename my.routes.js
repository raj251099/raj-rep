const router = require('express').Router();
const productSchema = require("../mymodels/my.models");

// add product api for admin
router.post('/addProduct', async(req,res)=>{
    try{
        let detail = req.body
        const data = new productSchema(detail);
        const result = await data.save();
        return res.status(200).json({'status': 'success', "message": "Product details added successfully", "result": result})
    }catch(error){
        console.log(error.message);
        return res.status(400).json({"status": 'failure', 'message': error.message})
    }
});

// get all product api for user
router.get("/getAllProducts", async(req,res)=>{
    try{
        const productDetails = await productSchema.find().exec();
        if(productDetails.length > 0){
            return res.status(200).json({'status': 'success', message: "Product details fetched successfully", 'result': productDetails});
        }else{
            return res.status(404).json({'status': 'failure', message: "No Product details available"})
        }
    }catch(error){
        console.log(error.message);
        return res.status(400).json({"status": 'failure', 'message': error.message})
    }
});

// get individual product details
router.get("/getIndiProd", async(req,res)=>{
    try {
        const productDetails = await productSchema.findOne({"uuid" : req.query.product_uuid}).exec();
        if(productDetails){
            return res.status(200).json({'status': 'success', message: "Product details fetched successfully", 'result': productDetails});
        }else{
            return res.status(404).json({'status': 'failure', message: "No Product details available"})
        }
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({"status": 'failure', 'message': error.message})
    }
});

// update the product details api call
router.put("/updateTheProduct", async(req,res)=>{
    try {
        let condition = {"uuid": req.body.uuid}
        let updateData = req.body.updateData;
        let option = {new: true}
        const data = await productSchema.findOneAndUpdate(condition, updateData, option).exec();
        return res.status(200).json({'status': 'success', message: "Product details updated successfully", 'result': data});
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({"status": 'failure', 'message': error.message})
    }
});

// delete product details api call
router.delete("/deleteTheProductDetail/:product_uuid", async(req,res)=>{
    try {
        console.log(req.params.product_uuid)
        await productSchema.findOneAndDelete({uuid: req.params.product_uuid}).exec();
        return res.status(200).json({'status': 'success', message: "Product details deleted successfully"});
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({"status": 'failure', 'message': error.message})
    }
})

module.exports = router;