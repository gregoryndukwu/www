/**
 * AccountDAO.js
 */
 "use strict";
 

// const { getProducts } = require("../../Controller/productController");;
const Account = require("../../model/account")
// TODO USE ES6 class syntax

const accountDAO = (function(){
    const accounts=[];
        accounts.push(new Account(null,'01-123-7894', "Gregory Augusto",'Loan'));
        accounts.push(new Account(null,'01-123-7894', "Eduardo Barroca",'Savings'));
        accounts.push(new Account(null,'01-123-7894', "Obinna Kalu",'Checkings'));
    const getAccounts = function(){
        
        return accounts;
    }

    /*
    const getHotDeals = function(){
        const filteredProducts=products.filter(p => p.unitPrice <1000);
        console.log(filteredProducts);
        return filteredProducts;

    } */
    // return{
    //     getProducts :getProducts
    // }

const saveAccounts = function(account){

   //products.push(new Product(null,1001, "Apple Iphone15",1900));
    accounts.push(new Account(null, account.accountNo, account.accountName, account.accountType));
}
return {
    getAccounts:getAccounts,
    saveAccounts:saveAccounts
   // getHotDeals:getHotDeals
}
}) ();

module.exports = accountDAO;