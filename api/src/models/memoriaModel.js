let database = require("../database/config");

function cadastrar(titulo, data, descricao, musica, frase, sentimento, foto, fkUsuario) {
    let instrucaoSql = `
        INSERT INTO memoria (titulo, data, descricao, musica, frase, sentimento, foto, fk_usuario)
        VALUES ('${titulo}', '${data}', '${descricao}', '${musica}', '${frase}', '${sentimento}', '${foto}', ${fkUsuario});
    `;
    return database.executar(instrucaoSql);
}


function listar(fkUsuario) {
    let instrucao = `
        SELECT id_memoria, titulo, data, descricao, musica, frase, sentimento, foto
        FROM memoria
        WHERE fk_usuario = ${fkUsuario}
        ORDER BY data DESC;
    `;
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};