<?php

define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS'])? "https" : "http").
"://".$_SERVER['HTTP_HOST'].$_SERVER["PHP_SELF"]));

function getConnexion(){
    return new PDO("mysql:host=localhost;dbname=gentivoisin;charset=utf8","root","");
}

function sendJSON($infos){
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");
    echo json_encode($infos,JSON_UNESCAPED_UNICODE);
}

function getAnnonceAll(){
    print("all d'annnonce");
}

function getAnnonceByType(){
    print("type d'annnonce");
}

function getAnnonceByCateg(){
    print("categ d'annonce");
}

function getAnnonceByVoisin(){
    print("voisin d'annonce");
}

function getAnnonceById(){
    print("id d'annonce");
}

function getVoisinAll(){
    print("all de voisin");
}

function getVoisinById(){
    print("id de voisin");
}

function getCategorieAll(){
    print("all de categorie");
}

function getCategorieByName(){
    print("name de categorie");
}

function getImageAll(){
    print("all d'image");
}

function getImageByAnnonce(){
    print("all image d'une annonce");
}

function getAdminAll(){
    print("all admin");
}

function getAdminById(){
    print("id d'admin");
}