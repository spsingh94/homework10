const employee = require("./query_file/employee");
// const department = require("./query_file/department");
// const role = require("./query_file/role");
const inquirer = require("inquirer");
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "vodo345",
    database: "employee_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected!");
  });


