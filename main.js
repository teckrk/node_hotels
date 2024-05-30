const { count } = require('console');

var prompt = require('prompt-sync')();

// problem 1

// let age = prompt("enter your age :");
// if (age < 18) {
//     console.log("you got 20% Discount.");
// }else if( age >= 18 && age < 60 ){
//     console.log("you dont have any Discount.");
// }else {
//     console.log("you got 30% Discount.");
// }


// problem 2

// let l = prompt("enter length: ");
// let b = prompt("enter breadth: ");
// let area = l*b;
// console.log("the area is : " + area);

// problem 3

// const product1 = {
//     name: 'iphone 11',
//     price: 60000,
//     inStock: true
// }
// const product2 = {
//     name: 'iphone 12',
//     price: 80000,
//     inStock: true
// }
// const product3 = {
//     name: 'iphone 13',
//     price: 100000,
//     inStock: true
// }

// console.log(product2);
// console.log(product2.name);
// console.log(product1.price);
// console.log(product3.inStock);


// problem 4

// let guestList = ["rohan","rohit","mohit","akash","abhi"];

// let name = prompt("enter your name: ");
// let countt = 0;
// for(let i=0; i<guestList.length; i++){

//     if(name == guestList[i]){
//         console.log("welcome to the party "+ guestList[i]+ " sir");
//         break;
//     }else {
//         countt=countt+1;
//     }

//     if(countt == 5){
//         console.log("sorry sir you are not in the guest list");
//     }
// }


// problem 5
// Create a JSON object for the weather forecast
const weatherForecast = {
    date: "2024-05-23",
    temperature: 25, // temperature in Celsius
    conditions: "Sunny",
    humidity: 60 // humidity percentage
  };
  
  // Display the information using console.log
  console.log(weatherForecast);

  
  