const db = require("./query_file/employee");
const inquirer = require("inquirer");

async function addEmployee() {
  var roles = await db.getRoles();
  console.log(roles);
  var employee = inquirer.prompt([{
    type: "input",
    name: "firstName",
    message: "What is the employees first name?"
  }, {
    type: "input",
    name: "lastName",
    message: "What is the employees last name?"
  }, {
    type: "list",
    name: "role",
    message: "What is the employees role?",
    choices: [{ name: "Marketing", value: "1" }, { name: "Sales", value: "2" },
    { name: "HR", value: "3" }, { name: "Accounting", value: "4" }]
  }
  ])
}

function init() {
  inquirer.prompt([{
    type: "list",
    message: "What would you like to do?",
    name: "value",
    choices: [{ name: "Add an employee", value: "addEmployee" }, { name: "Add an employee", value: "addEmployee" },
    { name: "Add an employee", value: "addEmployee" }, { name: "Add an employee", value: "addEmployee" },
    { name: "Add an employee", value: "addEmployee" },{ name: "Add an employee", value: "addEmployee" }]
  }]).then(function (choices) {
    //   if (choices){
    //     return (addEmployee())
    // }
    switch (choices.value) {
      case "addEmployee":
        addEmployee();
        break;
      default:
        console.log("that was not an option.")
    }
  })
}

init();

