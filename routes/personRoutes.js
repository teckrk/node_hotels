const express = require('express');
const router = express.Router();
const person = require('./../models/person')

// Post route to add person
router.post('/', async (req, res) => {                     //--- this is new method  
    try {
        const data = req.body

        // craete a new person document using mongoose model
        const newperson = new person(data);

        // save the new person to the server
        const response = await newperson.save();
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
        const data = await person.find();
        console.log('data fetched..');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
})

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == 'Chef' || workType == 'waiter' || workType == 'manager') {
            const response = await person.find({ work: workType });
            console.log("response Fetched..");
            res.status(200).json(response);

        } else {
            res.status(404).json({ error: 'Invalid workType' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
})

 
router.put('/:id', async (req , res)=>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,
            runValidators: true
        })

        if(!response){
            return res.status(404).json({error: 'Person Not Found..'});
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
        const personId = req.params.id;

        const response = await person.findByIdAndDelete(personId); 

        if(!response){
            return res.status(404).json({error: 'Person Not Found..'});
        }

        console.log("data deleted ");
        res.status(200).json({message: 'person deleted successfully..'});
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'internal server error' });
    }
})

module.exports = router;