const express = require ("express");
const app = express();
const multer  = require('multer');
const fs = require("fs");
const path = require("path");
const upload = multer({ dest: "public" });

app.use(express.static("public"));



app.use("*", (err, req, res, next) => {
	res.send("error");
});


app.listen(8000, () => {
    console.log("Listening on port 8000");
  });