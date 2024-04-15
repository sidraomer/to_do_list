#! /usr/bin/env node

// Currency Conversion CLI 

import inquirer from "inquirer";

const currency = {
    GBP : 0.80,
    EURO : 0.94,
    USD : 1,        // Conversion Currency or Base Currency
    PKR : 277.95,
    AED : 3.67,
}

let condition = true

while (condition) {

let amount : {
    curr1 : "GBP" | "EURO" | "USD" | "PKR" | "AED"
    curr2 : "GBP" | "EURO" | "USD" | "PKR" | "AED"
    num_1 : number
    other_Number : boolean
             }= await inquirer.prompt
(
    [
        {
            name: "curr1",
            message: "Choose the currency of your number:",
            type: "list",
            choices: [ "USD" , "PKR" , "EURO" , "AED" , "GBP" ]
        },
        {
            name: "curr2",
            message: "Choose the currency for conversion:",
            type: "list",
            choices: [ "USD" , "PKR" , "EURO" , "AED" , "GBP" ]
        },
        {
            name: "num_1",
            message: "Enter the amount to convert :",
            type: "number"
        },
        {
            name : "other_Number",
            message : "Do you want to change more or exit program?",
            type : "confirm",
        }
    ]
)

condition = amount.other_Number

 let fromAmount = currency[amount.curr1]

 let toAmount = currency[amount.curr2]   

 let number = amount.num_1 / fromAmount

let convert = number * toAmount
        
    console.log("Conversion from", amount.curr1, "to", amount.curr2, ": \n", amount.num_1, " => ", convert);
}