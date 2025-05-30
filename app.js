const express = require("express");

function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.json({ message: "Hello World from Jenkins CI/CD!" });
  });

  app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
  });

  return app;
}

const port = process.env.PORT || 3000;

if (require.main === module) {
  const app = createApp();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = createApp;
