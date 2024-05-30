// function add(a,b){
//     return a+b;
// }

// let result = add(5,4);
// console.log("result is : "+ result);


// ----- CALL BACK FUNCTION ------------

// function callback(){                                       // 1 tarikka
//     console.log("call back run successfully. ");
// }

// function add(a,b,as){
//     let result = a + b;
//     console.log(result);
//     as();
// }

// add(3242,6, () => { console.log("add completed")});           // 2 tarika


//------------- core libraries

// var fs = require('fs');
// var os = require('os');
// var note = require('./note.js');
// var _ = require('lodash');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', '/n hi '+ user.username , ()=> {console.log("thats it")});

// console.log("server file is ready")

// var age = note.age;
// console.log(age)

// var addu = note.add(age+2,4);
// console.log(addu);

// var data = ["rohan",2,1,3,1,3,2,"rohan","uu","uu"];
// var filter = _.uniq(data);
// console.log(filter);

const express = require('express')
const app = express()
const db = require('./db')

const bodyparser = require('body-parser');
app.use(bodyparser.json());

const person = require('./models/person');
const MenuItem = require('./models/MenuItem');

app.get('/', function (req, res) {
    res.send('welcome to my hotel')
})

// app.post('/person', (req, res)=>{                     //--- this is old method which is not working now
//     const data = req.body

//     // craete a new person document using mongoose model
//     const newperson = new person(data);

//     // save the new person to the server
//     newperson.save((error, savedperson)=>{
//         if(error){
//             console.log('error saving person:', error);
//             res.status(500).json({error: 'internal server error'})
//         }else{
//             console.log('data saved successfully');
//             res.status(200).json(savedperson);
//         }
//     })
// }) 

// app.post('/person', async (req, res) => {                     //--- this is new method  
//     try {
//         const data = req.body

//         // craete a new person document using mongoose model
//         const newperson = new person(data);

//         // save the new person to the server
//         const response = await newperson.save();
//         console.log('data saved \n');
//         res.status(200).json(response);

//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'internal server error' });
//     }
// })

// app.get('/person', async (req, res) => {
//     try {
//         const data = await person.find();
//         console.log('data fetched..');
//         res.status(200).json(data);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'internal server error' });
//     }
// })

// app.get('/person/:workType', async (req, res) => {
//     try {
//         const workType = req.params.workType;
//         if (workType == 'Chef' || workType == 'waiter' || workType == 'manager') {
//             const response = await person.find({ work: workType });
//             console.log("response Fetched..");
//             res.status(200).json(response);

//         } else {
//             res.status(404).json({ error: 'Invalid workType' });
//         }
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'internal server error' });
//     }
// })

// app.post('/menu', async (req, res) => {
//     try {
//         const data = req.body

//         // craete a new person document using mongoose model
//         const newmenuitem = new MenuItem(data);

//         // save the new person to the server
//         const response = await newmenuitem.save();
//         console.log('data saved \n');
//         res.status(200).json(response);

//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'internal server error' });
//     }
// })

// app.get('/menu', async (req, res) => {
//     try {
//         const data = await MenuItem.find();
//         console.log('data fetched..');
//         res.status(200).json(data);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'internal server error' });
//     }
// })


const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes);
const menuRoutes = require('./routes/menuRoutes')
app.use('/menu', menuRoutes);
git 

app.listen(3000, () => {
    console.log("The server port is 3000")
})
