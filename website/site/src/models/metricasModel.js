var database = require("../database/config");

function buscarMetricas(idUsuario) {

    instrucaoSql = ''

 if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select avaliacao, localViagem from mensagem where fkUsuario = ${idUsuario}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMetricasUsuarios(idUsuario) {

    instrucaoSql = ''

 if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select usuario.nome as 'Nome' , count(mensagem.fkUsuario) as 'Quantidade_viagens'  from usuario left join mensagem on mensagem.fkUsuario = usuario.idUsuario 
         group by usuario.nome;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {

    buscarMetricas,
    buscarMetricasUsuarios

}