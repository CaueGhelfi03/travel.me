
var criarModel = require("../models/criarModel");

function publicar(req, res) {

    var tituloViagem = req.body.tituloViagemServer;
    var descricao = req.body.descricaoServer;
    var avaliacaoViagem = req.body.avaliacaoViagemServer;
    var localViagem = req.body.locaViagemServer;
    var dataViagem = req.body.dataViagemServer;
    var tipoViagem = req.body.tipoViagemServer;
    var idUsuario = req.params.idUsuario;
    

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
    else if (idUsuario == undefined) {
        return res.status(400).json({ msg: "Seu idUsuario está undefined!" })
    } 
    else {
        criarModel.publicar(tituloViagem, descricao, avaliacaoViagem, localViagem, dataViagem, tipoViagem, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    criarModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}




module.exports = {
    publicar,
    listarPorUsuario
}