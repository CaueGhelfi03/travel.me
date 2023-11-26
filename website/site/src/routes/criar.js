var express = require("express");
var router = express.Router();

var criarController = require("../controllers/criarController");

router.post("/publicar/:idUsuario", function(req,res){
    criarController.publicar(req,res);
});

// router.get("/listar", function (req, res) {
//     criarController.listar(req, res);
// });
router.get("/listarPorUsuario/:idUsuario", function (req, res) {
    criarController.listarPorUsuario(req, res);
});


module.exports = router;