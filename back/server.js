const express = require ("express");
const multer  = require('multer');
const fs = require("fs");
const path = require("path");
const upload = multer({ dest: 'public/uploads/' });
const app = express();
const user = [];

app.use(express.json());

app.use((_req, _res, next) => {
  console.log("Request received.");
  next();
});

app.use(express.static("public/uploads"));

app.post('/upload', upload.single('image'),  (req, res) => {
    console.log(req.file);
    fs.renameSync(req.file.path, path.join(req.file.destination, req.file.originalname));
    res.send("ok");
    res.json(user);
});


app.get("/", (_req, res) => {
    res.send("Upload");
});



app.use("*", (err, req, res, next) => {
	res.send("error");
});


app.listen(8000, () => {
    console.log("Listening on port 8000");
  });