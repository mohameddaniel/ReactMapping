<?php
session_start(); // Démarre la session

header('Content-Type: application/json');
$connect = mysqli_connect("localhost" ,"root" ,"","map");
$encodedata = file_get_contents('php://input');
$decodedata = json_decode($encodedata,true);

$password = $decodedata['password'];
$email = $_SESSION['email']; // Récupère la valeur de l'email stockée en session

$reqq = "UPDATE app SET password = '$password', conpassword ='$password' WHERE email='$email'"; 
$req1 = mysqli_query($connect,$reqq);
//selecton les information de utilisateur user**
$user = "SELECT * FROM app WHERE email='$email'";
$requser = mysqli_query($connect,$user);
//respure  les information de utilisateur user**
$donnes = mysqli_fetch_assoc($requser);
$name = $donnes['nom_prenom'];

if($req1){
    $Message = 'true';
} else {
    $Message = 'erreur';
}  
  
$response[] = array('Message'=>$Message,'fullname'=>$name);
echo json_encode($response);
?>
