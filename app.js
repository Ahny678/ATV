require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//SWAGGER CONFIGS-------------------------------
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./swagger/swaggerConfig");
//-------------------------------------------------
//MODELS
const Subscriber = require("./models/subscriber");
const Streamer = require("./models/streamer");
const Subscription = require("./models/subscription");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((err) => {
    console.error("Error connecting to mongodb:", err);
  });

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const suscriberRouter = require("./routes/subscribers");
const streamerRouter = require("./routes/streamers");
const { configDotenv } = require("dotenv");

var app = express();

// Swagger UI setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/subscribers", suscriberRouter);
app.use("/streamers", streamerRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
