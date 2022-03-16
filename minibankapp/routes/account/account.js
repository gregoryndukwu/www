/**
 * home.js
 */
 "use strict";

 const express = require("express");
 const path = require("path");
 const accountRouter = express.Router();
 const accountController = require("../../controller/accountController");
 //Account Pages 

 // Define routes for product pages
accountRouter.get("/list", async (req, res, next) => {
    console.log(`Presenting list of Account page`);
    const accounts = await accountController.getAccount(req, res);
    console.log(accounts);
    res.locals = {accounts: accounts};
    res.render("account.pug");
   
});

//accountRouter.get("/new", (req, res, next) => {
//    res.sendFile(path.join(__dirname, "../../views", "account.html"));
//});

accountRouter.post("/new", async (req, res, next) => {
    const result = await accountController.addNewAccount(req, res);
    res.redirect(303, "/account/list");
});
 /*
 accountRouter.get("/account.html", (req, res, next) => {
    console.log(`Account Form`);
    res.sendFile(path.join(__dirname, "../../views", "account.html"));
});*/

module.exports = accountRouter;