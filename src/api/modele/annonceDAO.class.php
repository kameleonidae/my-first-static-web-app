<?php
    require_once("./connexion.php");
    require_once("./annonce.class.php");

    class AnnonceDAO{
        private $db;
        private $select;

        function __construct(){
            $this -> db = new Connexion();
            $this -> select = 'SELECT id_annonce, date, id_voisin, valeur_forfaitaire, valeur_quotidienne, zone_geo, description,
            titre, id_categ, valide, archive FROM annonce ';
        }

        function insert(Annonce $annonce){
            $this->db->execSQL("INSERT INTO `annonce` (id_annonce, date, id_voisin, valeur_forfaitaire, valeur_quotidienne, zone_geo,
            description, titre, id_categ, valide, archive)
            VALUES (:id_annonce, :date, :id_voisin, :valeur_forfaitaire, :valeur_quotidienne, :zone_geo,
            :description, :titre, :id_categ, :valide, :archive)",
            [':id_annonce' => $annonce->getId_annonce(),
            ':date' => $annonce->getDate(),
            ':id_voisin' => $annonce->getId_voisin(),
            ':valeur_forfaitaire' => $annonce->getVal_forfait(),
            ':valeur_quotidienne' => $annonce->getVal_quot(),
            ':zone_geo' => $annonce->getZone_geo(),
            ':description' => $annonce->getDescription(),
            ':titre' => $annonce->getTitre(),
            ':id_categ' => $annonce->getId_categ(),
            ':valide' => $annonce->getValide(),
            ':archive' => $annonce->getArchive()]);
        }
    }
?>