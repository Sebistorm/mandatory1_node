const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

// Components
const top = fs.readFileSync("./public/components/top.html").toString();
const bottom = fs.readFileSync("./public/components/bottom.html").toString();
const sidebar = fs.readFileSync("./public/components/sidebar.html").toString();

// Pages
const frontpage = fs.readFileSync("./public/pages/index.html");
const variablespage = fs.readFileSync("./public/pages/variables.html");
const loopspage = fs.readFileSync("./public/pages/loops.html")
const apppage = fs.readFileSync("./public/pages/app.html")
const crudpage = fs.readFileSync("./public/pages/crud.html")

// Pages with components
const frontpagePage = top.replace("%%DOCUMENT_TITLE%%", "Mandatory 1 - Nodejs Dokumentation") + sidebar + frontpage + bottom;
const variablespagePage = top.replace("%%DOCUMENT_TITLE%%", "Mandatory 1 - Variables") + sidebar + variablespage + bottom;
const loopspagePage = top.replace("%%DOCUMENT_TITLE%%", "Mandatory 1 - Loops") + sidebar + loopspage + bottom;
const apppagePage = top.replace("%%DOCUMENT_TITLE%%", "Mandatory 1 - app.js") + sidebar + apppage + bottom;
const crudpagePage = top.replace("%%DOCUMENT_TITLE%%", "Mandatory 1 - Pure Data CRUDable REST API") + sidebar + crudpage + bottom;

// get
app.get("/", (req, res) => {
    res.send(frontpagePage);
})

app.get("/variables", (req, res) => {
    res.send(variablespagePage);
})

app.get("/loops", (req, res) => {
    res.send(loopspagePage);
})

app.get("/app", (req, res) => {
    res.send(apppagePage);
})

app.get("/crud", (req, res) => {
    res.send(crudpagePage);
})


const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log("The server is running on port", server.address().port);
});