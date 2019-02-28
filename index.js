var expressBrowserify = require('express-browserify');
const express = require('express')
const app = express()
var expressBrowserify = require('express-browserify');
app.use("/", express.static(__dirname + "/public/"))
app.use("/lib/orchestre.min.js", express.static(__dirname + "/lib/orchestre.min.js"))
// app.get("/script.js", express.static(__dirname + "/public/script.js"));
app.get("/script.js", expressBrowserify("public/script.js"));
app.use("/1.ogg", express.static(__dirname + "/res/1.ogg"))
const port = 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(function (req, res, next) {
  res.status(404).status("404").send("file not found :(")
})
