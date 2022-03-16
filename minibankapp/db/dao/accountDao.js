/**
 * productDAO.js
 */
 "use strict";

 const dbConectionMgr = require("../dbconnectionmgr");
 const dbConnectionMgr = require("../dbconnectionmgr");

const accountDAO = (function(){

    const getAccount = async function(){
        const qryStrGetAccount = "SELECT * FROM accountdb.accounttable;"
        try {

            const dbConnection = dbConnectionMgr.getConnection();
            const [accounts]   = await dbConnection.promise().query(qryStrGetAccount);
            return accounts;
        }catch(error){
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    };

    const saveAccount = async function(account) {
        const cmdStrSaveAccount = `insert into accounttable (accountNo, accountName, accountType) values ('${account.accountNo}','${account.accountName}','${account.accountType}')`;
        try {
            const dbConnection = dbConectionMgr.getConnection();
            const saveOpResult = await dbConnection.promise().execute(cmdStrSaveAccount);
            return saveOpResult;
        } catch(error){
            console.log(`DB Access Error: ${error}`);
            throw error;
        }
    }

    return {
        getAccount: getAccount,
        saveAccount: saveAccount
    }

})();

module.exports = accountDAO;