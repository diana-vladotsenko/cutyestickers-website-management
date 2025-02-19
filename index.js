import express from "express";
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/product", (req, res) => {
  res.render("product");
});

console.log("Server is running on :http://localhost:5500");
app.listen(5500);
