var database = require("../database/config");

function criarViagem(titulo, descricao, avaliacao, localViagem, dataViagem, tipo) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ",fkUsario, titulo, descricao, localViagem, dataViagem, avaliacao, tipo);
    var instrucao = `
        INSERT INTO mensagem (fkUsuario, titulo, descricao, localViagem, dataViagem, avaliacao) VALUES ('${titulo}', '${descricao}', ${localViagem}, '${dataViagem}', '${avaliacao}','${tipo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
   criarViagem
};