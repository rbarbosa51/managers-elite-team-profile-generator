import Manager from "../lib/Manager.js";

describe("Manager Class", () => {
  const TestManager = new Manager(
    "Rafael",
    "1",
    "rafael@gmail.com",
    "123-456-7890"
  );
  it("Should contain the getRole function", () => {
    expect(typeof TestManager.getRole).toBe("function");
  });
  it('getRole() should return "Manager"', () => {
    expect(TestManager.getRole()).toBe("Manager");
  });
  it("Should have name property passed", () => {
    expect(TestManager.name).toBe("Rafael");
  });
  it("Should have an employee Id set", () => {
    expect(TestManager.id).toBe("1");
  });
  it("Should have an email address set", () => {
    expect(TestManager.email).toBe("rafael@gmail.com");
  });
  it("Should hava a office number set", () => {
    expect(TestManager.officeNumber).toBe("123-456-7890");
  });
});
