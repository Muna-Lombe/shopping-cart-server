// SHOULD ONLY INCLUDE APP FACE 
// AND SEND ALL FUNCTIONALITY REQUESTS TO CONTROLLER

// IMPORTS AND REQUIREDS
// const readline = require('readline');
// import { debugPort } from 'process';
import * as readline from 'readline';
import * as express from 'express';
import {ShoppingCart, Product} from '../controllers/shoppingCart.js';

// INITIALISATIONS
const kart = new ShoppingCart;
const prds = [{name:'cake',price: '12'}, {name: 'pizza', price:'19'},{name: 'bread', price:'10'}];
let store = prds.map((prd) => new Product(prd));
const iFace = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const inquire = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



  
  

// const app = express.application
// app.
function showProducts(){
    console.log('\n////////////Products///////////');
    store.forEach((prd,idx) => console.log(`${idx+1}. ${prd.name} ---$${Number.parseInt(prd.price)}\n`)) 
    // console.log('\nPick an action: 1. select item \n2. add an item to cart \n3. quit kart');

}

function showProductDetails(prdID){
    const item = store[Number.parseInt(prdID) - 1]
    console.log(`\n////////////${item.name}/////////// \n`);
    console.log(`${item.name}`)
    console.log('actions\n')

    
}
function addToKart(){
    inquire.question(`What do you want to add to kart? \n Type the item number and tap enter \n`, response => {
       
        if (Number.parseInt(response) > 0) {
            const prd = store[Number.parseInt(response) - 1];
            kart.add(prd);
            // inquire.pause();

    
            return console.log(kart.all())

            // res = response;
        }
        else {
            console.log('That item number does not exist.. \n Please try again.\n \n');
            // inquire.close()
            getInput();

        }
    })
}

function StartKart(){
    console.log('\nWelcome to the Kart, shopping on wheels!')
    iFace.setPrompt('\nCruise around, pick what you like \n')
    // iFace.prompt()
    var close = false
    
    
    iFace.question( showProducts(), response=> {
        console.log('is ud?:', response)
        // iFace.pause()
        if(response === 'close'|| 'q' || Number.parseInt(0)) {
            iFace.close()
        }else if(response === Number.parseInt(1)){
            showProducts()
            addToKart()
        }else{
            console.log('looks like you didn\'t choose an option')
        }
    })    

    
   
    // console.log('\nWelcome to the Kart, shopping on wheels!')
    // console.log('Cruise around, pick what you like')
    // connect cart
    // console.log(kart)
    // show list of products in store
    // show list of actions for store

    // inquire.question('what now?')
    // if showing cart
    // show list of items in cart
    // show list actions for cart

}


StartKart();

