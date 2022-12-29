const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 3000;


app.use(express.static("public"));

app.listen(port, () => {
    console.log("servidor corriendo en el puerto " + port)
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/form", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/form.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
});

