let database = require("../database/config");

function cadastrar(titulo, data, descricao, musica, frase, foto, fkUsuario, fkSentimento) {
    let instrucaoSql = `
        INSERT INTO memoria (titulo, data, descricao, musica, frase, foto, fk_usuario, fk_sentimento)
        VALUES ('${titulo}', '${data}', '${descricao}', '${musica}', '${frase}', '${foto}', ${fkUsuario}, ${fkSentimento});
    `;
    return database.executar(instrucaoSql);
}

function ligarColos(fkMemoria, colos) {
    let valores = "";

    for (let i = 0; i < colos.length; i++) {
        if (i > 0) {
            valores += ", ";
        }
        valores += `(${fkMemoria}, ${colos[i]})`;
    }

    let instrucaoSql = `
        INSERT INTO memoria_colo (fk_memoria, fk_colo) VALUES ${valores};
    `;
    return database.executar(instrucaoSql);
}

function listar(fkUsuario) {
    let instrucao = `
        SELECT memoria.id_memoria, memoria.titulo, memoria.data, memoria.descricao,
               memoria.musica, memoria.frase, memoria.foto,
               sentimento.nome AS sentimento,
               GROUP_CONCAT(colo.nome SEPARATOR ', ') AS colos
        FROM memoria
        JOIN sentimento ON sentimento.id_sentimento = memoria.fk_sentimento
        LEFT JOIN memoria_colo ON memoria.id_memoria = memoria_colo.fk_memoria
        LEFT JOIN colo ON colo.id_colo = memoria_colo.fk_colo
        WHERE memoria.fk_usuario = ${fkUsuario}
        GROUP BY memoria.id_memoria, sentimento.nome
        ORDER BY memoria.data DESC;
    `;
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    ligarColos,
    listar
};