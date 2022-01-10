const port = 8080;

//require classes
//================

const FormService = require("./services/FormService.js");

const FormRouter = require("./routers/FormRouter.js");
const ViewRouter = require("./routers/ViewRouter.js");

//Configure knex
//===============
const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);

//Configure express, handlebars
//=============================
const express = require("express");
const { engine } = require("express-handlebars");
const flash = require("connect-flash");
const session = require("express-session");

const app = express();
app.set("view engine", "handlebars");
app.engine("handlebars", engine({ defaultLayout: "rooftop_main" }));

require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true,
    })
);
app.use(flash());

app.use(express.static(__dirname + "/public"));


// Set up Server and Routers
//==================================
const formService = new FormService(knex);

app.use("/form", new FormRouter(formService, express).router());
app.use("/", new ViewRouter(express).router());

app.get("/", (req, res) => {
    res.render("index");
});

// Listen to port
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});

module.exports = app;

//addoil