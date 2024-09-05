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

$query_select = "SELECT login FROM utilizadores WHERE login = '" . $login . "'";
$result = $conn->query($query_select);

if ($result->num_rows > 0) {
    echo "<script>alert('Esta conta já existe');window.location.href='../registo.html';</script>";
} else {
    $query = "INSERT INTO utilizadores (login, senha) VALUES ('$login', '$senha')";
    if ($conn->query($query) === true) {
        // registo bem-sucedido
        header("Location:../index.html");
    } else {
        // registo falhou
        header("Location:../registo.html");
    }
}

$conn->close();
