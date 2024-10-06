// Task 1 Create Employee class with properties and methods
class Employee {
    constructor(name,salary,position,department) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department
}
 getDeatils(){
    return `${this.name}, ${this.position}, Salary: ${this.salary}`
 }
}

