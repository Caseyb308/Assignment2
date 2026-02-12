const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const data = require("data-service.js");

const app = express();
dotenv.config();

// set HTTP_PORT
const HTTP_PORT = process.env.PORT || 8080;

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

// about route
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

// employees route
app.get("/employees", (req, res) => {
  res.send("Employees route");
});

// managers route
app.get("/managers", (req, res) => {
  res.send("Managers route");
});

// departments route
app.get("/departments", (req, res) => {
  res.send("Departments route");
});

// 404 error handler for undefined routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

// setup server
app.listen(HTTP_PORT, () => {
  console.log(`App listening on port: ${HTTP_PORT}`);
});

