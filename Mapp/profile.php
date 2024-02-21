<?php
session_start(); // initialise la session

header('Content-Type: application/json');

if (isset($_SESSION['email']) && isset($_SESSION['fullname'])) {
    $email = $_SESSION['email'];
    $fullname = $_SESSION['fullname'];
    $Message = 'ok';
} else {
    $Message = 'notok';
    $email = null;
    $fullname = null;
}

$response[] = array('Message' => $Message, 'email' => $email, 'fullname' => $fullname);
echo json_encode($response);
?>
