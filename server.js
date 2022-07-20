const express = require("express");
const fs = require("fs");
const path = require("path");
const noteData = require("./db/db.json");

const PORT = 3000;

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
app.get("/notes", (req, res) => {
  console.log("in here");
  //   console.log(__dirname);
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});
app.get("/api/notes", (req, res) => res.json(noteData));
app.post("/api/notes", (req, res) => {
  console.log(req.body);
  noteData.push(req.body);
  console.log(noteData);
  //   console.log(req.query);

  fs.writeFile("./db/db.json", JSON.stringify(noteData), (err) =>
    err ? console.error(err) : console.log("Success")
  );
  res.send(noteData);
});
app.listen(PORT, () => {
  console.log(`Example app listening at https://localhost:${PORT}`);
});
