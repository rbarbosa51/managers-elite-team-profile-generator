import Intern from "../lib/Intern";

describe("Inter Class", () => {
  //name, id, email, school)
  const TestIntern = new Intern(
    "Rafael",
    "1",
    "rafael@gmail.com",
    "University of Texas"
  );
  it("Should contain a getRole function", () => {
    expect(typeof TestIntern.getRole).toBe("function");
  });
  it('getRole() should return "Intern"', () => {
    expect(TestIntern.getRole()).toBe("Intern");
  });
  it("Should contain a getSchool function", () => {
    expect(typeof TestIntern.getSchool).toBe("function");
  });
  it("Should have a value set for getSchool", () => {
    expect(TestIntern.getSchool()).toBe("University of Texas");
  });
  it("Should have name property passed", () => {
    expect(TestIntern.name).toBe("Rafael");
  });
  it("Should have an employee Id set", () => {
    expect(TestIntern.id).toBe("1");
  });
  it("Should have an email address set", () => {
    expect(TestIntern.email).toBe("rafael@gmail.com");
  });
});
