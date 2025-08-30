const express = require('express');
const _ = require('lodash');
const app = express();

app.get('/', (req, res) => {
  // Demo vulnerable usage
  let userInput = req.query.data || "{}";
  try {
    let obj = JSON.parse(userInput);
    _.merge({}, obj); // vulnerable merge
    res.send("Processed input: " + JSON.stringify(obj));
  } catch (e) {
    res.send("Invalid JSON input");
  }
});

app.listen(3000, () => {
  console.log("Demo app running on http://localhost:3000");
});
