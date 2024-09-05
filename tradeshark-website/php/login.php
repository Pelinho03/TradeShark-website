<?php

$login = $_POST['login'];
$senha = md5($_POST['senha']);

$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'login';

// Cria uma conexão com a base de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se ocorreu algum erro na conexão
if ($conn->connect_error) {
    die("Falha na conexão com a base de dados: " . $conn->connect_error);
}

$query = "SELECT * FROM utilizadores WHERE login = '" . $login . "' AND senha = '" . $senha . "'";
$result = $conn->query($query);

if ($result->num_rows == 1) {
    // Login bem-sucedido
    header("Location:../inicio.html");
} else {
    // Login falhou
    header("Location:../index.html");
}

$conn->close();
