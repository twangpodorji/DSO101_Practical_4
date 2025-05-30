const request = require('supertest');
const app = require('./app');

beforeAll(async () => {
  console.log('Ensuring server is ready...');
  // Add any necessary setup logic here, e.g., waiting for the server to start
});

describe('App Tests', () => {
  test('GET / should return hello message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello World from Jenkins CI/CD!');
  }, 20000); // Increased timeout to 20 seconds

  test('GET /health should return OK status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
  }, 20000); // Increased timeout to 20 seconds
});
