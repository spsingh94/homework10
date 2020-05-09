-- seed contains fake data to work with

USE employee_db;

INSERT INTO department (name) VALUES ("marketing"), ("sales"), ("hr"), ("accounting");

INSERT INTO role (title, salary, department_id) VALUES
("chief marketing officer", 150000.00, 1), 
("director of marketing", 130000.00, 1), 
("marketing analyst", 100000.00, 1), 
("marketing manager", 80000.00, 1), 
("marketing specialist", 65000.00, 1), 

("sales manager", 80000.00, 2), 
("sales assitant manager", 65000.00, 2), 
("sales supervisor", 50000.00, 2), 
("sales specialist", 40000.00, 2),

("hr director", 100000.00, 3), 
("hr manager", 85000.00, 3), 
("hr professional", 70000.00, 3), 
("hr intern", 0.00, 3), 

("senior accountant", 100000.00, 4), 
("accountant", 85000.00, 4),  
("financial analyst", 70000.00, 4), 
("payroll specialist", 50000.00, 4),
("bookkeeper", 40000.00, 4)

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
("Bob", "Baker", 1, 0),
("Robert", "Bun", 2, 1),
("John", "Walsch", 3, 2),
("Abraham", "Waheed", 4, 3),
("Jim", "Sung", 5, 4),
("Jane", "Hager", 6, 0),
("Joshua", "Rodman", 7, 6),
("Karen", "Rodriguez", 8, 7),
("Jeffrey", "Blitz", 9, 8),
("Todd", "Grant", 10, 0),
("Randy", "Ladd", 11, 10),
("Connor", "O'Brien", 12, 11),
("Katherine", "White", 13, 12),
("John", "Brady", 14, 0),
("Holly", "Harp", 15, 14),
("Bethanie", "Kaiser", 16, 15),
("Andy", "Cooper", 17, 16)