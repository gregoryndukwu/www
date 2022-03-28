/**
 * home.js
 */
 "use strict";

 const express = require("express");
 const path = require("path");
 const homeRouter = express.Router();

 //Home Pages 

 homeRouter.get("/", (req, res, next) => {
    console.log(`Presenting homepage 1`);
    res.sendFile(path.join(__dirname, "../../views", "index.html"));
});

module.exports = homeRouter;
