var express = require("express");
var router = express.Router();
var metricasController = require("../controllers/metricasController");

router.get("/ultimas/:idUsuario", function (req, res) {
  metricasController.buscarMetricas(req, res);
});

router.get("/qtdViagens/:idUsuario", function(req,res){
    metricasController.buscarMetricasUsuarios(req,res);
});

module.exports = router;