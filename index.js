let express = require("express");

const app = express();
const port = process.env.port;

app.get("/", (req, res) => {
  res.send("Hello adita!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
