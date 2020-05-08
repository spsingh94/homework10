//file made for organizing SQL functions
const mysql = require("mysql");
// class Employee {
//     constructor(name, department, role) {
//         this.name = name,
//             this.department = department,
//             this.role = role
//     }
//     //make functions for sql queries



//     getName() {
//         return this.name;
//     }
//     getDepartment() {
//         return this.department
//     }
//     getRole() {
//         return this.role
//     }
// }

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "kansascity41",
    database: "employee_db"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected!");
  });

class DB {
    // Keeping a reference to the connection on the class in case we need it later
    constructor(connection) {
        this.connection = connection;
    }
    // Find all employees, join with roles and departments to display their roles, salaries, departments, and managers
    findAllEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    }
    // Create a new employee
    createEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee);
    }
    getRoles(){
        return this.connection.query("SELECT * FROM role");
    }
}

module.exports = new DB(connection);

