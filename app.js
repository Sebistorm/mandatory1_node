const express = require("express");
const app = express();

app.use(express.static("public"));

const fs = require("fs");

// Components
const top = fs.readFileSync("./public/components/top.html").toString();
const bottom = fs.readFileSync("./public/components/bottom.html").toString();

// Pages
const frontpage = fs.readFileSync("./public/frontpage/index.html");

// Pages with components
const frontpagePage = top.replace("%%DOCUMENT_TITLE%%", "Mandatory 1 - Nodejs Dokumentation") + frontpage + bottom;

app.get("/", (req, res) => {
    res.send(frontpagePage);
})


const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log("The server is running on port", server.address().port);
});