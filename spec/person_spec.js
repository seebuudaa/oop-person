let Person = require("../src/person"),
    person = new Person("Ryan", 30, "male", [
        "being a hardarse",
        " agile",
        " ssd hard drives"
    ]);

describe("the generic data and functionality of a human", () => {
    it("should equate to the function's data ", () => {
        expect(person.hello()).toEqual(
            "Hello, my name is Ryan and I am 30 years old. My interests are being a hardarse, agile, ssd hard drives");
    });

    it("should include name: Ryan", () => {
        let ryan = new Person("Ryan", 30, "male", [
            "being a hardarse",
            " agile",
            " ssd hard drives"
        ]);
        expect(ryan.name).toEqual("Ryan");
    });

    it("should contain person's age", () => {
        let ryan = new Person("Ryan", 30, "male", [
            "being a hardarse",
            " agile",
            " ssd hard drives"
        ]);
        expect(ryan.age).toEqual(30);
    });

    it("should contain gender", () => {
        let ryan = new Person("Ryan", 30, "male", [
            "being a hardarse",
            " agile",
            " ssd hard drives"
        ]);
        expect(ryan.gender).toBe("male");
    });

    it("should test the validity of the function", () => {
        expect(person.hello()).toBeDefined();
    });

    it("The 'toBe' matcher compares with ===", () => {
        expect(this.name).not.toBe(null);
    });

    it("The 'toThrowError' matcher is for testing a specific thrown exception", () => {
        errorThrowing = function () {
            throw new TypeError("Please enter correct details");
        };
        expect(errorThrowing).toThrowError("Please enter correct details");
    });

});