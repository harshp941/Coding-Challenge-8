// Task 1 Create Employee class 
class Employee {
    constructor(name,salary,position,department) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department
}
 getDeatils(){
    return `${this.name}, ${this.position}, Salary: $${this.salary}`
 }
}

// Task 2 Create a Department Class
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
addEmployee(employee) {
    this.employees.push(employee);
}
getDepartmentSalary() {
    return this.employees.reduce((total,em) => total + em.salary,0);
}
// This is Task 4
calculateTotalSalaryWithBonus() {
let totalSalary = this.getDepartmentSalary();
let totalBonus = this.employees
  .filter(emp => emp instanceof Manager)
  .reduce((total,manager) => total + manager.bonus,0);
return totalSalary + totalBonus
}
}

// Task 3 Create a Manager Class that Inherits from Employee
class Manager extends Employee {
    constructor(name,salary,position,department,bonus) {
        super(name,salary,position,department);
        this.bonus = bonus;
    }
    getDetails() {
        return `${this.name}, ${this.position}, Salary: $${this.salary}, Bonus: $${this.bonus}`;
    }
}

// Task 4 Handle Bonuses for Managers
// This task was added to task 2 for smooth results


// Task 5 Create and Manage Departments and Employees

// Create departments

const business = new Department("Business");

const medical = new Department("Medical");



// Create employees

const brandon = new Employee("Brandon", 80000, "Analytics", "Business");

const jake = new Employee("Jake", 75000, "Nurse", "Medical");

const fred = new Manager("Fred", 120000, "Business Manager", "Business", 20000);

const clark = new Manager("Clark", 130000, "Medical Manager", "Medical", 25000);



// Add employees to departments

business.addEmployee(brandon);

medical.addEmployee(jake);

business.addEmployee(fred);

medical.addEmployee(clark);



// Calculate total salary for each department

console.log(`Total salary for Business: $${business.getDepartmentSalary()}`);

console.log(`Total salary with bonuses for Business: $${business.calculateTotalSalaryWithBonus()}`);

console.log(`Total salary for Medical: $${medical.getDepartmentSalary()}`);

console.log(`Total salary with bonuses for Medcial: $${medical.calculateTotalSalaryWithBonus()}`);