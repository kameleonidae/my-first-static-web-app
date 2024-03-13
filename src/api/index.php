<?php
require_once("./api.php");
//lienVersApi/demande => lienVersApi/index.php?demande=demande

//lienVersApi/annonce                                               => toutes les annonces          ATTENTION trié en DEUX TABLEAUX UN pour SERVICE et UN pour MATERIEL
//lienVersApi/annonce/:type             (materiel/service)          => annonces du type rentré
//lienVersApi/annonce/:categ            (libelle categorie)         => annonces de la categorie rentré
//lienVersApi/annonce/voisin/:voisin    (id_voisin)                 => annonces du voisin en q°
//lienVersApi/annonce/:annonce          (id_annonce)                => annonce précise

//lienVersApi/voisin                                                => tous les voisins
//lienVersApi/voisin/:voisin            (id_voisin)                 => voisin précis

//lienVersApi/categorie                                             => toutes les categories
//lienVersApi/categorie/:nom            (libelle categorie)         => categorie précise

//lienVersApi/image                                                 => tous les lien vers les images
//lienVersApi/image/:annonce            (id_annonce)                => tous les lien vers les images de l'annonce concerné

//lienVersApi/admin                                                 => tous les admin
//lienVersApi/admin/:admin              (id_admin)                  => admin précis

//lienVersApi/panier                                                => tous les panier
//lienVersApi/panier/:voisin            (id_voisin)                 => panier d'un voisin précis

//lienVersApi/favori                                               => tous les favori
//lienVersApi/favori/:voisin            (id_voisin)                => favori d'un voisin précis


try{
    if(!empty($_GET["demande"])){
        $url = explode("/", filter_var($_GET['demande'],FILTER_SANITIZE_URL));
        switch($url[0]){
            case "annonce" :
                if(empty($url[1])){
                    getAnnonceAll();
                }
                else if($url[1] == "materiel" || $url[1] == "service"){
                    getAnnonceByType();
                }
                else if($url[1] == "categ"){
                    getAnnonceByCateg();
                }
                else if($url[1] == "voisin"){
                    getAnnonceByVoisin();
                }
                else if($url[1] == "annonce"){
                    getAnnonceById();
                }
                else{
                    throw new Exception("parametre invalide veuillez consulter la doc de l'API");
                }
                break;

            case "voisin" :
                print("voisin");
                break;
            
            case "categorie" :
                print("categorie");
                break;
            
            case "image" :
                print("image");
                break;
            
            case "admin" :
                print("admin");
                break;

            case "panier" : 
                print("panier");
                break;

            case "favori" :
                print("favori");
                break;
            
            default : throw new Exception ("La demande n'est pas valide, vérifiez l'url");
        }
    }
    else{
        throw new Exception ("aucune demande n'est formulé");
    }
}
catch(Exception $e){
    print($e->getMessage());
}