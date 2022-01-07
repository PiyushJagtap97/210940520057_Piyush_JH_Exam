const mysql = require("mysql");
const Promise = require ("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "project1",
  };
 const addmessage = async(message) => {
     const connection = mysql.createConnection(dbinfo);
     await connection.connectasync();
      let sql = `insert into message value (?)`;
      await connection.queryasync();
 };

 const message= {
     messagebody:"Hello im Piyush"
 };
 

 const showmessage= async() => {
     const connection = mysql.createConnection(dbinfo);
     await connection.connectasync();

     let sql =`select * from message`;
     let list = await connection.queryasync(sql);
     console.log(list);
     await connection.endasync();

 };

 showmessage();