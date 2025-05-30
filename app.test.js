const request = require("supertest");
const app = require("./app");

describe("App Tests", () => {
  describe("GET /", () => {
    it("should return hello message", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toEqual(200);
      expect(response.body).toMatchObject({
        message: "Hello World from Jenkins CI/CD!",
      });
    });
  });

  describe("GET /health", () => {
    it("should return OK status", async () => {
      const response = await request(app).get("/health");
      expect(response.statusCode).toEqual(200);
      expect(response.body).toMatchObject({ status: "OK" });
    });
  });
});
