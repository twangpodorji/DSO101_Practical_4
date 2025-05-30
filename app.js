// a simple Express.js application
const express = require("express");

function createApp() {
  const app = express();

  // Middleware to parse JSON bodies
  app.get("/", (req, res) => {
    // Root endpoint
    res.json({ message: "Hello World from Jenkins CI/CD!" }); // its the response message
  });

  app.get("/health", (req, res) => {
    // Health check endpoint for the application
    res.status(200).json({ status: "OK", timestamp: new Date().toISOString() }); // returns the status of the application
  });

  return app;
}

const port = process.env.PORT || 3000; // default port for the application

if (require.main === module) {
  // if the module is run directly, start the server
  const app = createApp();
  app.listen(port, () => {
    // listen on the specified port
    console.log(`Server running on port ${port}`);
  });
}
module.exports = createApp;
