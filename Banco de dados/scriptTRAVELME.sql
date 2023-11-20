create database travelme;
use travelme;

create table usuario(
	idUsuario int auto_increment primary key,
	nome varchar(45),
	sobrenome varchar(45),
    senha varchar(30),
    email varchar(90) UNIQUE,
    cpf varchar(11),
    telefone varchar(11),
    constraint chkemail check (email LIKE  ( '%@%.%')));

create table endereco(
	idEndereco int primary key auto_increment,
    rua varchar(90),
    bairro varchar(45),
    cidade varchar(90),
    CEP varchar(8),
	fkUsuario int,
    constraint foreign key (fkUsuario) references usuario (idUsuario));
    
create table mensagem(
	idMensagem int,
	fkUsuario int,
	descricao varchar(255),
	avaliacao int,
    localViagem varchar(100),
    dataViagem date,
    tipo varchar(40),
    constraint foreign key (fkUsuario) references usuario (idUsuario),
    primary key (idMensagem,fkUsuario));
    
    

	INSERT INTO usuario (nome, email, senha, cpf,telefone) VALUES ('Caue Ghelfi', 'caueghelfi@sptech.school', 'ghelfinho', '12345678912', '11971248838');
    select * from usuario;
    
    
    
    
    