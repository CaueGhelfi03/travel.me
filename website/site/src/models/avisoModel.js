var database = require("../database/config");

function publicar(titulo, descricao, localViagem, dataViagem, avaliacao,tipo) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, localViagem, dataViagem, avaliacao);
    var instrucao = `
        INSERT INTO mensagem (titulo, descricao, localViagem, dataViagem, avaliacao) VALUES ('${titulo}', '${descricao}', ${localViagem}, '${dataViagem}', '${avaliacao}','${tipo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idMensagem) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idMensagem);
    var instrucao = `
        DELETE FROM mensagem WHERE id = ${idMensagem};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    publicar,
    deletar
}