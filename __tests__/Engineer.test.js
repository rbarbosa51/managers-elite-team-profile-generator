import Engineer from "../lib/Engineer";
describe("Engineer Class", () => {
  //name, id, email, school)
  const TestEngineer = new Engineer(
    "Rafael",
    "1",
    "rafael@gmail.com",
    "rbarbosa51"
  );
  it("Should contain a getRole function", () => {
    expect(typeof TestEngineer.getRole).toBe("function");
  });
  it('getRole() should return "Engineer"', () => {
    expect(TestEngineer.getRole()).toBe("Engineer");
  });
  it("Should contain a getGitHub function", () => {
    expect(typeof TestEngineer.getGitHub).toBe("function");
  });
  it("Should have a value set for getGitHub", () => {
    expect(TestEngineer.getGitHub()).toBe("https://github.com/rbarbosa51");
  });
  it("Should have name property passed", () => {
    expect(TestEngineer.name).toBe("Rafael");
  });
  it("Should have an employee Id set", () => {
    expect(TestEngineer.id).toBe("1");
  });
  it("Should have an email address set", () => {
    expect(TestEngineer.email).toBe("rafael@gmail.com");
  });
});
