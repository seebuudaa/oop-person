let test = require("../src/person");
let person = new test("thabo", 20, "male", ["riding cars", "running"])

describe("testing for output", () => {

    it("should output exact words", () => {
        expect(person.hello()).toBe("Hello, my name is thabo and I am 20 years old. My interests are riding cars,running");
    });
    it("should output age", () => {
        expect(person.age).toBe(20);
    });
    it("should output geder", () => {
        expect(person.gender).toBe("male");
    });
    it("should output interests", () => {
        expect(person.interests[1]).toBe("running");
    });


})