const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

router.post('/', async (req, res) => {
    try {
        const data = req.body

        // craete a new person document using mongoose model
        const newmenuitem = new MenuItem(data);

        // save the new person to the server
        const response = await newmenuitem.save();
        console.log('data saved \n');
        res.status(200).json(response);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched..');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
})

router.get('/:taste', async (req, res) => {
    try {
        const tasteTypee = req.params.tasteTypee;
        if (tasteTypee == 'Sweet' || tasteTypee == 'Spicy' || tasteTypee == 'Sour') {
            const response = await MenuItem.find({ taste: tasteTypee });
            console.log("response Fetched..");
            res.status(200).json(response);

        } else {
            res.status(404).json({ error: 'Invalid tasteTypee' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
})

router.put('/:id', async (req , res)=>{
    try{
        const menuId = req.params.id;
        const updatedMenuData = req.body;

        const response = await MenuItem.findByIdAndUpdate(menuId, updatedMenuData, {
            new: true,
            runValidators: true
        })

        if(!response){
            return res.status(404).json({error: 'item Not Found..'});
        }

        console.log("data Updated");
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
})

router.delete('/:id', async (req , res)=>{
    try{
        const menuId = req.params.id;

        const response = await MenuItem.findByIdAndDelete(menuId); 

        if(!response){
            return res.status(404).json({error: 'item Not Found..'});
        }

        console.log("data deleted ");
        res.status(200).json({message: 'item deleted successfully..'});
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
})
module.exports = router;