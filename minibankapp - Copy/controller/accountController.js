/**
 * accountController.js
 */
 "use strict";

 const accountDAO = require("../db/dao/accountDao");
 const Account = require("../model/account");

 const accountController = (function(){

    const getAccount = async function(req,res){
        try{
            const accounts = await accountDAO.getAccount();
            console.log(`Controller: Accounts list: ${accounts}`);
            return accounts;
        }catch(error){
            res.status(500);
            res.render("50x",{error: error});
        }
    };

    const addNewAccount = async function(req, res){
        const account = new Account(null,req.body.txtAccountNo, req.body.txtCustomerName, req.body.ddlAccountType);
        /*console.log(account.accountName);
        console.log(account.accountType);
        console.log(account.accountNo)*/
        try {
            const opRes = await accountDAO.saveAccount(account);
            console.log(`AccountController: Save Account: ${opRes}`);
            return opRes;
        }catch (error){
            res.status(500);
            res.render("50x", {error: error});
        }
    }

    return {
        getAccount: getAccount,
        addNewAccount: addNewAccount
    }
})();

module.exports = accountController;