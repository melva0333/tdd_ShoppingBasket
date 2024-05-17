const Candy = require('./Candy');

describe("Unit tests for the Candy class", () => {
    test("The candy class should return the correct name and price", ()=>{
        const candy = new Candy("Mars", 4.99);
        expect(candy.getName()).toEqual("Mars");
        expect(candy.getPrice()).toEqual(4.99);
    });
})

