<?php
    class Annonce{
        private string $id_annonce;
        private string $id_voisin;
        private string $date;
        private int $val_forfait;
        private int $val_quot;
        private int $zone_geo;
        private string $description;
        private string $titre;
        private string $id_categ;
        private bool $valide;
        private bool $archive;

        public function __construct(string $id_annonce = "", string $id_voisin = "", string $date = "", int $val_forfait = 0,
        int $val_quot = 0, int $zone_geo = 0, string $description = "", string $titre = "", string $id_categ = "",
        bool $valide = false, bool $archive = false){
            $this->id_annonce = $id_annonce;
            $this->id_voisin = $id_voisin;
            $this->date = $date;
            $this->val_forfait = $val_forfait;
            $this->val_quot = $val_quot;
            $this->zone_geo = $zone_geo;
            $this->description = $description;
            $this->titre = $titre;
            $this->id_categ = $id_categ;
            $this->valide = $valide;
            $this->archive = $archive;
        }

        public function getId_annonce(): string{
            return $this->id_annonce;
        }

        public function setId_annonce(string $id_annonce): void{
            $this->id_annonce = $id_annonce;
        }

        public function getId_voisin(): string{
            return $this->id_voisin;
        }

        public function setId_voisin(string $id_voisin): void{
            $this->id_voisin = $id_voisin;
        }

        public function getDate(): string{
            return $this->date;
        }

        public function setDate(string $date): void{
            $this->date = $date;
        }

        public function getVal_forfait(): int{
            return $this->val_forfait;
        }

        public function setVal_forfait(int $val_forfait): void{
            $this->val_forfait = $val_forfait;
        }

        public function getVal_quot(): int{
            return $this->val_quot;
        }

        public function setVal_quot(int $val_quot): void{
            $this->val_quot = $val_quot;
        }

        public function getZone_geo(): int{
            return $this->zone_geo;
        }

        public function setZone_geo(int $zone_geo): void{
            $this->zone_geo = $zone_geo;
        }

        public function getDescription(): string{
            return $this->description;
        }

        public function setDescription(string $description): void{
            $this->description = $description;
        }

        public function getTitre(): string{
            return $this->titre;
        }

        public function setTitre(string $titre): void{
            $this->titre = $titre;
        }

        public function getId_categ(): string{
            return $this->id_categ;
        }

        public function setId_categ(string $id_categ): void{
            $this->id_categ = $id_categ;
        }

        public function getValide(): bool{
            return $this->valide;
        }

        public function setValdie(bool $valide): void{
            $this->valide = $valide;
        }

        public function getArchive(): bool{
            return $this->archive;
        }

        public function setArchive(bool $archive): void{
            $this->archive = $archive;
        }
    }