const bodyParser = require("body-parser");
var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/" + "formdata.html");
});

app.get("/form", (req, res) => {
    res.sendFile(__dirname + "/" + "formnew.html");
});

app.post("/submit", (req, res) => {
    // Error handling (optional):
    if (!req.body.name || !req.body.age) {
        return res.send("Please enter both name and age.");
    }

    const name = req.body.name;
    const age = req.body.age;

    let response = `
        <table border="2" align="center">
            <tr><th>Name</th><th>Age</th></tr>
            <tr>
                <td>${name}</td>
                <td>${age}</td>
            </tr>
        </table>
    `;

    res.send(response); // Send the entire HTML table as a response
});

app.listen(2000);
