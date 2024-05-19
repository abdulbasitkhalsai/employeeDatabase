// Difining Type
interface Employee {
    empID: number;
    empName: string;
    salary: number;
}

// Array of Employee
let collectionOfEmployees: Employee[] = [
    {
        empID: 1245,
        empName: "Ahmed",
        salary: 25000
    },
    {
        empID: 1256,
        empName: "Junaid Khan",
        salary: 50000
    }
];

let filterBySalary = collectionOfEmployees.filter((employee : Employee) => employee.salary > 9999);
let filterByEmpID = collectionOfEmployees.filter((employee : Employee) => employee.empID == 1245)
let filterByEmpName = collectionOfEmployees.filter((employee : Employee) => employee.empName.includes("Khan"));

console.log(filterBySalary[0].empName);
console.log(filterBySalary[1].empName);
console.log(filterByEmpID[0].empName);
console.log(filterByEmpName[0].empName);

