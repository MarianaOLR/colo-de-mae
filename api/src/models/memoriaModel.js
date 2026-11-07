let database = require("../database/config");

function cadastrar(titulo, data, descricao, musica, frase, foto, fkUsuario) {
    let instrucaoSql = `
        INSERT INTO memoria (titulo, data, descricao, musica, frase, foto, fk_usuario)
        VALUES ('${titulo}', '${data}', '${descricao}', '${musica}', '${frase}', '${foto}', ${fkUsuario});
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

function ligarSentimentos(fkMemoria, sentimentos) {
    let valores = "";

    for (let i = 0; i < sentimentos.length; i++) {
        if (i > 0) {
            valores += ", ";
        }
        valores += `(${fkMemoria}, ${sentimentos[i]})`;
    }

    let instrucaoSql = `
        INSERT INTO memoria_sentimento (fk_memoria, fk_sentimento) VALUES ${valores};
    `;
    return database.executar(instrucaoSql);
}

function listar(fkUsuario) {
    let instrucao = `
        SELECT memoria.id_memoria, memoria.titulo, memoria.data, memoria.descricao,
               memoria.musica, memoria.frase, memoria.foto,
               GROUP_CONCAT(DISTINCT colo.nome SEPARATOR ', ') AS colos,
               GROUP_CONCAT(DISTINCT sentimento.nome SEPARATOR '|') AS sentimentos
        FROM memoria
        LEFT JOIN memoria_colo ON memoria.id_memoria = memoria_colo.fk_memoria
        LEFT JOIN colo ON colo.id_colo = memoria_colo.fk_colo
        LEFT JOIN memoria_sentimento ON memoria.id_memoria = memoria_sentimento.fk_memoria
        LEFT JOIN sentimento ON sentimento.id_sentimento = memoria_sentimento.fk_sentimento
        WHERE memoria.fk_usuario = ${fkUsuario}
        GROUP BY memoria.id_memoria
        ORDER BY memoria.data DESC;
    `;
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    ligarColos,
    ligarSentimentos,
    listar
};