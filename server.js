const express = require("express");
const path = require("path");
const noteData = require("./db/db.json");

const PORT = 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("in here");
  //   console.log(__dirname);
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/api/pets", (req, res) => res.json(noteData));

app.listen(PORT, () => {
  console.log(`Example app listening at https://localhost:${PORT}`);
});
