<?php
session_start(); // initialise la session

header('Content-Type: application/json');
$connection = mysqli_connect("localhost" ,"root" ,"","map");
$encodingdata = file_get_contents('php://input');
$decodedata = json_decode($encodingdata,true);

$email = $decodedata['email'];

$mysq = "select * from app where email = '$email'"; 
$req1 = mysqli_query($connection,$mysq);    
$coun = mysqli_num_rows($req1);

//respure  les information de utilisateur user**
$donnes = mysqli_fetch_assoc($req1);

if($coun>0){
    $Message = "true";
    $_SESSION['email'] = $email; // stocke la valeur de $email dans une variable de session
    $_SESSION['fullname'] =$donnes['nom_prenom'];
}else {
    $Message = "false";
}
$response[] = array('Message'=>$Message);
echo json_encode($response);

?>