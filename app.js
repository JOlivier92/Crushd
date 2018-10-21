const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
        .then(() => console.log("Connected to MongoDB successfully"))
        .catch(err => console.log(err));



const port = process.env.PORT || 5000

app.use((req, res, next) => {
    debugger;
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));
 
app.use((req, res, next) => {
    debugger;
    next();
});

app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get('/test', (req, res) => {
    res.send("Hello tes2t!");
});


app.listen(port, () => console.log(`Server is running on port ${port}`));