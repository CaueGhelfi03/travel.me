
var criarModel = require("../models/criarModel");

function criarViagem(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var titulo = req.body.tituloServer;
    var descricao = req.body.descricaoServer;
    var avaliacao = req.body.avaliacaoServer;
    var localViagem = req.body.localServer;
    var dataViagem = req.body.dataViagemServer;
    var tipo = req.body.tipoServer;

    // Faça as validações dos valores
    if (titulo == undefined) {

        return res.status(400).json({ msg: "Seu email está undefined!" })

    } else if (descricao == undefined) {
        return res.status(400).json({ msg: "Seu email está undefined!" })

    }  else if (avaliacao == undefined) {
        return res.status(400).json({ msg: "Seu email está undefined!" })

    }  else if (localViagem == undefined) {
        return res.status(400).json({ msg: "Seu email está undefined!" })

    }  else if (dataViagem == undefined) {
        return res.status(400).json({ msg: "Seu email está undefined!" })

    }  else if (tipo == undefined) {
        return res.status(400).json({ msg: "Seu email está undefined!" })

    } 
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        criarModel.criarViagem(titulo, descricao, avaliacao, localViagem, dataViagem, tipo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    criarViagem
}