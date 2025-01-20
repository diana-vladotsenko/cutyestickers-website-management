const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended:true}));

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/product", (req, res) => {
	res.render("product");
});

console.log("Server is running on :http://localhost:5500")
app.listen(5500);