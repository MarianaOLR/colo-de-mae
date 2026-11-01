require("dotenv").config({ path: ".env.dev" });

let express = require("express");
let cors = require("cors");
let path = require("path");

let PORTA_APP = process.env.APP_PORT;
let HOST_APP = process.env.APP_HOST;

let app = express();
let usuarioRouter = require("./src/routes/usuarios");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../front")));
app.use(cors());
app.use("/usuarios", usuarioRouter);

app.listen(PORTA_APP, function () {
    console.log(`Servidor rodando em http://${HOST_APP}:${PORTA_APP}`);
});