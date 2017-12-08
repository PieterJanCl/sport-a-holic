var Request = require("request");

describe("Server", () => {
    let server;
    let firstRecipeId;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {});
    describe("POST /api/register", () => {
        let data = {};
        // add a new recipe to our database
        beforeAll((done) => {
            Request({
                method: 'POST',
                uri: `http://localhost:3000/API/register`,
                json: true,
                body: {
                    username: "Flores",
                    password: "1234567891011",
                }
            }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.token).toBeDefined();
        });
    });
    describe("POST /api/login", () => {
        let data = {};
        // add a new recipe to our database
        beforeAll((done) => {
            Request({
                method: 'POST',
                uri: `http://localhost:3000/API/register`,
                json: true,
                body: {
                    username: "Flores",
                    password: "1234567891011",
                }
            }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.token).toBeDefined();
        });
    });
   
  
});