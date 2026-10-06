//create a simple Express.js that: serves an HTML file using the fs module. Has routes like /, /about, and /contact that serve different HTML files. Handles errors gracefully and returns a 404 page for unknown routes.

const express = require("express");
const fs = require("fs");

const app = express();

// Home
app.get("/", (req, res) => {
    fs.readFile("home.html", "utf8", (err, data) => {
        if (err) {
            res.send("Error reading home.html");
        } else {
            res.type("html");
            res.send(data);
        }
    });
});

// About
app.get("/about", (req, res) => {
    fs.readFile("about.html", "utf8", (err, data) => {
        if (err) {
            res.send("Error reading about.html");
        } else {
            res.type("html");
            res.send(data);
        }
    });
});

// Contact
app.get("/contact", (req, res) => {
    fs.readFile("contact.html", "utf8", (err, data) => {
        if (err) {
            res.send("Error reading contact.html");
        } else {
            res.type("html");
            res.send(data);
        }
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

