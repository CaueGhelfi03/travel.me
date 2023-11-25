var express = require("express");
var router = express.Router();

var criarController = require("../controllers/criarController");


// router.post("/criarViagem", criarController.criarViagem(req, res));

router.post("/criarViagem", function(req,res){
    criarController.criarViagem(req,res);
});

module.exports = router;