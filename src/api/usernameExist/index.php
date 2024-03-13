<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    function isExistUser($str){
        if($str == "test111"){ // A REMPLACER
            return false;
        }
        return true;
    }

    $username = isset($_GET["username"])?$_GET["username"]: null;
    $result = [];

    if($username){
        if(strlen($username) < 6){
            $result = ["valid"=>false, "errMsg" => "L'identifiant doit contenir au moins 6 caractères."];
        }else if(strlen($username) > 20){
            $result = ["valid"=>false, "errMsg" => "L'identifiant doit contenir au plus 20 caractères."];
        }else if(!isExistUser($username)){
            $result = ["valid"=>false, "errMsg" => "Cet identifiant n'est pas disponible."];
        }else{
            $result = ["valid"=>true];
        }
    }

    echo Json_encode($result);

    
?>