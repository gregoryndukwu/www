/**
 * account.js
 */
 "use strict";

 const express = require("express");
 const accountAPIRouter = express.Router();
 
 const accountController = require("../../controller/accountController");
 
 accountAPIRouter.get("/list", async (req, res) => {
     const accounts = await accountController.getAccount(req, res);
     res.json(accounts);
 });
 
 module.exports = accountAPIRouter;