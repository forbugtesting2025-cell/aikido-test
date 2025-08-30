const express = require('express');
const helmet = require('helmet');
const _ = require('lodash');
const app = express();

// Enable Helmet for security headers
app.use(helmet());

app.get('/', (req, res) => {
  let userInput = req.query.data || "{}";
  try {
    let obj = JSON.parse(userInput);
    _.merge({}, obj);
    res.send("Processed input: " + JSON.stringify(obj));
  } catch (e) {
    res.send("Invalid JSON input");
  }
});

app.listen(3000, () => {
  console.log("Demo app running on http://localhost:3000");
});
