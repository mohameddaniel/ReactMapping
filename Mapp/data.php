<?php
    header('Content-Type: application/json');
	$connect = mysqli_connect("localhost" ,"root" ,"","map");
	$encodedata = file_get_contents('php://input');
	$decodedata = json_decode($encodedata,true);

	$fullname = $decodedata['name'];
	$email = $decodedata['email'];
	$password = $decodedata['password'];
	$confpassword = $decodedata['confirmpassword'];
	$date = $decodedata['date'];

    $sql = "select * from app where email = '$email'"; 
    $req1 = mysqli_query($connect,$sql);	
     $coun = mysqli_num_rows($req1);
    if($coun>0){

    		  $Message = "email already exists, please change email and try again";
	
	}else {
		
		   $sql1 = "insert into app(nom_prenom,email,password,conpassword,dateN) values('$fullname','$email','$password','$confpassword','$date')";

	       $req = mysqli_query($connect,$sql1);

		   $Message = "user hase been registered successfully";
	}
	$response[] = array('Message'=>$Message);
	echo json_encode($response);



