const mysql = require('mysql');

const connection = () =>{    
  return  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin@123",
    database: "eshop",
    port: 3309,
    insecureAuth : true
});

}


module.exports = connection();