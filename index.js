const express = require("express");
const app = new express();
const path = require("path");
const PORT = process.env.PORT || 5000;
const ejs = require("ejs");

// Use ejs templating engine
app.set("view engine", "ejs");

// Middlewares
// Serve static pages from public directory
app.use(express.static("public"));

//Routes
app.get("/", (req, res) => {
  //res.sendFile(path.resolve(__dirname, "pages/index.html"));
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
