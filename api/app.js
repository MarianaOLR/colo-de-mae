require("dotenv").config({ path: ".env.dev" });

let express = require("express");
let cors = require("cors");
let path = require("path");

let PORTA_APP = process.env.APP_PORT;
let HOST_APP = process.env.APP_HOST;

let app = express();

let usuarioRouter = require("./src/routes/usuarios");
let memoriaRouter = require("./src/routes/memorias");
let coloRouter = require("./src/routes/colos");
let indicadorRouter = require("./src/routes/indicadores");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../front")));
app.use(cors());

app.use("/usuarios", usuarioRouter);
app.use("/memorias", memoriaRouter);
app.use("/colos", coloRouter);
app.use("/indicadores", indicadorRouter);

app.listen(PORTA_APP, function () {
    console.log(`Servidor rodando em http://${HOST_APP}:${PORTA_APP}`);
});