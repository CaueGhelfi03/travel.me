 create database travelme;
use travelme;

create table usuario(
	idUsuario int auto_increment primary key,
	nome varchar(45),
    senha varchar(30),
    email varchar(90) UNIQUE,
    cpf varchar(11),
    telefone varchar(11),
    fkEndereco int,
    constraint foreign key (fkEndereco) references endereco (idEndereco),
    constraint chkemail check (email LIKE  ( '%@%.%')));

create table endereco(
	idEndereco int primary key auto_increment,
    rua varchar(90),
    bairro varchar(45),
    unidadeFederativa varchar(2),
    cidade varchar(90),
    CEP varchar(8),
    complemento varchar(20));
    
create table mensagem(
	idMensagem int auto_increment,
	fkUsuario int,
    titulo varchar (90),
	descricao varchar(255),
	avaliacao int,
    localViagem varchar(100),
    dataViagem date,
    tipo varchar(40),
    constraint foreign key (fkUsuario) references usuario (idUsuario),
    primary key (idMensagem,fkUsuario));
    
    
	INSERT INTO usuario (nome, email, senha, cpf,telefone) VALUES ('Caue Ghelfi', 'caueghelfi@sptech.school', 'ghelfinho', '12345678912', '11971248838');
    select * from usuario;
    select * from mensagem;
    select * from endereco;
    
    
        
    
    select * from usuario join endereco on fkUsuario = idUsuario;
    
    
    
    
    