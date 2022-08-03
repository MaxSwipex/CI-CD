const app = require("../index");
const request = require('supertest');

describe("GET /", () => {
  it("respond with Hello World", (done) => {
    request(app).get("/").expect("Hello World", done);
  })
});