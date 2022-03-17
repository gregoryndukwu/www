/**
 * accountController.js
 */
 "use strict";

 const accountDAO = require("../db/dao/accountDao");
 const Account = require("../model/account");

 const accountController = (function(){

    const getAccounts = function(req,res) {
        try {
            const accounts = accountDAO.getAccounts();
            console.log(`Controller: Account list: ${accounts}`);
            return accounts;
        } catch (error) {
            res.status(500);
            res.render("50x",{error: error});
        }
    };
   /* const getHotDeals = function(req,res) {
        try {
            const products = productDAO.getHotDeals();
            console.log(`Controller: Product list: ${products}`);
            return products;
        } catch (error) {
            res.status(500);
            res.render("50x",{error: error});
        }
    }; */
    const addNewAccount = function(req, res){
        const account = new Account(null,req.body.txtAccountNo, req.body.txtCustomerName,req.body.ddlAccountType);
        try {
            const opRes = accountDAO.saveAccounts(account);
            console.log(`Account Controler: Save Account output: ${opRes}`)
            return opRes;
        } catch (error) {
            res.status(500);
            res.render("50x",{error:error})
        }
    }
    return {
        getAccounts: getAccounts,
        addNewAccount:addNewAccount
        //getHotDeals:getHotDeals
    }
})();

module.exports = accountController;