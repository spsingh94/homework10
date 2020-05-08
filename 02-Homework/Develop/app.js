const db = require("./query_file/employee");
const inquirer = require("inquirer");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "kansascity41",
//     database: "employee_db"
//   });
  
//   connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected!");
//   });

  
 async  function addEmployee(){
var roles = await db.getRoles();
console.log(roles);
    var employee = inquirer.prompt([{
      type: "input",
      name: "firstName",
      message: "What is the employees first name?"
    },{
      type: "input",
      name: "lastName",
      message: "What is the employees last name?"
    },{
      type: "list",
      name: "role",
      message: "What is the employees role?",
      choices: [{name: "sales", value: "1"}]
    }
  ])
    // await db.createEmployee(employee);
    // console.log("employee created");
  }

  function init(){
    inquirer.prompt([{
      type: "list",
      message: "What would you like to do?",
      name: "value",
      choices: [{name: "Add an employee", value: "addEmployee"}]
    }]).then(function(choices){
    //   if (choices){
    //     return (addEmployee())
    // }
    switch (choices.value){
      case "addEmployee":
        addEmployee();
        break;
      default:
        console.log("that was not an option.")
    }
    })
  }

  init();

