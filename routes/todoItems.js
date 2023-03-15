const router = require('express').Router();

const todoItemModel = require('../models/todoItems')


router.post('/api/item',async (req,res)=>{
    try{
        const newItem = new todoItemModel({
            item:req.body.item
        })
        const saveItem = await newItem.save()
        res.status(200).json('Item Added Successfully');
    }catch(err){
        res.json(err);
    }
})

router.get('/api/item', async(req,res)=>{
    try{
        const allTodoItems = await todoItemModel.find({});
        res.status(200).json(allTodoItems)
    }catch(err){
        res.json(err);
    }
})

router.put('/api/item/:id', async(req,res)=>{
    try{
        const updateItem = await todoItemModel.findByIdAndUpdate(req.params.id, {$set: req.body});
        res.status(200).json('Item Updated');
    }catch(err){
        res.json(err);
    }
})

router.delete('/api/item/:id', async(req,res)=>{
    try{
        const deleteItem = await todoItemModel.findByIdAndDelete(req.params.id);
        res.status(200).json('Item Delete');
    }catch(err){
        res.json(err);
    }
})



module.exports = router;