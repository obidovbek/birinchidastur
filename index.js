const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Salom 3");
});
app.listen(4300, () => {
  console.log(`Server 4300 portida ishladi`);
});
