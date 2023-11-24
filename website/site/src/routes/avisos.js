var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");


router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.get("/listar", function (req,res){
    avisoController.listar(req,res)

});

module.exports = router;