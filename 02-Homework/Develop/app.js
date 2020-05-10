const db = require("./query_file/employee");
const inquirer = require("inquirer");

//add func
async function addEmployee() {
  var roles = await db.getRoles();
  // console.log(roles);
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
    choices: [
      { name: "Marketing", value: "1" },
      { name: "Sales", value: "2" },
      { name: "HR", value: "3" },
      { name: "Accounting", value: "4" }
    ]
  }
  ]).then(function (res) {
    insertEmployee(res);
  });
};
function insertEmployee(data) {
  db.connection.query(
    "INSERT INTO employee SET ?",
    {
      first_name: data.firstName,
      last_name: data.lastName,
      role_id: data.role
    },
    function (err, res) {
      if (err) throw err;
    }
  )
}
//add func

// view func
async function viewEmployee() {
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
    choices: [
      { name: "Marketing", value: "1" },
      { name: "Sales", value: "2" },
      { name: "HR", value: "3" },
      { name: "Accounting", value: "4" }
    ]
  }
  ])
}
// view func

// update func
async function viewEmployee() {
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
    choices: [
      { name: "Marketing", value: "1" },
      { name: "Sales", value: "2" },
      { name: "HR", value: "3" },
      { name: "Accounting", value: "4" }
    ]
  }
  ])
}
//update func

//initiating func
function init() {
  inquirer.prompt([{
    type: "list",
    message: "What would you like to do?",
    name: "value",
    choices: [
      { name: "Add an employee", value: "addEmployee" },
      { name: "View all employees", value: "viewEmployee" },
      { name: "Update an employee role", value: "updateEmployee" }
    ]
  }]).then(function (choices) {
    switch (choices.value) {
      case "addEmployee":
        addEmployee();
        break;
      case "viewEmployee":
        viewEmployee();
        break;
      case "updateEmployee":
        updateEmployee();
        break;
      default:
        console.log("that was not an option.")
    }
  })
}

init();

