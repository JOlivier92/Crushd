// Imports section
const path = require("path");
const express = require("express");
const app = express();
const dbURI = require("./config/keys");
const mongoose = require("mongoose");
const passport = require("passport");
require("./models/User");
app.use(passport.initialize());
require("./config/passport")(passport);
// Set up body parser so we can parse json to our frontend
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// creates connection to mongo db, sets default port to 5000
// unless we are using a server
const db = require("./config/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;
// End Imports Section // // // // // // // //

// Routes
const users = require("./routes/api/users");
const videos = require("./routes/api/videos");
const responseVideos = require("./routes/api/response_videos");
const chats = require("./routes/api/chats");
const messages = require("./routes/api/messages");

// Authentication modules
const jsonwebtoken = require("jsonwebtoken");
app.use(
  "/api/users/current",
  passport.authenticate("jwt", { session: false }),
  users.current
);
app.use("/api/users/register", users.register);
app.use("/api/users/login", users.login);
app.post("/api/videos", videos.upload);
app.get("/api/videos/",videos.getIndex);
app.use("/api/response_videos", responseVideos.upload);
// Messaging modules

app.listen(port, () => console.log(`Server is running on port ${port}`));

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "", "index.html"));
  });
}