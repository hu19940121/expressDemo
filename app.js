const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(80, () => console.log("Server ready on port 80."));

module.exports = app;