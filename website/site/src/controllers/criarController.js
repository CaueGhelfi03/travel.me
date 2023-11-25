
var criarModel = require("../models/criarModel");

function criarViagem(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var tituloViagem = req.body.tituloViagemServer;
    var descricao = req.body.descricaoServer;
    var avaliacaoViagem = req.body.avaliacaoViagemServer;
    var localViagem = req.body.locaViagemServer;
    var dataViagem = req.body.dataViagemServer;
    var tipoViagem = req.body.tipoViagemServer;

    // Faça as validações dos valores
    if (tituloViagem == undefined) {
        return res.status(400).json({ msg: "Seu titulo está undefined!" })
    } else if (descricao == undefined) {
        return res.status(400).json({ msg: "Seu descricao está undefined!" })
    }  else if (avaliacaoViagem == undefined) {
        return res.status(400).json({ msg: "Seu avaliacao está undefined!" })
    }  else if (localViagem == undefined) {
        return res.status(400).json({ msg: "Seu local está undefined!" })

    }  else if (dataViagem == undefined) {
        return res.status(400).json({ msg: "Seu data Viagem está undefined!" })

    }  else if (tipoViagem == undefined) {
        return res.status(400).json({ msg: "Seu tipo da viagem está undefined!" })
    } 
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        criarModel.criarViagem(tituloViagem, descricao, avaliacaoViagem, localViagem, dataViagem, tipoViagem)
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