import express from "express";
const { static: serveStatic } = express;
const app = express();

app.set("view engine", "ejs");
app.use(serveStatic("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/product", (req, res) => {
    res.render("product");
});

console.log("Server is running on :http://localhost:5500")
app.listen(5500);