import Manager from '../lib/Manager.js';
describe('Manager Class', () => {
    const TestManager = new Manager('Rafael', '1','rafael@gmail', '123-456-7890');
    it('Should contain the getRole function', () => {
        expect(typeof TestManager.getRole).toBe('function');
    });
    // it('getRole() should return "Manager"', () => {
    //     expect(TestEmployee.getRole()).toBe('Manager');
    // });
})







// describe('Employee Class', () => {
//     const TestEmployee = new Employee('Rafael', '1', 'rafael@gmail.com');
//     it('Should contain the getRole function', () => {
//         expect(typeof TestEmployee.getRole).toBe('function');
//     });
//     it('getRole() should return "Employee"', () => {
//         expect(TestEmployee.getRole()).toBe('Employee');
//     })
//     it('Should have name property passed', () => {
//         expect(TestEmployee.name).toBe('Rafael');
//     });
//     it('Should have an employee Id set', () => {
//         expect(TestEmployee.id).toBe('1');
//     });
//     it('Should have an email address set', () => {
//         expect(TestEmployee.email).toBe('rafael@gmail.com');
//     });
// });