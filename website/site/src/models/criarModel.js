var database = require("../database/config");

function publicar(tituloViagem, descricao, avaliacaoViagem, localViagem, dataViagem, tipoViagem, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", tituloViagem, descricao, avaliacaoViagem, localViagem, dataViagem, tipoViagem, idUsuario);
    var instrucao = `
        INSERT INTO mensagem (titulo, descricao, localViagem, dataViagem, avaliacao, tipo, fkUsuario) VALUES ('${tituloViagem}', '${descricao}', '${localViagem}', '${dataViagem}', '${avaliacaoViagem}','${tipoViagem}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// function listar() {
//     console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
//     var instrucao = `
//         SELECT 
//             m.id AS idMensagem,
//             m.titulo,
//             m.descricao,
//             m.avaliacao,
//             m.tipo,
//             m.dataViagem,
//             m.fk_usuario,
//             u.id AS idUsuario,
//             u.nome,
//             u.email,
//             u.senha
//         FROM mensagem as m 
//             INNER JOIN usuario u
//                 ON m.fk_usuario = u.id;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucao);
//     return database.executar(instrucao);
// }

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
    select * from mensagem where fkUsuario = ${idUsuario}    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




module.exports = {
   publicar,
   listarPorUsuario
};