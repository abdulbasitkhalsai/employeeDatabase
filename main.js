//Employee Database
let collectionOfEmployees = [];
// Array of Employee
let employeeList = [
    {
        empID: 1245,
        empName: "Ahmed",
        salary: 25000
    },
    {
        empID: 1256,
        empName: "Junaid Khan",
        salary: 50000
    },
    {
        empID: 1254,
        empName: "Jamil",
        salary: 100000
    },
    {
        empID: 1297,
        empName: "Naseem",
        salary: 100000
    }
];
// let filterBySalary = collectionOfEmployees.filter((employee : Employee) => employee.salary > 9999);
// let filterByEmpID = collectionOfEmployees.filter((employee : Employee) => employee.empID == 1245)
// let filterByEmpName = collectionOfEmployees.filter((employee : Employee) => employee.empName.includes("Khan"));
// console.log(filterBySalary[0].empName);
// console.log(filterBySalary[1].empName);
// console.log(filterByEmpID[0].empName);
// console.log(filterByEmpName[0].empName);
//Add Employees in Employee database
for (let i = 0; i < 4; i++) {
    collectionOfEmployees.push(employeeList[i]);
}
;
console.log(collectionOfEmployees);
collectionOfEmployees.pop();
console.log(collectionOfEmployees);
//Modify Employee Database
function modifyDatabase(key, employee, value) {
    [collectionOfEmployees][employee][`${key}`] = value;
}
modifyDatabase("salary", 0, 9441161);
console.log(collectionOfEmployees);
// Edit Salary
function editSalary(Employee, salary) {
    collectionOfEmployees[Employee].salary = salary;
}
editSalary(1, 195000);
console.log(collectionOfEmployees);
// Update Salary
function updateSalary(increment) {
    for (let i = 0; i < collectionOfEmployees.length; i++) {
        collectionOfEmployees[i].salary += increment;
    }
}
updateSalary(5999);
export {};
// console.log(collectionOfEmployees);
// let a = await inquirer.prompt(
//     [
//     {
//         message: "Enter Employee Name",
//         name: "Employee Name",
//         type: "text",
//     },
//     {
//     } 
//     ]
// )
