let database = require("../database/config");

function cadastrar(titulo, data, descricao, musica, frase, sentimento, foto, fkUsuario) {
    let instrucaoSql = `
        INSERT INTO memoria (titulo, data, descricao, musica, frase, sentimento, foto, fk_usuario)
        VALUES ('${titulo}', '${data}', '${descricao}', '${musica}', '${frase}', '${sentimento}', '${foto}', ${fkUsuario});
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar
};