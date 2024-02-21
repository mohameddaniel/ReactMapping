<?php
    session_start(); 
    header('Content-Type: application/json');
	$connect = mysqli_connect("localhost" ,"root" ,"","map");
	$encodedata = file_get_contents('php://input');
	$decodedata = json_decode($encodedata,true);

	$email = $decodedata['email'];
	$password = $decodedata['password'];

	
     $sql = "select * from app where password= '$password' and email = '$email'";
    //$sql = "insert into clt(nom ,motpasse) values('$email','$password')";

	$resultat = mysqli_query($connect,$sql);	
	$donnes = mysqli_fetch_assoc($resultat);
	$count = mysqli_num_rows($resultat);
    
	 if ($count>0) {
		$Message = "ok";
		 $_SESSION['email'] = $donnes['email']; // stocke la valeur de $email dans une variable de session
         $_SESSION['fullname'] =$donnes['nom_prenom'];
	  }else{
		$Message = "notok";
	  }
	 $response[] = array('Message'=>$Message);
	 echo json_encode($response);
?>




