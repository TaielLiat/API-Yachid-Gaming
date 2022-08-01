const express = require("express");
const cors = require("cors"); //Cors define reglas de acceso externas a la api (quien puede usarla)
const middleware = require("./utils/middleware");
const entryController = require("./controller/entry");

const app = express();

app.use(cors());
app.use(express.json());

app.use(middleware.consoleData);
app.use("/juegos", entryController);

app.use(middleware.unknownEndpoint);
module.exports = app;