const Employee = require('../lib/Employee');
 
describe('Employee test', () => {
  it('should return the employee name', () => {
    const employee = new Employee('Marc', '1', 'Marc@gmail.com');
    expect(employee.getName()).toEqual('Marc');
  });

  it('should return id', () => {
    const employee = new Employee('Marc', '1', 'Marc@gmail.com');
    expect(employee.getName()).toEqual('Marc');
  });

  it('should return email', () => {
    const employee = new Employee('Marc', '1', 'Marc@gmail.com');
    expect(employee.getName()).toEqual('Marc');
  });
});


const Engineer = require('../lib/Engineer');
 
describe('Engineer test', () => {
  it('should return the GitHub name', () => {
    const engineer = new Engineer('Marc', '1', 'Marc@gmail.com', 'mwalker35-stack');
    expect(engineer.gitHubName()).toEqual('mwalker35-stack');
  });
});


const Engineer = require('../lib/Intern');
 
describe('Intern test', () => {
  it('should return the GitHub name', () => {
    const intern = new Intern('Marc', '1', 'Marc@gmail.com', 'GT');
    expect(intern.school()).toEqual('GT');
  });
});


const Engineer = require('../lib/Manager');
 
describe('Manager test', () => {
  it('should return the Manager office number', () => {
    const Manager = new Manager('Marc', '1', 'Marc@gmail.com', '202');
    expect(manager.officeNumber()).toEqual('202');
  });
});