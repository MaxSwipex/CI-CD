const app = require("../app");
const request = require('supertest');

describe("GET /", () => {
  it("respond with Hello World", (done) => {
    request(app).get("/test").expect("Hello World", done);
  })
});