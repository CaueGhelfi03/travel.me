var metricasModel = require("../models/metricasModel");

function buscarMetricas(req, res) {


    var idUsuario = req.params.idUsuario;

    // console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    metricasModel.buscarMetricas(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarMetricasUsuarios(req, res) {


    var idUsuario = req.params.idUsuario;

    // console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    metricasModel.buscarMetricasUsuarios(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {

    buscarMetricas,
    buscarMetricasUsuarios
}
