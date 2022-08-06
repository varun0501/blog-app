const express = require("express");
const app = new express();
const path = require("path");
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.static("public"));

//Routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/index.html"));
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
