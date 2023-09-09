const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const homeRouter = require("./routes/articles");
const publicpath = path.join(__dirname, "public");
app.use(express.static(publicpath));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("Home");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/blog", (req, res) => {
  const blogs = [
    {
      title: "test title",
      Date: new Date(),
      Description: "test description",
    },
    {
      title: "test title1",
      Date: new Date(),
      Description: "test description6",
    },
  ];
  res.render("blog", {
    blogs: blogs,
  });
});
app.get("/blogs/new", (req, res) => {
  res.render("new");
});
app.use("/Home", homeRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
