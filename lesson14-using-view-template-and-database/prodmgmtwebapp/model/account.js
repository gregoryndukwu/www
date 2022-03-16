/**
 * Account.js
 */
 "use strict";

 function Account(accountId,accountNo,accountName,accountType){
     this.accountId = accountId;
     this.accountNo = accountNo;
     this.accountName = accountName;
     this.accountType = accountType;
 }

 module.exports = Account;