require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  `mongodb+srv://vivek:${process.env.DB_PASSWORD}@cluster0.9h0gt.mongodb.net/<dbname>?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("connected to database");
  }
);

app.get("/", (req, res) => {
  res.send("Test route");
});

app.use("/people", require("./routes/people"));
app.use("/product", require("./routes/product"));
app.use("/category", require("./routes/category"));
app.use("/brand", require("./routes/brand"));

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));
  // Express serve up index.html file if it doesn't recognize route
  const path = require("path");
  app.get("*", (req, res) => {
    let url = path.join(__dirname, "client/build", "index.html");
    if (!url.startsWith("/app/"))
      // since we're on local windows
      url = url.substring(1);
    res.sendFile(url);
  });
}

const PORT = process.env.PORT || 7878;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
