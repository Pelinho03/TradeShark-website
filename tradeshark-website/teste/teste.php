<?php

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'login';

// Cria uma conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se ocorreu algum erro na conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

echo "Conexão bem-sucedida com o banco de dados.";

$conn->close();
