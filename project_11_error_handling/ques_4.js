// 4. Employee Class Challenge.


// Create a class called Employee with three properties: name, position, and salary. The class should have a
// method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and
// call the getSalary method.



class Employee{
    name = "Pankaj";
    position = "WebDeveloper";
    salary = 80000;


    getSalary(){
        return this.salary;
    }


}

const employee1 = new Employee;
console.log(employee1.getSalary());