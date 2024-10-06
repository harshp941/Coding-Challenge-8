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
