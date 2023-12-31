var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        

                        res.status(200).json(resultadoAutenticar)
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function passo1Cadastro(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var telefone = req.body.telefoneServer;
    var cpf = req.body.cpfServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu Nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu Email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua Senha está undefined!");
    }  else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    }  else if (cpf == undefined) {
        res.status(400).send("Seu cpf está undefined!");
    }
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.passo1Cadastro(nome, email, senha, cpf, telefone)
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

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var cep = req.body.cepServer;
    var unidadeFederativa = req.body.unidadeFederativaServer;
    var cidade = req.body.cidadeServer;
    var bairro = req.body.bairroServer;
    var rua = req.body.ruaServer;
    var complemento = req.body.complementoServer;

    // Faça as validações dos valores
    if (cep == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (unidadeFederativa == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }  else if (bairro == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }  else if (rua == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }   else if (complemento == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } 
    else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(cep,unidadeFederativa,cidade,bairro,rua,complemento)
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

function buscar(req,res){
    var idUsuario = req.params.idUsuario;


    if (idUsuario == undefined) {
        return res.status(400).json({ msg: "Seu ID está undefined!" })
    } 
    else {
        usuarioModel.buscar(idUsuario)
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



 




module.exports = {
    autenticar,
    cadastrar,
    passo1Cadastro,
    buscar

}