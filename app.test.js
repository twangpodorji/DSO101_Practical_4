const request = require('supertest');
const app = require('./app');

beforeAll(() => {
  // Perform any setup needed before tests run
  console.log('Ensuring server is ready...');
});

describe('App Tests', () => {
  test('GET / should return hello message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello World from Jenkins CI/CD!');
  }, 10000); // Increased timeout to 10 seconds

  test('GET /health should return OK status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
  }, 10000); // Increased timeout to 10 seconds
});
